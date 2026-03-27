import React, { useState } from 'react';
import { styles } from './Styles/IHomeStyle';
import Mappings from '../Helpers/Mappings';

export const LoveDeck: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [index, setIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  const nextReason = () => {
    if (index >= Mappings.REASONS.length - 1) {
      setIndex(0);
      return;
    }

    setExitAnimation(true);
    setTimeout(() => {
      setIndex(prev => prev + 1);
      setExitAnimation(false);
      // Feedback tattile per Samsung
      if ('vibrate' in navigator) navigator.vibrate(40);
    }, 400); 
  };

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      minHeight: 'min(600px, 90dvh)', // Si adatta all'altezza dello schermo Samsung
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'clamp(15px, 5vw, 25px)',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 20px 40px rgba(150, 180, 200, 0.2)',
      overflow: 'hidden',
      margin: '10px auto'
    }}>
      <style>
        {`
          @keyframes swipeOut {
            0% { transform: translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateX(200px) rotate(20deg); opacity: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .card-exit { animation: swipeOut 0.4s forwards; }
          .card-enter { animation: fadeIn 0.5s ease; }
        `}
      </style>

      {/* Header Responsive */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
         <button onClick={onBack} style={{
            position: 'absolute', top: 20, left: 20, zIndex: 100,
            border: 'none', background: 'rgba(255,255,255,0.7)',
            padding: '8px 15px', borderRadius: '20px', cursor: 'pointer',
            fontFamily: 'sans-serif', fontSize: '14px', backdropFilter: 'blur(5px)'
          }}>Torna alla Home </button>
      </div>

      {/* Card Area - Gestione dinamica dello spazio */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        perspective: '1000px',
        margin: '20px 0'
      }}>
        <div 
          className={exitAnimation ? 'card-exit' : 'card-enter'}
          style={{
            width: '100%',
            maxWidth: '300px',
            minHeight: '220px',
            background: '#fff',
            borderRadius: '24px',
            padding: 'clamp(20px, 6vw, 35px)',
            boxShadow: '0 15px 35px rgba(150, 180, 200, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid rgba(168, 204, 224, 0.2)',
            boxSizing: 'border-box'
          }}
        >
          {/* Numero del motivo - Scalato per non coprire il testo */}
          <span style={{ 
            position: 'absolute', top: '10px', right: '15px', 
            fontSize: 'clamp(30px, 8vw, 40px)', fontWeight: 'bold', color: '#f3f7f9',
            zIndex: 0,
            userSelect: 'none'
          }}>
            #{index + 1}
          </span>

          <p style={{ 
            fontSize: 'clamp(15px, 4.2vw, 19px)', 
            fontFamily: "'Georgia', serif", 
            color: '#5a4a6a',
            lineHeight: '1.5',
            zIndex: 1,
            margin: 0,
            wordBreak: 'break-word'
          }}>
            "{Mappings.REASONS[index]}"
          </p>
        </div>
      </div>

      {/* Pulsante Azione e Indicatori */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <button 
          onClick={nextReason}
          style={{
            ...styles.navButton,
            background: 'linear-gradient(135deg, #a8cce0, #b5d6e8)',
            color: 'white',
            justifyContent: 'center',
            fontWeight: '700',
            width: '100%',
            maxWidth: '280px',
            margin: '0 auto',
            padding: '16px',
            fontSize: '16px',
            boxShadow: '0 8px 15px rgba(168, 204, 224, 0.3)'
          }}
        >
          {index === 28 ? "Rileggi dall'inizio ❤️" : "E poi... "}
        </button>
        
        {/* Progress Dots - Responsive Grid */}
        <div style={{ 
          marginTop: '15px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(10, 1fr)', // 3 file da 10 per i 29 motivi
          gap: '6px',
          justifyContent: 'center',
          width: 'fit-content',
          margin: '15px auto 0'
        }}>
          {[...Array(29)].map((_, i) => (
            <div key={i} style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: i === index ? '#ff8fab' : (i < index ? '#a8cce0' : '#e0e0e0'),
              transition: 'all 0.3s ease',
              transform: i === index ? 'scale(1.3)' : 'scale(1)'
            }} />
          ))}
        </div>
        <p style={{ fontSize: '10px', color: '#bbb', marginTop: '8px', letterSpacing: '1px' }}>
          {index + 1} DI 29
        </p>
      </div>
    </div>
  );
};