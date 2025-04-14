import { createContext, useContext, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { useStorage, Transaction, TransactionMap } from "@/hooks/useStorage";

interface TransactionState {
  allTransactions: Transaction[];
  getTransaction: (hash: string) => Transaction | undefined;
  setTransaction: (hash: string, transaction: Transaction) => void;
  removeTransaction: (hash: string) => void;
}

interface AppState {
  transaction: TransactionState;
}

const initialState: AppState = {
  transaction: {
    allTransactions: [],
    getTransaction: () => undefined,
    setTransaction: () => null,
    removeTransaction: () => null,
  },
};

const AppContext = createContext<AppState>(initialState);

const useTransactionState = () => {
  const [storage, setStorage] = useStorage();
  const [transactionMap, setTransactionMap] = useState<TransactionMap>(storage);

  const allTransactions = useMemo(
    () => Object.values(transactionMap),
    [transactionMap]
  );

  const getTransaction = (hash: string) => {
    return transactionMap[hash];
  };

  const setTransaction = (hash: string, newTransaction: Transaction) => {
    setTransactionMap((transactionMap) => {
      const newTransactionMap = { ...transactionMap, [hash]: newTransaction };
      setStorage(newTransactionMap);
      return newTransactionMap;
    });
  };

  const removeTransaction = (hash: string) => {
    setTransactionMap((transactionMap) => {
      const { [hash]: value, ...newTransactionMap } = transactionMap;
      console.log("value", value);
      setStorage(newTransactionMap);
      return newTransactionMap;
    });
  };

  return {
    allTransactions,
    getTransaction,
    setTransaction,
    removeTransaction,
  };
};

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider
      value={{
        transaction: useTransactionState(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export const useTransactionContext = () => {
  const { transaction } = useAppContext();
  return transaction;
};
