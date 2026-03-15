import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#000' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={`/${images[currentIndex]}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Imagem+Nao+Encontrada"; }}
        />
      </AnimatePresence>

      {/* Setas de Navegação */}
      <button onClick={prev} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}>
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {images.map((_, idx) => (
          <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: idx === currentIndex ? '#4b45cb' : 'rgba(255,255,255,0.3)' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;