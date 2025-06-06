// app/productos/page.tsx
import type { Metadata } from "next"
import ProductosGrid from "@/components/productos/ProductosGrid"

export const metadata: Metadata = {
  title: "Productos Personalizados | SUBLI",
  description: "Descubre nuestra variedad de productos personalizados: tazones, stickers, cojines, agendas, cajas de regalo y más.",
  keywords: [
    "productos personalizados",
    "sublimación chile",
    "papelería personalizada",
    "stickers chile",
    "tazones personalizados",
    "regalos con diseño",
    "agendas con nombre",
    "productos creativos",
    "subli productos"
  ],
  openGraph: {
    title: "Productos Personalizados | SUBLI",
    description: "Catálogo de tazones, libretas, stickers, cojines y mucho más para regalar o decorar.",
    url: "https://subli.cl/productos",
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
    type: "website"
  }
}

export default function ProductosPage() {
    return (
      <main className="min-h-screen bg-white px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Todos nuestros <span className="text-pink-500">productos</span>
          </h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de productos personalizables. Cada pieza es única y hecha con cariño desde la Región del Maule.
          </p>
          <ProductosGrid />
        </div>
      </main>
    )
  }