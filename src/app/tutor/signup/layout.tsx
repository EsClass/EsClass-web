import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Become a Tutor  - EsClass",
  openGraph: {
    title: "Become a Tutor - EsClass ",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
