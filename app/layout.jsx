import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer/Footer";


const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono',
 });

export const metadata = {
  title: "Al-Amin_Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header></Header>
        <PageTransition>{children}</PageTransition>
        
        <Footer></Footer>
        
        </body>
    </html>
  );
}
