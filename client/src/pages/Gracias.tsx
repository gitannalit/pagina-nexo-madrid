/*
 * NEXO DUBÁI - MADRID — Página de Confirmación de Pago
 * Design: Neo-Luxury Premium Dark (Negro profundo + Dorado cálido)
 * Fonts: Geist — misma tipografía que la landing
 * Colors: #0a0a0a background, #C9A84C/#D4AF37 gold accents, #F5F5F5 text
 */

import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/IMNjVD48zbS9hlp0XmeDQP";

export default function Gracias() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4 py-16 overflow-x-hidden">

      {/* Ambient gold glow — top right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Ambient gold glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-12 z-10">
        <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
          <span className="text-[#0a0a0a] font-black text-sm">N</span>
        </div>
        <div>
          <div className="font-black text-white text-lg leading-none tracking-tight">NEXO DUBÁI</div>
          <div className="text-[#C9A84C] text-[9px] font-bold tracking-widest leading-none mt-0.5">MADRID</div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg text-center">

        {/* Check icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center pulse-gold">
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-[#C9A84C]" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider line top */}
        <div className="gold-divider mb-8 mx-auto w-24" />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-6">
          <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Confirmación de pago</span>
        </div>

        {/* Main message */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-balance">
          Hemos recibido tu{" "}
          <span className="text-gradient-gold">pago correctamente</span>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-10 text-pretty">
          Tu plaza para el evento{" "}
          <span className="text-[#C9A84C] font-semibold">Nexo Dubái Madrid</span>{" "}
          del 25 y 26 de abril de 2026 está confirmada. Pronto recibirás todos los detalles por correo.
        </p>

        {/* Gold divider */}
        <div className="gold-divider mb-10 mx-auto w-32" />

        {/* WhatsApp CTA */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">
            Siguiente paso
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full btn-gold-outline rounded-2xl px-8 py-5 text-base font-black tracking-widest overflow-hidden"
            aria-label="Unirme a la comunidad de WhatsApp de Nexo Dubái Madrid"
          >
            {/* WhatsApp icon */}
            <MessageCircle className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>UNIRME A LA COMUNIDAD DE WHATSAPP</span>
          </a>

          <p className="text-gray-600 text-xs leading-relaxed">
            Accede al grupo exclusivo de asistentes donde compartiremos actualizaciones,
            agenda y recursos previos al evento.
          </p>
        </div>


      </div>
    </div>
  );
}
