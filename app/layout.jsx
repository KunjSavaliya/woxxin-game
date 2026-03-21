import CustomCursor from "./components/common/CustomCursor";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import RouteLoader from "./components/common/RouteLoader";
import SmoothScrollProvider from "./components/common/SmoothScrollProvider";

import "./globals.css";
import { Wendy_One, Poppins } from "next/font/google";

export const metadata = {
  title: "Woxxin Games | Next-Generation Gaming Experiences",
  description: "Crafting immersive, high-performance games designed to entertain, engage, and deliver unforgettable digital adventures.",
};

const wendy = Wendy_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wendy",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${wendy.variable} ${poppins.variable}`}>
        <RouteLoader>
          <CustomCursor />
          <Navbar />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <Footer />
        </RouteLoader>
      </body>
    </html>
  );
}