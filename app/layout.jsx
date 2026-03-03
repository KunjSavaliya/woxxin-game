import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import "./globals.css";
import { Gorditas } from "next/font/google";

export const metadata = {
  title: "Gaming Website",
  description: "Best Gaming Experience",
};

const gorditas = Gorditas({
  subsets: ["latin"],
  weight: ["400", "700"], // Gorditas supports 400 & 700
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gorditas.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}

export { rye };