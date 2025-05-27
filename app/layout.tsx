import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/components/auth-provider";


const poppins = Poppins({
  weight: ['400', '500', '100', '200', '300', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tela de Login",
  description: "Criando uma tela de login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          richColors
          theme="light"
          duration={3000}
        />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
