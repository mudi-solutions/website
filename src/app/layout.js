import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";

const poppins = Poppins({weight:['300', '400','500','600', '700'], subsets: ["latin"], display:'swap' });

export const metadata = {
  title: {
    default: "Mudi Solutions",
    template: "%s | Mudi Solutions"
  },
  description: "Excellence in logistics services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster richColors />
      
      <Navbar />{children}</body>
    </html>
  );
}
