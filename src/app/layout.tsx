import Wrapper from "@/components/Wrapper";
import { RProvider } from "@/redux/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EsClass",
  description: "Unlock Top Learning Resources & Practice Questions",
  openGraph: {
    type: "website",
    title: "EsClass",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <RProvider>
            <Wrapper>{children}</Wrapper>
          </RProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
