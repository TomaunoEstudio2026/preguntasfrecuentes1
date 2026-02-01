
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center border-b border-white/5 bg-background-dark/95 backdrop-blur-md sticky top-0 z-50">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px]">
        <header className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-12">
            <a href="/index.html" className="flex items-center hover:opacity-80 transition-opacity">
              <h2 className="text-white text-2xl font-black tracking-tighter uppercase">
                Toma<span className="text-primary">uno</span>
              </h2>
            </a>
            
            <nav className="hidden md:flex items-center gap-10">
              <a href="https://capacitaciones-six.vercel.app/index.html" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Cursos</a>
              <a href="/modelos.html" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Modelos</a>
              <a href="/staff.html" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Staff</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white text-xl">person</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
