import React, { useState, useRef } from 'react';
import { styles } from './Styles/IHomeStyle';
import Mappings from '../Helpers/Mappings';

export const BucketList: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  // Altezza proporzionale per adattarsi a diverse altezze di schermo
  const ITEM_HEIGHT = 100; 

  const startSpin = () => {
    if (isSpinning || !stripRef.current) return;

    setIsSpinning(true);
    setShowHearts(false);

    const finalIdx = Math.floor(Math.random() * Mappings.DESIDERI.length);
    const strip = stripRef.current;
    
    strip.style.transition = 'none';
    strip.style.transform = 'translateY(0)';
    
    void strip.offsetHeight; 

    const extraCycles = 3; 
    const totalDistance = (finalIdx * ITEM_HEIGHT) + (Mappings.DESIDERI.length * ITEM_HEIGHT * extraCycles);
    
    strip.style.transition = 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)';
    strip.style.transform = `translateY(-${totalDistance}px)`;

    setTimeout(() => {
      setIsSpinning(false);
      setShowHearts(true);
      
      if ('vibrate' in navigator) navigator.vibrate([50, 30, 50]);

      if (strip) {
        strip.style.transition = 'none';
        strip.style.transform = `translateY(-${finalIdx * ITEM_HEIGHT}px)`;
      }
    }, 4100);
  };

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      // 'dvh' è perfetto per Samsung: ignora le barre del browser che appaiono/scompaiono
      minHeight: 'min(550px, 85dvh)', 
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 20px 40px rgba(150, 180, 200, 0.2)',
      padding: 'clamp(15px, 5vw, 25px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '30px',
      margin: '10px auto'
    }}>
      <style>
        {`
          @keyframes floatHeart {
            0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-450px) scale(0.5) rotate(45deg); opacity: 0; }
          }
          .heart-p { 
            position: absolute; 
            bottom: -20px; 
            animation: floatHeart 3s ease-out forwards; 
            z-index: 10; 
            pointer-events: none;
          }
        `}
      </style>

      {/* Header Responsive */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        width: '100%',
        marginBottom: '10px'
      }}>
        <button onClick={onBack} style={{
            position: 'absolute', top: 20, left: 20, zIndex: 100,
            border: 'none', background: 'rgba(255,255,255,0.7)',
            padding: '8px 15px', borderRadius: '20px', cursor: 'pointer',
            fontFamily: 'sans-serif', fontSize: '14px', backdropFilter: 'blur(5px)'
          }}>Torna alla Home </button>
      </div>

      {/* Slot Machine Window - Altezza dinamica */}
      <div style={{
        height: `${ITEM_HEIGHT}px`,
        margin: '15px 0',
        background: '#ffffff',
        borderRadius: '24px',
        boxShadow: 'inset 0 2px 15px rgba(0,0,0,0.05), 0 10px 25px rgba(168, 204, 224, 0.15)',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(168, 204, 224, 0.2)'
      }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, transparent 20%, transparent 80%, rgba(255,255,255,1) 100%)',
          zIndex: 2, pointerEvents: 'none'
        }} />

        <div ref={stripRef} style={{ position: 'absolute', width: '100%', willChange: 'transform' }}>
          {[...Mappings.DESIDERI, ...Mappings.DESIDERI, ...Mappings.DESIDERI, ...Mappings.DESIDERI].map((desiderio, i) => (
            <div key={i} style={{
              height: `${ITEM_HEIGHT}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}>
              <p style={{ 
                fontSize: 'clamp(14px, 4vw, 18px)', 
                fontFamily: "'Georgia', serif", 
                color: '#5a4a6a',
                lineHeight: '1.3',
                margin: 0,
                fontWeight: '500',
                wordBreak: 'break-word'
              }}>
                {desiderio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area */}
      <div style={{ textAlign: 'center', zIndex: 5 }}>
        <button 
          onClick={startSpin}
          disabled={isSpinning}
          style={{
            ...styles.navButton,
            background: isSpinning ? '#f0f0f0' : 'linear-gradient(135deg, #ffb3c1 0%, #ff8fab 100%)',
            color: isSpinning ? '#aaa' : 'white',
            justifyContent: 'center',
            fontWeight: '700',
            width: '100%',
            maxWidth: '280px',
            margin: '0 auto',
            padding: '16px',
            borderRadius: '20px',
            boxShadow: isSpinning ? 'none' : '0 8px 20px rgba(255, 143, 171, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: isSpinning ? 'default' : 'pointer',
            fontSize: '16px'
          }}
        >
          {isSpinning ? "I rulli girano..." : "Cosa faremo insieme? ✨"}
        </button>
        <p style={{ fontSize: '11px', color: '#888', marginTop: '14px', fontStyle: 'italic', letterSpacing: '0.3px' }}>
          {isSpinning ? "Incrocia le dita..." : "Falla girare e inizia a sognare"}
        </p>
      </div>

      {/* Cuori celebrativi */}
      {showHearts && [...Array(12)].map((_, i) => (
        <span key={i} className="heart-p" style={{ 
          left: `${Math.random() * 90}%`, 
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${14 + Math.random() * 12}px`
        }}>
          {['❤️', '💖', '✨', '🌸', '🍭'][Math.floor(Math.random() * 5)]}
        </span>
      ))}
    </div>
  );
};