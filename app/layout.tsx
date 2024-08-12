import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./globals.css";
import "../app/styles/fonts.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import DesctopNav from "./components/Layout/Menu/DesctopNav";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Header />
          <DesctopNav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
