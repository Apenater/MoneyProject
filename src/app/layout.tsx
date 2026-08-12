import type { Metadata } from "next";

// Self-hosted fonts (no external network requests at build or runtime).
import "@fontsource/anton/400.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Money Project Inc. | Aprendé a manejar tu dinero e invertir",
  description:
    "Money Project Inc. es un programa de educación financiera de 6 sesiones en vivo (finanzas personales, bolsa y criptomonedas) + un evento presencial exclusivo. No es asesoría financiera, es educación.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-mp-black text-mp-cream">
        <div className="grain-fixed" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
