import React, { useState, useRef, useEffect } from 'react';
import { styles } from './Styles/IHomeStyle';

export const HugButton: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isPressing, setIsPressing] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const vibrateRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (vibrateRef.current) clearInterval(vibrateRef.current);
      if ('vibrate' in navigator) navigator.vibrate(0);
    };
  }, []);

  const startHug = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsPressing(true);
    setSeconds(0);

    const runVibration = () => {
      if ('vibrate' in navigator) {
        navigator.vibrate([400, 100, 200]); 
      }
    };
    
    runVibration();
    vibrateRef.current = setInterval(runVibration, 800);

    timerRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };

  const endHug = () => {
    setIsPressing(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (vibrateRef.current) clearInterval(vibrateRef.current);
    if ('vibrate' in navigator) navigator.vibrate(0);
  };

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      // 'dvh' adatta l'altezza escludendo le barre del browser mobile
      minHeight: 'min(600px, 88dvh)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'clamp(15px, 5vw, 25px)',
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 20px 40px rgba(150, 180, 200, 0.2)',
      margin: '10px auto',
      textAlign: 'center',
      touchAction: 'none',
      boxSizing: 'border-box'
    }}>
      
      {/* Header - Rimosso absolute per evitare sovrapposizioni */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
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

      {/* Area Centrale - Centrata verticalmente */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 'clamp(15px, 4vw, 30px)' 
      }}>
        <h2 style={{ 
          fontFamily: "'Georgia', serif", 
          fontSize: 'clamp(18px, 5vw, 24px)', 
          color: '#5a4a6a',
          margin: '0 10px',
          lineHeight: '1.3'
        }}>
          {isPressing ? "Ti sto stringendo forte..." : "Tieni premuto per un abbraccio..."}
        </h2>

        {/* Cuore Responsive */}
        <div 
          onPointerDown={startHug} 
          onPointerUp={endHug}
          onPointerLeave={endHug}
          style={{
            width: 'clamp(130px, 38vw, 170px)',
            height: 'clamp(130px, 38vw, 170px)',
            borderRadius: '50%',
            background: isPressing 
              ? 'radial-gradient(circle, #ff8fab 0%, #ff4d6d 100%)' 
              : 'linear-gradient(135deg, #ffb3c1 0%, #ff8fab 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(45px, 11vw, 65px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isPressing ? 'scale(1.2)' : 'scale(1)',
            boxShadow: isPressing 
              ? '0 0 40px rgba(255, 77, 109, 0.5)' 
              : '0 12px 25px rgba(255, 143, 171, 0.25)',
            cursor: 'pointer',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {isPressing ? '💖' : '❤️'}
        </div>

        {/* Risultato / Feedback */}
        <div style={{ minHeight: '50px' }}>
          {seconds > 0 && !isPressing && (
            <div style={{ animation: 'fadeIn 0.5s ease' }}>
              <p style={{ 
                fontSize: 'clamp(15px, 4vw, 18px)', 
                color: '#ff4d6d', 
                fontWeight: 'bold',
                margin: 0
              }}>
                Abbraccio inviato! 🥰
              </p>
              <p style={{ fontSize: '13px', color: '#888', margin: '5px 0 0 0' }}>
                È durato {seconds} {seconds === 1 ? 'secondo' : 'secondi'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p style={{ 
        fontSize: '11px', 
        color: '#999', 
        fontStyle: 'italic',
        margin: '10px 0 0 0'
      }}>
        Il telefono vibrerà finché non lasci la presa
      </p>
    </div>
  );
};