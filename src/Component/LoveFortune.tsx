import React, { useState } from 'react';
import { styles } from './Styles/IHomeStyle';
import Mappings from '../Helpers/Mappings';

export const LoveFortune: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const askFortune = () => {
    if (isShaking) return;

    setIsShaking(true);
    setAnswer(null);

    // Feedback tattile Samsung: vibrazione "misteriosa"
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 30, 100, 30, 300]);
    }

    setTimeout(() => {
      const randomIdx = Math.floor(Math.random() * Mappings.FORTUNE_ANSWERS.length);
      setAnswer(Mappings.FORTUNE_ANSWERS[randomIdx]);
      setIsShaking(false);
    }, 1200);
  };

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      minHeight: 'min(600px, 85dvh)',
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
      margin: '10px auto',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes shake {
            10%, 90% { transform: translate3d(-2px, 0, 0); }
            20%, 80% { transform: translate3d(4px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-6px, 0, 0); }
            40%, 60% { transform: translate3d(6px, 0, 0); }
          }
          .magic-sphere {
            animation: float 4s infinite ease-in-out;
            transition: all 0.3s ease;
          }
          .shaking {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite !important;
          }
          .glow {
            filter: drop-shadow(0 0 15px rgba(168, 204, 224, 0.6));
          }
        `}
      </style>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
           <button onClick={onBack} style={{
            position: 'absolute', top: 20, left: 20, zIndex: 100,
            border: 'none', background: 'rgba(255,255,255,0.7)',
            padding: '8px 15px', borderRadius: '20px', cursor: 'pointer',
            fontFamily: 'sans-serif', fontSize: '14px', backdropFilter: 'blur(5px)'
          }}>Torna alla Home </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ 
          fontFamily: "'Georgia', serif", 
          fontSize: '18px', 
          color: '#5a4a6a', 
          marginBottom: '30px',
          opacity: 0.8 
        }}>
          Pensa a una domanda... <br/>e interroga il nostro futuro.
        </h2>

        {/* La Sfera/Cuore Magico */}
        <div 
          onClick={askFortune}
          className={`magic-sphere ${isShaking ? 'shaking' : 'glow'}`}
          style={{
            width: 'clamp(140px, 40vw, 180px)',
            height: 'clamp(140px, 40vw, 180px)',
            background: 'linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            cursor: 'pointer',
            border: '8px solid rgba(255,255,255,0.8)',
            boxShadow: '0 15px 35px rgba(168, 204, 224, 0.3)',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {isShaking ? '🔮' : '💖'}
        </div>

        {/* Area Risposta */}
        <div style={{ minHeight: '100px', marginTop: '40px', padding: '0 20px' }}>
          {answer && !isShaking && (
            <div style={{ animation: 'fadeIn 0.8s ease' }}>
              <p style={{ 
                fontSize: 'clamp(16px, 4.5vw, 20px)', 
                fontFamily: "'Georgia', serif", 
                color: '#4a3a5a',
                lineHeight: '1.4',
                fontStyle: 'italic'
              }}>
                "{answer}"
              </p>
            </div>
          )}
          {isShaking && (
            <p style={{ fontSize: '12px', color: '#999', letterSpacing: '2px' }}>
              CONSULTANDO LE STELLE...
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ paddingBottom: '10px' }}>
        <button 
          onClick={askFortune}
          disabled={isShaking}
          style={{
            ...styles.navButton,
            background: isShaking ? '#f0f0f0' : 'linear-gradient(135deg, #a8cce0, #b5d6e8)',
            color: 'white',
            justifyContent: 'center',
            fontWeight: '700',
            width: '100%',
            maxWidth: '250px',
            margin: '0 auto',
            opacity: isShaking ? 0.6 : 1
          }}
        >
          {isShaking ? '...' : 'Tocca per scoprire'}
        </button>
      </div>
    </div>
  );
};