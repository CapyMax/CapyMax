"use client";

import { Provider as StoreProvider } from "react-redux";
import { Navbar } from "@/components/NavBar";
import Provider from "@/components/Provider";
import store from "@/store/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <StoreProvider store={store}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </StoreProvider>
    </Provider>
  );
}
