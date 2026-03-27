import { useState, useEffect } from "react";
import Mappings from "../Helpers/Mappings";
import { ILetterInterface } from "./Interfaces/ILetterInterface";
import { styles } from "./Styles/LetterStyle";

export const Letter: React.FC<ILetterInterface> = ({
  text = '',
  title = Mappings.letterTitle,
}) => {
  const [isVisible, setIsVisible] = useState(false); 
  const [isOpen, setOpen] = useState(false);         
  const [typed, setTyped] = useState('');
  const content = text.trim();

  useEffect(() => {
    setIsVisible(true);
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    
    let index = 0;
    const typeInterval = window.setInterval(() => {
      index += 1;
      setTyped(content.slice(0, index));
      if (index >= content.length) {
        window.clearInterval(typeInterval);
      }
    }, 50); 

    return () => window.clearInterval(typeInterval);
  }, [isOpen, content]);

    const wrapperStyle: React.CSSProperties = {
    ...styles.wrapper,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-out',
  };

  const envelopeStyle = isOpen
    ? { ...styles.envelope, ...styles.envelopeOpen }
    : styles.envelope;

  const flapStyle = isOpen
    ? { ...styles.flap, ...styles.flapOpen }
    : styles.flap;

  return (
    <div style={wrapperStyle}>
      <style>
        {`
          @keyframes twinkle { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); }}
          @keyframes fly { 0% { opacity: 0; transform: translateY(6px) scale(0.7);} 20% {opacity:1; transform: translateY(-2px) scale(1);} 100% {opacity:0; transform: translateY(-30px) scale(0.3);} }
        `}
      </style>

      <div style={envelopeStyle}>
        <div style={flapStyle}></div>
        <div style={styles.heartBadge}>{Mappings.letterBadge}</div>
        
        <h3 style={{ 
          textAlign: 'center', 
          margin: '0 0 14px', 
          color: '#326771',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.5s ease 0.8s' 
        }}>
          {title}
        </h3>

        <div style={styles.paper}>
          <pre style={styles.typewriter}>{typed}</pre>
        </div>
      </div>
    </div>
  );
};