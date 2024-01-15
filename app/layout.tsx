import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
