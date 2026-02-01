
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const sections = [
    {
      title: 'Centro de Soporte',
      description: 'Preguntas frecuentes y asistente virtual inteligente.',
      icon: 'support_agent',
      path: '/soporte',
      color: 'bg-primary'
    },
    {
      title: 'Academia de Cursos',
      description: 'Explora nuestros programas de modelaje profesional.',
      icon: 'school',
      path: '/', // Se definirá en el futuro módulo
      color: 'bg-white/5'
    },
    {
      title: 'Staff & Modelos',
      description: 'Gestión de perfiles y representación oficial.',
      icon: 'groups',
      path: '/', // Se definirá en el futuro módulo
      color: 'bg-white/5'
    },
    {
      title: 'Blog & Noticias',
      description: 'Lo último en la industria de la moda y castings.',
      icon: 'newspaper',
      path: '/', // Se definirá en el futuro módulo
      color: 'bg-white/5'
    }
  ];

  return (
    <div className="flex flex-col items-center py-20 px-6">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] gap-16">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase">
            Toma<span className="text-primary">uno.</span>
          </h1>
          <p className="text-white/60 text-xl font-light max-w-2xl">
            La plataforma definitiva para el modelaje profesional. Gestión centralizada de formación, representación y soporte técnico.
          </p>
        </div>

        {/* Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Link 
              key={index}
              to={section.path}
              className={`group flex flex-col gap-6 p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-2 ${section.color === 'bg-primary' ? 'ring-2 ring-primary/20' : ''}`}
            >
              <div className={`size-14 rounded-2xl flex items-center justify-center text-white ${section.color === 'bg-primary' ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-white/5 group-hover:bg-primary transition-colors'}`}>
                <span className="material-symbols-outlined text-3xl">{section.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{section.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {section.description}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Acceder ahora <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="relative rounded-3xl overflow-hidden h-64 flex items-center p-12 group">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            alt="Fashion background"
          />
          <div className="relative z-20 flex flex-col gap-4 max-w-lg">
            <h2 className="text-3xl font-black uppercase italic">Impulsando tu Carrera</h2>
            <p className="text-white/60 text-sm">Nuestra tecnología te permite gestionar tu carrera desde cualquier lugar del mundo con herramientas de última generación.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
