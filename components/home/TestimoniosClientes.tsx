// components/TestimoniosClientes.tsx
export default function TestimoniosClientes() {
    const testimonios = [
      {
        nombre: "Camila A.",
        mensaje: "Encargué unas libretas personalizadas para el colegio de mi hija y quedaron ¡hermosas! Se nota el cariño en cada detalle.",
      },
      {
        nombre: "Jorge M.",
        mensaje: "Los cojines con frases que pedí para el Día de la Madre fueron un éxito. Buena calidad y excelente atención.",
      },
      {
        nombre: "Natalia R.",
        mensaje: "Pedí tazones personalizados para mi emprendimiento y llegaron antes de lo esperado. ¡Recomiendo 100%!",
      },
      {
        nombre: "Isidora V.",
        mensaje: "Los stickers quedaron preciosos. Me ayudaron a elegir el diseño y todo fue muy rápido.",
      },
    ]
  
    return (
      <section className="w-full py-16 bg-gradient-to-b from-[#fff8fc] via-white to-[#f3f4f6] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lo que <span className="text-pink-500">dicen nuestras clientas</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada producto que hacemos en Subli lleva dedicación, amor y mucho color. Estas son algunas de las experiencias reales de quienes han confiado en nosotros:
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {testimonios.map((item, idx) => (
              <blockquote key={idx} className="border-l-4 border-pink-500 pl-4 italic text-gray-800 bg-white p-6 rounded-md shadow-sm">
                <p className="mb-4">“{item.mensaje}”</p>
                <footer className="text-sm font-semibold text-pink-600">— {item.nombre}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    )
  }
  