"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactForm() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")

    const enviarWhatsApp = () => {
        const numero = "56931440752"
        const texto = `Hola, soy ${nombre} 👋%0A
Correo: ${correo}%0A
Mensaje: ${mensaje}`

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
        window.open(url, "_blank")
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                enviarWhatsApp()
            }}
            className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 w-full max-w-2xl mx-auto space-y-6"
        >
            <h1 className="text-4xl font-bold text-center text-pink-600 mb-6 tracking-tight">
                Contáctanos
            </h1>

            <div className="space-y-1">
                <Label htmlFor="nombre" className="text-base font-medium text-gray-700">
                    Nombre
                </Label>
                <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="transition-all border-gray-300 focus:border-pink-500 focus:ring-pink-500 rounded-md"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="correo" className="text-base font-medium text-gray-700">
                    Correo electrónico
                </Label>
                <Input
                    id="correo"
                    type="email"
                    placeholder="tunombre@email.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    className="transition-all border-gray-300 focus:border-pink-500 focus:ring-pink-500 rounded-md"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="mensaje" className="text-base font-medium text-gray-700">
                    Mensaje
                </Label>
                <Textarea
                    id="mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    className="min-h-[120px] transition-all border-gray-300 focus:border-pink-500 focus:ring-pink-500 rounded-md"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1ebc5e] text-white font-semibold text-base py-3 rounded-md flex items-center justify-center gap-2 transition-all"
            >
                <FaWhatsapp size={20} />
                Enviar mensaje por WhatsApp
            </Button>
        </form>
    )
}
