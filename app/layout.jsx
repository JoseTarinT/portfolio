import Header from "@/components/header/header";
import "./globals.css";
import { ThemeDetector } from "@/context/themeDetector";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Jose Tarin",
  description: "Jose Tarin's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeDetector>
          <Header />
          {children}
        </ThemeDetector>
      </body>
    </html>
  );
}
