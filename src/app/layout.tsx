import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./globals.css";
import { marhey, workSans } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "Open South",
  description:
    "Welcome to Open South, your premier open data platform designed to empower researchers, scholars practitioners, policymakers, and communities within countries in the Global South. Our mission is to facilitate access to valuable data, foster collaboration, and promote sustainable development across diverse domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.variable} ${marhey.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="min-h-screen flex">{children}</div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
