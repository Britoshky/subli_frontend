// components/Footer.tsx
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#fdf9ff] border-t border-gray-200 py-10 px-6 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
        
        {/* Logo y derechos */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/logo-subli.png"
            alt="Logo Subli"
            width={100}
            height={100}
            priority
          />
          <p className="text-gray-500">&copy; {new Date().getFullYear()} <strong>SUBLI</strong>. Todos los derechos reservados.</p>
        </div>

        {/* Información de contacto */}
        <div>
          <h4 className="text-pink-500 font-semibold mb-3">Contacto</h4>
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>📍 Federico Albert #421</p>
            <p>Chanco, Región del Maule, Chile</p>
            <a
              href="https://wa.me/56931440752"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:underline mt-2"
            >
              <FaWhatsapp size={16} /> +56 9 3144 0752
            </a>
          </div>
        </div>

        {/* Redes sociales + enlaces legales */}
        <div>
          <h4 className="text-pink-500 font-semibold mb-3">Síguenos</h4>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <Link
              href="https://www.instagram.com/subli_hp"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={22} />
            </Link>
            <Link
              href="https://www.facebook.com/sublihp"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Facebook size={22} />
            </Link>
          </div>

          {/* Enlaces legales correctos */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/politicas-de-privacidad" className="hover:underline text-gray-600">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:underline text-gray-600">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
