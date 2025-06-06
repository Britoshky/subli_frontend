import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Condiciones de Servicio | SUBLI",
  description:
    "Conoce las condiciones de uso y servicio de SUBLI. Información sobre pedidos, pagos, tiempos de entrega, cambios y contacto.",
  keywords: [
    "condiciones de servicio",
    "términos y condiciones SUBLI",
    "compras personalizadas chile",
    "políticas de pedidos",
    "tiempos de entrega",
    "sublimación condiciones",
    "subli servicio al cliente",
    "cambios y devoluciones",
    "productos personalizados"
  ],
  openGraph: {
    title: "Condiciones de Servicio | SUBLI",
    description:
      "Lee nuestras condiciones para realizar pedidos personalizados de forma clara, segura y transparente.",
    url: "https://subli.cl/condiciones-servicio",
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

export default function CondicionesServicioPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Condiciones de Servicio
      </h1>

      <p className="text-gray-800 mb-4">
        En SUBLI nos esforzamos por entregar un servicio transparente, profesional y cercano. Al realizar un pedido, aceptas las siguientes condiciones de uso y servicio:
      </p>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">1. Pedidos personalizados</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Todos nuestros productos son personalizados, por lo que requieren confirmación de diseño antes de producción.</li>
        <li>Los pedidos se coordinan por WhatsApp, asegurando una comunicación directa y clara con el cliente.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">2. Tiempos de entrega</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>El tiempo de producción varía entre 2 a 5 días hábiles dependiendo del volumen del pedido y la complejidad del diseño.</li>
        <li>Los envíos se realizan vía Starken, Correos de Chile u otra empresa a coordinar con el cliente.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">3. Formas de pago</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Los pagos se realizan mediante transferencia bancaria a nombre de SUBLI (se entregan los datos al confirmar el pedido).</li>
        <li>También puedes pagar mediante plataformas seguras como MercadoPago si lo solicitas.</li>
        <li>El trabajo inicia una vez recibido el comprobante de pago.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">4. Cambios y devoluciones</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>No se aceptan devoluciones por productos personalizados salvo error comprobable por parte de SUBLI.</li>
        <li>Revisamos cuidadosamente cada producto antes de la entrega para asegurar su calidad.</li>
        <li>En caso de errores o defectos, se ofrecerá la reposición sin costo adicional.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">5. Propiedad del diseño</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>SUBLI puede reutilizar los diseños o fotografías de productos terminados para promoción en redes sociales, a menos que el cliente indique lo contrario.</li>
        <li>Los diseños entregados por el cliente deben contar con autorización de uso si son de terceros.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-3">6. Contacto</h2>
      <p className="text-gray-700">
        Si tienes dudas sobre nuestras condiciones, escríbenos al{" "}
        <a
          href="https://wa.me/56931440752"
          className="text-green-600 font-medium underline"
          target="_blank"
        >
          WhatsApp +56 9 3144 0752
        </a>{" "}
        o visita nuestras redes sociales.
      </p>

      <p className="mt-8 text-sm text-gray-500">Última actualización: junio 2025</p>
    </section>
  )
}
