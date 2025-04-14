import { useState, useEffect } from "react";
export enum TransactionType {
  SEND = "SEND",
  REDEEM = "REDEEM",
}

export enum TransactionStatus {
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
}
export interface TransactionMap {
  [key: string]: Transaction;
}
export interface TransactionInputs {
  source: string;
  target: string;
  address: string;
  amount: string;
}

export interface Transaction {
  // transaction hash (txHash)
  hash: string;
  type: TransactionType;
  status: TransactionStatus;
  // above will be after `depositForBurn` but before `transactionReceipt`. will need to display all of these
  messageBytes?: string;
  messageHash?: string;
  // above will be after `transactionReceipt` but before attestation
  signature?: string;
  // above will be after attestation but before redeem flow (Only for Send transaction)
  nextHash?: string;
  // above will be after redeem tx is submitted (Only for Send transaction)
}

const TRANSACTION_KEY = "transactions";

const useStorage = <T>(
  initialValue: T = {} as unknown as T,
  initialKey: string = TRANSACTION_KEY
) => {
  const [storage, setStorage] = useState(() => {
    const storedValue = localStorage.getItem(initialKey);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const value = JSON.stringify(storage);
    localStorage.setItem(initialKey, value);
  }, [storage]);

  return [storage, setStorage] as const;
};

export { useStorage };
