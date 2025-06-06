"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const productos = [
    {
      nombre: "Tazón Mágico",
      precio: 6000,
      descripcion: "Tazón negro que revela el diseño al agregar líquido caliente.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//tazon_magico.jpg",
      tipo: "tazon"
    },
    {
      nombre: "Shopero Personalizado",
      precio: 8000,
      descripcion: "Vaso tipo shopero de vidrio con diseño sublimado.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//shopero.jpg",
      tipo: "tazon"
    },
    {
      nombre: "Botella de Aluminio",
      precio: 6500,
      descripcion: "Botella metálica de 500ml sublimada con diseño personalizado.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//botellas_aluminio.jpg",
      tipo: "tazon"
    },
    {
      nombre: "Stickers Redondos 6cm",
      precio: 10000,
      descripcion: "50 unidades por $10.000, 100 unidades por $15.000.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//stickers_redondos2.jpg",
      tipo: "stickers"
    },
    {
      nombre: "Stickers Redondos 7cm",
      precio: 14000,
      descripcion: "50 unidades por $14.000, 100 unidades por $19.000.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//stickers_redondos2.jpg",
      tipo: "stickers"
    },
    {
      nombre: "Chocolates Personalizados",
      precio: 350,
      descripcion: "Chocolates con envoltorio personalizado. Descuentos por cantidad: 20 uds a $330, 100 uds a $300 c/u.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//chocolates_personalizados.jpg",
      tipo: "cotillon"
    },
    {
      nombre: "Banderín Personalizado",
      precio: 5000,
      descripcion: "Banderines de tela con nombre o motivo personalizado.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//banderin.jpg",
      tipo: "cotillon"
    },
    {
      nombre: "Bolsas Dulceras",
      precio: 1200,
      descripcion: "Bolsitas personalizadas para dulces, cumpleaños o eventos.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//bolsas_dulceras.jpg",
      tipo: "cotillon"
    },
    {
      nombre: "Piñata de 40cm",
      precio: 12000,
      descripcion: "Piñata personalizada de 40 cm de diámetro. Precio desde los $12.000 en adelante",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//pinata.jpg",
      tipo: "cotillon"
    },
    {
      nombre: "Toppers Personalizados",
      precio: 5000,
      descripcion: "Toppers con nombres, temáticas o frases personalizadas para decorar tortas, cupcakes y mesas de celebración. Precio base desde $5.000.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//topper.jpg",
      tipo: "cotillon"
    },
    {
      nombre: "Carnet Control Sano",
      precio: 7000,
      descripcion: "Tapa personalizada para carnet de salud, solo cambio de tapa.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//carnet_control_sano.jpg",
      tipo: "libretas-agendas"
    },
    {
      nombre: "Tablas de Multiplicar",
      precio: 3000,
      descripcion: "Láminas educativas plastificadas de tablas de multiplicar.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//tablas_multiplicar.jpg",
      tipo: "escolares"
    },
    {
      nombre: "Horarios Imantados Personalizados",
      precio: 3000,
      descripcion: "Horarios escolares imantados con nombre, curso y diseño único. Perfecto para la vuelta a clases.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//horarios.jpg",
      tipo: "escolares"
    },
    {
      nombre: "Recuerdo Chocolates Día Especial",
      precio: 350,
      descripcion: "Chocolates con diseño especial para regalar en fechas importantes como día del padre, madre o profesor.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//recuerdo_chocolate.jpg",
      tipo: "fechas_especiales"
    },
    {
      nombre: "Recuerdo Lápiz Personalizado",
      precio: 1500,
      descripcion: "Lápiz con nombre o frase especial, ideal para regalar en celebraciones o actos escolares.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//recuerdo_lapiz.jpg",
      tipo: "fechas_especiales"
    },
    {
      nombre: "Recuerdo Manzana con Mensaje",
      precio: 1500,
      descripcion: "Manzana decorativa con mensaje o nombre, ideal como detalle especial para profes o cuidadores.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//recuerdo_manzana.jpg",
      tipo: "fechas_especiales"
    },
    {
      nombre: "Recuerdo Profesor Sorpresa",
      precio: 1200,
      descripcion: "Un detalle sorpresa especialmente diseñado para profesores. Incluye presentación especial.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//recuerdos_profesor.jpg",
      tipo: "fechas_especiales"
    },
    {
      nombre: "Tarjetas de Presentación",
      precio: 8500,
      descripcion: "Pack de 100 unidades, diseño incluido. Impresión a color.",
      imagen: "https://lmlxnkolpekzdikbchdk.supabase.co/storage/v1/object/public/productos-subli//tarjetas_presentacion.jpg",
      tipo: "corporativo"
    }
  ]
  

export default function ProductosGrid() {
  const [filtro, setFiltro] = useState<string>("todos")

  const categorias = ["todos", ...Array.from(new Set(productos.map(p => p.tipo)))]

  const productosFiltrados = filtro === "todos"
    ? productos
    : productos.filter(p => p.tipo === filtro)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat, i) => (
          <Button
            key={i}
            variant={filtro === cat ? "default" : "outline"}
            onClick={() => setFiltro(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productosFiltrados.map((producto, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <div className="relative w-full h-52 rounded-t-md overflow-hidden">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-600">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
              <p className="text-blue-700 font-bold mb-4">${producto.precio.toLocaleString()}</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Encargar por WhatsApp
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
