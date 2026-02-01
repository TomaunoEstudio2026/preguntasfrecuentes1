
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[1200px] mx-auto py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-6 mt-auto">
      <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">© {currentYear} Tomauno Models</p>
      
      <div className="flex gap-8">
        <a href="#" className="text-white/20 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">brand_awareness</span>
        </a>
        <a href="#" className="text-white/20 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">movie</span>
        </a>
        <a href="#" className="text-white/20 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">photo_camera</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
