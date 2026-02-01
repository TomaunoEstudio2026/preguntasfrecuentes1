
import React, { useState } from 'react';
import { gasService } from '../services/gasService';
import { CONFIG } from '../config';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [faqs] = useState<FAQItem[]>([
    {
      question: "¿Cómo me inscribo en los cursos?",
      answer: "Puedes inscribirte directamente desde nuestra sección de 'Cursos' seleccionando el programa de tu interés. Al hacer clic en 'Inscribirse', completarás un formulario de registro y podrás elegir tu método de pago preferido. Recibirás un correo de confirmación con los siguientes pasos inmediatamente después."
    },
    {
      question: "¿Qué requisitos hay para ser modelo de Staff?",
      answer: "Para formar parte de nuestro Staff oficial, realizamos castings trimestrales. Buscamos perfiles diversos con compromiso profesional. Se requiere haber completado al menos un curso de pasarela o fotografía comercial en nuestra academia o contar con un portfolio profesional verificado por nuestros agentes."
    },
    {
      question: "¿Cómo actualizo mi portfolio profesional?",
      answer: "Los modelos de Staff tienen acceso a un panel privado. Solo debes iniciar sesión, ir a 'Mi Perfil' y cargar las nuevas capturas de alta resolución. Recomendamos actualizar el portfolio cada vez que realices una campaña importante o cambies de look radicalmente."
    },
    {
      question: "¿Cuáles son los medios de pago aceptados?",
      answer: "Aceptamos todas las tarjetas de crédito y débito a través de Mercado Pago, transferencias bancarias directas y pagos en efectivo para residentes locales. Ofrecemos planes de cuotas sin interés para cursos anuales seleccionados."
    },
    {
      question: "¿Recibo certificado al finalizar el curso?",
      answer: "Sí, todos nuestros programas educativos concluyen con la entrega de un diploma certificado por Tomauno Models, validando tus habilidades en modelaje, expresión corporal y ética profesional en la industria de la moda."
    }
  ]);

  const handleSupportClick = async () => {
    await gasService.postData('logInteraction', { type: 'whatsapp_click', page: 'FAQ' });
    const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center py-16 px-6">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] gap-12">
        
        <div className="flex flex-col gap-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-dark/30 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit">
            Centro de Ayuda
          </div>
          <h1 className="text-white text-6xl font-black leading-none tracking-tighter uppercase">Preguntas<br/>Frecuentes</h1>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
            Soporte Tomauno Models - Todo lo que necesitas saber sobre nuestra academia de modelaje profesional y representación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* FAQ List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-card-dark rounded-2xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/10"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-8 py-6 list-none select-none">
                  <span className="text-white text-lg font-bold tracking-tight">{faq.question}</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-500">expand_more</span>
                </summary>
                <div className="px-8 pb-8 pt-0">
                  <p className="text-white/50 text-base font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-8 rounded-[2rem] bg-card-dark p-10 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="text-white text-3xl font-black tracking-tight uppercase italic">¿Aún tienes dudas?</h3>
                <p className="text-white/40 text-base font-normal leading-relaxed">
                  Si no encuentras la respuesta que buscas, nuestro equipo de soporte personalizado está disponible para guiarte.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <a 
                  href="/asistente.html"
                  className="flex w-full items-center justify-center gap-3 rounded-xl h-16 px-8 bg-primary hover:bg-primary/90 transition-all text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  <span>Asistente Virtual</span>
                </a>
                
                <button 
                  onClick={handleSupportClick}
                  className="flex w-full items-center justify-center gap-3 rounded-xl h-16 px-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-black text-sm uppercase tracking-widest hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined text-[#25D366]">chat</span>
                  <span>WhatsApp a Javier</span>
                </button>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Soporte Online ahora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
