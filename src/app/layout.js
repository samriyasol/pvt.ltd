import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SAMRIYA Solution Pvt Ltd",
  description: "Digital Forensics & Data Integrity Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="antialiased selection:bg-purple-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}