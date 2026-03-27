import React, { useState } from 'react';
import { styles } from './Styles/IHomeStyle';
import Mappings from '../Helpers/Mappings';

export const WhoOfTwo: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [fade, setFade] = useState(true);

  const handleAnswer = () => {
    const randomMsg = Mappings.FEEDBACK_MESSAGES[Math.floor(Math.random() * Mappings.FEEDBACK_MESSAGES.length)];
    setFeedback(randomMsg);
    // Feedback tattile per Samsung
    if ('vibrate' in navigator) navigator.vibrate(30);
  };

  const nextQuestion = () => {
    setFade(false);
    setTimeout(() => {
      setFeedback(null);
      setIndex((prev) => (prev + 1) % Mappings.QUESTIONS_DATA.length);
      setFade(true);
    }, 300);
  };

  const current = Mappings.QUESTIONS_DATA[index];

  return (
    <div style={{
      ...styles.menuContainer,
      width: '92%',
      maxWidth: '450px',
      // 'dvh' evita problemi con la barra di navigazione Samsung
      minHeight: 'min(580px, 85dvh)',
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
    }}>
      
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

      {/* Area Domanda o Feedback - Altezza flessibile */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        opacity: fade ? 1 : 0, 
        transition: 'all 0.3s ease-in-out', 
        margin: '20px 0',
        padding: '0 10px'
      }}>
        {!feedback ? (
          <h2 style={{ 
            fontSize: 'clamp(18px, 5vw, 24px)', 
            color: '#4a4a4a', 
            fontFamily: "'Georgia', serif",
            lineHeight: '1.4',
            margin: 0
          }}>
            {current.text}
          </h2>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            <h3 style={{ 
              fontSize: 'clamp(16px, 4.5vw, 20px)', 
              color: '#326771', 
              fontStyle: 'italic',
              margin: 0 
            }}>
              {feedback}
            </h3>
          </div>
        )}
      </div>

      {/* Bottoni Risposta - Grid per mobile */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        width: '100%',
        zIndex: 5
      }}>
        {!feedback ? (
          <>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <button 
                onClick={handleAnswer} 
                style={{ ...styles.navButton, justifyContent: 'center', flex: 1, padding: '16px' }}
              >
                Io
              </button>
              <button 
                onClick={handleAnswer} 
                style={{ ...styles.navButton, justifyContent: 'center', flex: 1, padding: '16px' }}
              >
                Tu
              </button>
            </div>
            <button 
              onClick={handleAnswer} 
              style={{ ...styles.navButton, justifyContent: 'center', width: '100%', padding: '16px' }}
            >
              Entrambi
            </button>
          </>
        ) : (
          <button 
            onClick={nextQuestion}
            style={{
              ...styles.navButton,
              background: `linear-gradient(135deg, ${current.color}44, #ffffff)`,
              border: `1px solid ${current.color}66`,
              color: '#4a4a4a',
              justifyContent: 'center',
              fontWeight: '700',
              padding: '18px',
              fontSize: '16px'
            }}
          >
            Prossima Domanda
          </button>
        )}
        
        <p style={{ 
          fontSize: '11px', 
          color: '#aaa', 
          marginTop: '10px', 
          marginBottom: 0,
          letterSpacing: '1px' 
        }}>
          {index + 1} / {Mappings.QUESTIONS_DATA.length}
        </p>
      </div>
    </div>
  );
};