// components/CatalogoDestacado.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const productosDestacados = [
    {
        nombre: "Tazón Sublimado Clásico",
        precio: 4500,
        descripcion: "Tazón blanco de cerámica sublimado con diseño personalizado.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//tazon.jpg"
    },
    {
        nombre: "Tazón Mágico",
        precio: 6000,
        descripcion: "Tazón negro que revela el diseño al agregar líquido caliente.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//tazon_magico.jpg"
    },
    {
        nombre: "Rompecabezas Personalizado",
        precio: 3000,
        descripcion: "Rompecabezas sublimado con la imagen que tú elijas.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//rompecabezas.jpg"
    },
    {
        nombre: "Cojín Personalizado",
        precio: 5000,
        descripcion: "Cojín con relleno, diseño personalizado por lado.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//cojin.jpg"
    },
    {
        nombre: "Stickers Redondos 5cm",
        precio: 6000,
        descripcion: "50 unidades por $6.000, 100 unidades por $11.000.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//stickers_redondos.jpg"
    },
    {
        nombre: "Caja Milk",
        precio: 1200,
        descripcion: "Cajita tipo milk personalizada, ideal para cumpleaños o eventos.",
        imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//cajas_milks.jpg"
    }
]

export default function CatalogoDestacado() {
    return (
        <section className="w-full bg-[#fff8fc] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Productos <span className="text-pink-500">más vendidos</span>
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Nuestros clientes aman estos productos por su calidad y personalización. ¡Elige tu favorito!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productosDestacados.map((producto, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col">
                            <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
                                <Image
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-pink-600">{producto.nombre}</h3>
                            <p className="text-gray-700 text-sm mb-2">{producto.descripcion}</p>
                            <p className="text-blue-600 font-bold text-lg mb-4">${producto.precio.toLocaleString()}</p>
                            <Button className="mt-auto bg-pink-500 hover:bg-pink-600 text-white">
                                Encargar
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
