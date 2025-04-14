"use client";

import { Provider as StoreProvider } from "react-redux";
import { Navbar } from "@/components/NavBar";
import Provider from "@/components/Provider";
import store from "@/store/page";
import { AppContextProvider } from "@/contexts/crossChainContext";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <Provider>
        <StoreProvider store={store}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </StoreProvider>
      </Provider>
    </AppContextProvider>
  );
}
