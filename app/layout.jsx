import Header from "@/components/header/header";
import "./globals.css";
import { ThemeDetector } from "@/context/themeDetector";
import { Footer } from "@/components/footer/footer";
import { BackToTopButton } from "@/components/backToTopButton/backToTopButton";

export const metadata = {
  title: "Jose Tarin — Full-Stack Developer",
  description: "Jose Tarin's portfolio website",
  icons: {
    icon: "/my-favicon.svg",
  },
  metadataBase: new URL("https://www.josetarin.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },

  openGraph: {
    title: "Jose Tarin — Full-Stack Developer",
    description:
      "Portfolio of Jose Tarin, Full-Stack Developer focused on scalable, high-performance web applications.",
    url: "https://www.josetarin.dev",
    siteName: "Jose Tarin Portfolio",
    images: [
      {
        url: "./public/jtlogo.png",
        width: 1200,
        height: 630,
        alt: "Jose Tarin Portfolio",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Jose Tarin — Full-Stack Developer",
  //   description:
  //     "Portfolio of Jose Tarin, Full-Stack Developer focused on scalable, high-performance web applications.",
  //   images: ["./public/jtlogo.png"],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeDetector>
          <Header />
          {children}
          <BackToTopButton />
          <Footer />
        </ThemeDetector>
      </body>
    </html>
  );
}
