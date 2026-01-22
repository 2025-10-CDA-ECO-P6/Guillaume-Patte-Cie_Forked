import { Manrope } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { ReferenceProvider } from "./contexte/ReferenceContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Patte & Cie",
  description: "Carnet de santé digital pour animaux",
};

export default function RootLayout({ children }) {
  return (
    <ReferenceProvider>
      <html lang="en">
        <body className={manrope.variable} suppressHydrationWarning>
          {children}
          <Navbar />
        </body>
      </html>
    </ReferenceProvider>
  );
}
