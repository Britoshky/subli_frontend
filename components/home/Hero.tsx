// components/Hero.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#fff0f6] to-[#fdf9ff]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Bienvenido a <span className="text-pink-500">Subli</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Personalizamos tus ideas en <span className="text-yellow-400 font-medium">papelería creativa</span> y productos únicos mediante <span className="text-blue-600 font-medium">sublimación</span>. Dale color a tus momentos.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/productos">
            <Button variant="default" className="bg-pink-500 hover:bg-pink-600 text-white">
              Ver productos
            </Button>
          </Link>
          <Link href="/contacto">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
