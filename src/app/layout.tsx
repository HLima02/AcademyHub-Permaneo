import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
