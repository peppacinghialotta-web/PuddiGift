import React, { useState, useRef, useEffect } from 'react';
import { styles } from './Styles/IHomeStyle';
import Mappings from '../Helpers/Mappings';

export const ScratchCard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [coupon, setCoupon] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  // Inizializza il coupon e lo strato da grattare
  useEffect(() => {
    const randomCoupon = Mappings.COUPONS[Math.floor(Math.random() * Mappings.COUPONS.length)];
    setCoupon(randomCoupon);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Setup per schermi ad alta densità (Retina/AMOLED)
        const dpr = window.devicePixelRatio || 1;
        ctx.scale(dpr, dpr);

        // Colore della vernice da grattare (Argento satinato)
        ctx.fillStyle = '#D1D5DB'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Pattern decorativo (puntini)
        ctx.fillStyle = '#9CA3AF';
        for (let i = 0; i < canvas.width; i += 20) {
          for (let j = 0; j < canvas.height; j += 20) {
            ctx.beginPath();
            ctx.arc(i, j, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Testo guida
        ctx.fillStyle = '#6B7280';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('GRATTA QUI 💖', canvas.width / (2 * dpr), canvas.height / (2 * dpr) + 6);
      }
    }
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect();
      // Calcolo corretto della posizione considerando lo scroll e il resize
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2); // Raggio leggermente più grande per mobile
      ctx.fill();

      if (!isRevealed) checkReveal(ctx, canvas);
    }
  };

  const checkReveal = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clearPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) clearPixels++;
    }
    const percentage = (clearPixels / (canvas.width * canvas.height)) * 100;
    if (percentage > 45) {
      setIsRevealed(true);
      if ('vibrate' in navigator) navigator.vibrate(100); // Feedback al completamento
    }
  };

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      minHeight: '480px',
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'clamp(15px, 5vw, 25px)',
      textAlign: 'center',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 20px 40px rgba(150, 180, 200, 0.2)',
      margin: '10px auto'
    }}>
      {/* Header Responsive */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '10px' }}>
       <button onClick={onBack} style={{
            position: 'absolute', top: 20, left: 20, zIndex: 100,
            border: 'none', background: 'rgba(255,255,255,0.7)',
            padding: '8px 15px', borderRadius: '20px', cursor: 'pointer',
            fontFamily: 'sans-serif', fontSize: '14px', backdropFilter: 'blur(5px)'
          }}>Torna alla Home </button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
        <p style={{ 
          fontSize: 'clamp(14px, 4vw, 16px)', 
          color: '#5a4a6a', 
          fontStyle: 'italic',
          margin: 0,
          padding: '0 10px'
        }}>
          C'è un regalo per te... <br/> 
          <b>gratta con il dito</b> per scoprire cos'è!
        </p>

        {/* Card Area Responsive */}
        <div style={{ 
          position: 'relative', 
          width: '100%', // Adatta alla larghezza del contenitore
          aspectRatio: '1.75 / 1', // Mantiene la proporzione della card
          maxWidth: '320px',
          margin: '0 auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
          touchAction: 'none' // Fondamentale per evitare lo scroll della pagina mentre si gratta
        }}>
          {/* Il Premio (Sotto) */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: '#fff', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '15px', boxSizing: 'border-box',
            border: '3px dashed #ffb3c1', borderRadius: '20px'
          }}>
            <h2 style={{ 
              fontFamily: "'Georgia', serif", 
              color: '#5a4a6a', 
              fontSize: 'clamp(16px, 4.5vw, 22px)',
              lineHeight: '1.3',
              margin: 0
            }}>
              {coupon}
            </h2>
          </div>

          <canvas
            ref={canvasRef}
            width={320} // Width base, scalata via CSS
            height={182}
            onMouseDown={() => (isDrawing.current = true)}
            onMouseUp={() => (isDrawing.current = false)}
            onMouseLeave={() => (isDrawing.current = false)}
            onMouseMove={(e) => isDrawing.current && scratch(e.clientX, e.clientY)}
            onTouchStart={() => (isDrawing.current = true)}
            onTouchEnd={() => (isDrawing.current = false)}
            onTouchMove={(e) => scratch(e.touches[0].clientX, e.touches[0].clientY)}
            style={{ 
              position: 'absolute', top: 0, left: 0, 
              width: '100%', height: '100%',
              cursor: 'crosshair', touchAction: 'none' 
            }}
          />
        </div>
      </div>

      <div style={{ minHeight: '60px', marginTop: '20px' }}>
        {isRevealed && (
          <div style={{ animation: 'fadeIn 0.8s ease' }}>
            <p style={{ 
              color: '#ff4d6d', 
              fontWeight: 'bold', 
              fontSize: '14px',
              margin: '0 0 10px 0'
            }}>
              ✨ È TUO! ✨ <br/>
              <span style={{ fontWeight: '400', fontSize: '12px' }}>Fai uno screenshot per riscattarlo ❤️</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};