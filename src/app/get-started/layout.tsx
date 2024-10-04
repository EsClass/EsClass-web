import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us - EsClass",
  openGraph: {
    title: "About Us - EsClass ",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
