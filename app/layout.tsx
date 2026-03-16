import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puentes de Éxito | Trabajo social profesional",
  description:
    "Acompañamiento social y emocional para personas y familias. Espacio profesional de orientación, apoyo e intervención social.",
  keywords: [
    "trabajo social",
    "orientación familiar",
    "acompañamiento emocional",
    "consulta social online"
  ],
  openGraph: {
    title: "Puentes de Éxito",
    description:
      "Acompañamiento social y emocional para avanzar hacia tu bienestar.",
    type: "website",
    locale: "es_ES"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
