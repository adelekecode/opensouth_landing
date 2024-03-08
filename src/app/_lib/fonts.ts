import { Marhey, Work_Sans } from "next/font/google";

export const workSans = Work_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-work-sans",
});

export const marhey = Marhey({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-marhey",
});
