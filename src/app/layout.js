import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "laurenzjulian",
  description: "made by laurenz julian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
