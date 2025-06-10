import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Seguridad | SUBLI",
  description:
    "Conoce las políticas de seguridad de SUBLI. Protegemos tus datos personales y aseguramos una experiencia de compra confiable y segura.",
  keywords: [
    "seguridad en compras",
    "protección de datos",
    "sublimación segura",
    "política de privacidad",
    "datos personales",
    "compra segura chile",
    "subli políticas de seguridad",
    "pagos protegidos",
    "confianza en SUBLI",
  ],
  openGraph: {
    title: "Políticas de Seguridad | SUBLI",
    description:
      "Protegemos tu información personal y aseguramos tus transacciones. En SUBLI valoramos tu confianza.",
    url: "https://subli.cl/politicas-seguridad",
    siteName: "SUBLI",
    images: [
      {
        url: "https://subli.cl/logo-subli.png",
        width: 600,
        height: 600,
        alt: "Logo Subli",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function PoliticasSeguridadPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          Políticas de Seguridad
        </h1>

        <p className="text-gray-800 mb-4">
          En <strong>SUBLI</strong>, tu seguridad y privacidad son nuestra
          prioridad. Nos comprometemos a proteger tus datos personales y
          garantizar que tu experiencia de compra sea segura, transparente y
          confiable.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">
          Protección de datos
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>No compartimos tu información con terceros no autorizados.</li>
          <li>
            Solo usamos tus datos para procesar pedidos y contactar por medios
            oficiales (WhatsApp, correo, redes sociales).
          </li>
          <li>
            Podrás solicitar la eliminación de tus datos cuando lo estimes
            conveniente.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">
          Transacciones y pagos
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Las compras se coordinan directamente con el equipo de SUBLI
            mediante WhatsApp.
          </li>
          <li>
            No solicitamos contraseñas ni datos bancarios por mensajes ni redes
            sociales.
          </li>
          <li>
            Los pagos se realizan mediante métodos seguros: transferencia
            bancaria o servicios autorizados.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">
          Comunicación confiable
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Nuestros canales oficiales son: WhatsApp +56 9 3144 0752, Instagram{" "}
            <a
              href="https://instagram.com/subli_hp"
              target="_blank"
              className="text-blue-600 underline"
            >
              subli_hp
            </a>{" "}
            y Facebook{" "}
            <a
              href="https://facebook.com/sublihp"
              target="_blank"
              className="text-blue-600 underline"
            >
              sublihp
            </a>
            .
          </li>
          <li>
            No se enviarán promociones ni enlaces sospechosos desde otras
            cuentas.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">
          Cambios en la política
        </h2>
        <p className="text-gray-700">
          Esta política puede actualizarse para adaptarse a nuevas normativas o
          mejoras en nuestro servicio. Recomendamos revisarla periódicamente.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: junio 2025
        </p>
      </section>
      <Footer />
    </>
  );
}
