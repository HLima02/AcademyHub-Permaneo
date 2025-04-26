import type { Metadata } from "next";

import Header from '@/components/Header'

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
        <Header />
        {children}
      </body>
    </html>
  );
}
