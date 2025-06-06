// components/SeccionOfrecemos.tsx
export default function SeccionOfrecemos() {
    const servicios = [
      {
        titulo: "Sublimación personalizada",
        descripcion: "Transformamos tazones, cojines, libretas y más en piezas únicas que representan tu estilo o marca.",
        color: "text-pink-500",
      },
      {
        titulo: "Papelería creativa",
        descripcion: "Diseñamos agendas, stickers, cuadernos y productos escolares con detalles originales y temáticos.",
        color: "text-yellow-500",
      },
      {
        titulo: "Regalos con sentido",
        descripcion: "Creamos recuerdos y detalles personalizados para celebraciones, cumpleaños, empresas y fechas especiales.",
        color: "text-blue-600",
      },
      {
        titulo: "Diseño a tu medida",
        descripcion: "¿Tienes una idea especial? La hacemos realidad con atención al detalle y mucho cariño.",
        color: "text-purple-500",
      },
    ]
  
    return (
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lo que <span className="text-pink-500">ofrecemos</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            En Subli unimos creatividad, calidad y amor en cada producto. Estas son algunas de nuestras especialidades:
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {servicios.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-[#fdf9ff] p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.titulo}</h3>
                <p className="text-gray-700">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  