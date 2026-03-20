import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import "./globals.css";
import { Wendy_One } from "next/font/google";

export const metadata = {
  title: "Woxxin Games | Next-Generation Gaming Experiences",
  description: "Crafting immersive, high-performance games designed to entertain, engage, and deliver unforgettable digital adventures.",
};

const wendyOne = Wendy_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={wendyOne.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}