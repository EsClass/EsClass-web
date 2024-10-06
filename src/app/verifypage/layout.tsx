import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Verify - EsClass",
  openGraph: {
    title: "Verify - EsClass ",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;