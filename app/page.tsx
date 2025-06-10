// app/page.tsx
import type { Metadata } from "next"
import CatalogoDestacado from "@/components/home/CatalogoDestacado"
import FAQ from "@/components/home/FAQ"
import Hero from "@/components/home/Hero"
import SeccionOfrecemos from "@/components/home/SeccionOfrecemos"
import TestimoniosClientes from "@/components/home/TestimoniosClientes"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Subli | Papelería y Sublimación Personalizada en Chile",
  description: "Subli es un emprendimiento chileno especializado en productos personalizados: tazones, stickers, cojines, agendas y más. Calidad, creatividad y amor en cada detalle.",
  keywords: [
    "sublimación personalizada",
    "papelería creativa",
    "tazones personalizados",
    "stickers personalizados",
    "cojines con diseño",
    "agendas personalizadas",
    "sublimación Chile",
    "papelería Chanco",
    "regalos personalizados",
    "productos hechos a mano"
  ],
  authors: [{ name: "SUBLI", url: "https://subli.cl" }],
  openGraph: {
    title: "Subli | Papelería y Sublimación Personalizada en Chile",
    description: "Regala momentos únicos con productos personalizados: tazones, libretas, cojines y más. Envíos a todo Chile.",
    url: "https://subli.cl",
    siteName: "SUBLI",
    images: [
      {
        url: "https://subli.cl/logo-subli.png",
        width: 600,
        height: 600,
        alt: "Logo Subli"
      }
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subli | Papelería y Sublimación Personalizada",
    description: "Tazones, stickers, cojines y más. Diseñados con amor en Chanco, Región del Maule.",
    images: ["https://subli.cl/logo-subli.png"],
    site: "@subli_hp"
  }
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SeccionOfrecemos />
      <CatalogoDestacado />
      <TestimoniosClientes />
      <FAQ />
      <Footer />
    </main>
  )
}
