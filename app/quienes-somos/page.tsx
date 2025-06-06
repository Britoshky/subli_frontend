import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos | SUBLI",
  description: "Conoce la historia, misión, visión y valores de SUBLI, un emprendimiento chileno de papelería y sublimación personalizada liderado por Paula Torres Hernández.",
  keywords: [
    "quiénes somos",
    "sobre nosotros",
    "SUBLI",
    "papelería personalizada",
    "sublimación Chile",
    "emprendimiento creativo",
    "Paula Torres Hernández"
  ]
}

export default function QuienesSomosPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">Quiénes Somos</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nuestra Historia</h2>
          <p>
            SUBLI nació hace aproximadamente dos años con la motivación de unir la pasión por el diseño gráfico y las manualidades. Inspirada por mi formación en diseño gráfico, decidí crear un espacio donde la creatividad, la utilidad y la personalización se mezclaran para entregar productos únicos con un sello emocional.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nuestra Misión</h2>
          <p>
            En SUBLI nos dedicamos a atender las necesidades personalizadas de niños, jóvenes y adultos, entregando productos escolares, regalos y detalles únicos con diseño y amor. Nos comprometemos a ofrecer soluciones prácticas, creativas y con valor emocional.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nuestra Visión</h2>
          <p>
            Nuestro objetivo es expandirnos a nivel regional y nacional, ofreciendo nuestros productos a todo Chile. Buscamos generar un impacto positivo en las emociones, en la educación y en la vida cotidiana de nuestros clientes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nuestros Valores</h2>
          <ul className="list-disc pl-6">
            <li>Creatividad en cada diseño</li>
            <li>Cercanía con cada cliente</li>
            <li>Calidad profesional en los productos</li>
            <li>Compromiso con cada entrega</li>
            <li>Amor por lo que hacemos</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">¿Quién está detrás de SUBLI?</h2>
          <p>
            Mi nombre es <strong>Paula Torres Hernández</strong>, estudiante de diseño gráfico y fundadora de SUBLI. Trabajo de manera independiente, y me encargo personalmente de cada diseño, producción y entrega. Este proyecto es el reflejo de mi vocación y amor por lo que hago.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">¿Qué nos hace diferentes?</h2>
          <p>
            En SUBLI, cada pedido se hace con cariño, cuidado y profesionalismo. Usamos herramientas de automatización como asistentes virtuales y chatbots para comprender mejor las necesidades de nuestros clientes, ofrecer una experiencia moderna, eficiente y con alto estándar de diseño.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">Lo que opinan nuestros clientes</h2>
          <p>
            Nuestros clientes destacan la calidad de nuestros productos, la atención cercana y la rapidez en las entregas. Nos esforzamos por crear recuerdos que emocionan y productos que se sienten únicos desde el primer vistazo.
          </p>
        </div>
      </div>
    </section>
  )
}