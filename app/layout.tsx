import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>EVM</title>

        {/* Favicon for browser tab */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Optional: Apple touch icon for iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
