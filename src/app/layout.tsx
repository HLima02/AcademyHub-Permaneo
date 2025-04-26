import type { Metadata } from "next";

import UserProvider from '@/context/userContext'
import Header from '@/components/Header'
import Footer from "@/components/Footer";

import './global.scss'

export const metadata: Metadata = {
  title: "AcademyHub Permaneo",
  description: "Teste tecnico para vaga de desenvolvedor Front End no Grupo Permaneo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
