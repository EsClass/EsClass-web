import MainNav from "@/components/navs/TutorNav";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Account  - EsClass for Tutor",
  openGraph: {
    title: "Account - EsClass for Tutor ",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainNav>{children}</MainNav>;
};

export default Layout;
