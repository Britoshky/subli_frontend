import ContactForm from "@/components/contacto/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | SUBLI",
  description:
    "¿Tienes dudas o quieres hacer un pedido personalizado? En SUBLI estamos aquí para ayudarte. Escríbenos fácilmente por WhatsApp.",
  keywords: [
    "contacto SUBLI",
    "hablar por whatsapp",
    "sublimación personalizada",
    "productos personalizados chile",
    "papelería creativa",
    "regalos personalizados",
    "contactar SUBLI",
    "subli contacto chile",
  ],
  openGraph: {
    title: "Contáctanos | SUBLI",
    description:
      "Escríbenos directo por WhatsApp para resolver tus dudas o encargar tus productos personalizados.",
    url: "https://subli.cl/contacto",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
