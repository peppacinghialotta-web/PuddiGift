import React, { useEffect, useState } from 'react';
import { letterStyles as styles } from './Styles/LetterStyle';
import Mappings from '../Helpers/Mappings';
import { ILetterInterface } from './Interfaces/ILetterInterface';


const Letter: React.FC<ILetterInterface> = ({
  text = '',
  title = Mappings.letterTitle,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const content = text.trim();

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setTyped('');
    let index = 0;
    const typeInterval = window.setInterval(() => {
      index += 1;
      setTyped(content.slice(0, index));
      if (index >= content.length) {
        window.clearInterval(typeInterval);
      }
    }, 45);

    return () => window.clearInterval(typeInterval);
  }, [isOpen, content]);

  const envelopeStyle = isOpen
    ? { ...styles.envelope, ...styles.envelopeOpen }
    : styles.envelope;

  const flapStyle = isOpen
    ? { ...styles.flap, ...styles.flapOpen }
    : styles.flap;

  const stars: any[] = [];

  return (
    <div style={styles.wrapper}>
      <style>
        {`@keyframes twinkle { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); }}
          @keyframes fly { 0% { opacity: 0; transform: translateY(6px) scale(0.7);} 20% {opacity:1; transform: translateY(-2px) scale(1);} 100% {opacity:0; transform: translateY(-30px) scale(0.3);} }
          @keyframes shineLine { from { background-position: -150% 0; } to { background-position: 150% 0; } }
        `}
      </style>

      <div style={envelopeStyle}>
        {stars}
        <div style={flapStyle}></div>
        <h3 style={{ textAlign: 'center', margin: '0 0 14px', color: '#326771' }}>{title}</h3>
        <div style={styles.paper}>
          <pre style={styles.typewriter}>{typed}</pre>
        </div>
      </div>
    </div>
  );
};

export default Letter;
