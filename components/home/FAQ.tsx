// components/FAQ.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="w-full py-16 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Preguntas <span className="text-pink-500">frecuentes</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Respondemos tus dudas más comunes sobre pedidos, diseños y entregas en Subli.
        </p>

        <Accordion type="single" collapsible className="text-left">
          <AccordionItem value="1">
            <AccordionTrigger>¿Hacen envíos a todo Chile?</AccordionTrigger>
            <AccordionContent>
              Sí, realizamos envíos a todo Chile a través de Correos de Chile, Starken o Chilexpress. El valor se calcula según tu comuna.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>¿Cuánto se demora un pedido personalizado?</AccordionTrigger>
            <AccordionContent>
              Generalmente entre 3 a 5 días hábiles, dependiendo del tipo de producto y cantidad. Te informamos al momento de confirmar el diseño.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>¿Puedo ver el diseño antes de que lo hagan?</AccordionTrigger>
            <AccordionContent>
              ¡Por supuesto! Siempre enviamos una maqueta digital para que la apruebes antes de producir.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>¿Tienen retiro en persona?</AccordionTrigger>
            <AccordionContent>
              Sí, puedes retirar en nuestra dirección en Chanco. Coordinamos día y hora contigo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="5">
            <AccordionTrigger>¿Hacen descuentos por cantidad?</AccordionTrigger>
            <AccordionContent>
              Sí, mientras mayor sea la cantidad, mejor precio por unidad. Ideal para empresas, eventos o colegios.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="6">
            <AccordionTrigger>¿Qué formas de pago aceptan?</AccordionTrigger>
            <AccordionContent>
              Transferencia bancaria, débito/crédito vía link de pago, o efectivo si es retiro en persona.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="7">
            <AccordionTrigger>¿Puedo pedir un diseño completamente personalizado?</AccordionTrigger>
            <AccordionContent>
              ¡Claro! Podemos crear desde cero según tu idea, colores, temática y nombre.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="8">
            <AccordionTrigger>¿Tienen catálogo de productos?</AccordionTrigger>
            <AccordionContent>
              Sí, puedes ver nuestro catálogo en esta misma página o pedirlo por WhatsApp.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="9">
            <AccordionTrigger>¿Qué pasa si mi producto llega dañado?</AccordionTrigger>
            <AccordionContent>
              En caso de daño por transporte, debes informarnos con fotos dentro de las 24 horas para gestionar reposición o solución.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="10">
            <AccordionTrigger>¿Hacen pedidos corporativos o para empresas?</AccordionTrigger>
            <AccordionContent>
              Sí, realizamos agendas, libretas, tazones y otros productos con logos, frases o campañas para empresas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
