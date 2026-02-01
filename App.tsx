
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import AssistantPage from './pages/AssistantPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-background-dark text-white overflow-x-hidden font-display">
        <Header />
        
        <main className="flex-1">
          <Routes>
            {/* La ruta principal ahora es directamente Preguntas Frecuentes */}
            <Route path="/" element={<FAQPage />} />
            <Route path="/asistente" element={<AssistantPage />} />
            
            {/* Redirección de seguridad al inicio (FAQ) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
