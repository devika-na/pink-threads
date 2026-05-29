import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-pink-200">

        {/* SIDEBAR (GLOBAL) */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 flex justify-center">
          {children}
        </main>

      </body>
    </html>
  );
}