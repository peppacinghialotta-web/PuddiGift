import React, { useState } from 'react';
import { styles } from './Styles/IHomeStyle';

interface HomeProps {
  onAction?: (action: string) => void;
  isCountdownComplete: boolean; 
}

export const Home: React.FC<HomeProps> = ({ onAction, isCountdownComplete }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { id: 'game', label: 'Chi dei due?', icon: '💝', color: '#a8cce0' },
    { id: 'slot', label: 'Tenta la fortuna', icon: '💝', color: '#a8cce0' },
    { id: 'reasons', label: '29 motivi per cui ti amo', icon: '💝', color: '#a8cce0' },
    { id: 'scratch', label: 'Gratta e vinci', icon: '💝', color: '#ffb3c1' },
    { id: 'fortune', label: 'Chiedi alla palla d\'amore', icon: '💝', color: '#ffb3c1' },
    { id: 'hug', label: 'Dammi un abbraccio', icon: '💝', color: '#ffb3c1' },
  ];

  if (isCountdownComplete) {
    menuItems.push({ 
      id: 'letter',
      label: 'Leggi la Lettera d\'auguri', 
      icon: '💝', 
      color: '#ffb3c1' 
    });
  }

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <nav style={styles.menuContainer}>
         {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onAction?.(item.id)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...styles.navButton,
              fontSize: 'clamp(14px, 4vw, 16px)',
              padding: 'clamp(12px, 3.5vw, 18px) clamp(15px, 4vw, 22px)',
              border: item.id === 'letter' ? `1px dashed ${item.color}` : '1px solid transparent',
              ...(hoveredIndex === index ? {
                transform: 'translateX(8px)',
                borderColor: item.color,
                color: item.color,
                background: `${item.color}0A`,
                boxShadow: `0 4px 12px ${item.color}22`,
              } : {})
            }}
          >
            <span style={{ ...styles.icon, fontSize: 'clamp(18px, 5vw, 22px)' }}>{item.icon}</span>
            <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
            <span style={{ opacity: 0.3, fontSize: '12px' }}></span>
          </button>
        ))}
      </nav>
    </div>
  );
};