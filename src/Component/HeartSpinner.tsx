import React from 'react';

import Mappings from '../Helpers/Mappings';
import { styles } from './Styles/HeartSpinnerStyle';

const HeartSpinner: React.FC = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fillSteps {
            0% { stop-offset: 100%; }
            100% { stop-offset: 0%; }
          }
          .heart-svg {
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
          }
        `}
      </style>
      
      <div style={styles.heartWrapper}>
        <svg 
          viewBox="0 0 32 32" 
          className="heart-svg"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="fillGradient" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#ff4d6d" />
              <stop offset="100%" stopColor="#ff4d6d" className="fill-stop">
                <animate 
                  attributeName="offset" 
                  values="1;0.8;0.6;0.4;0.2;0" 
                  dur="2s" 
                  repeatCount="indefinite" 
                  calcMode="discrete" 
                />
              </stop>
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
          </defs>
          
          <path 
            fill="url(#fillGradient)"
            stroke="#ff4d6d"
            strokeWidth="1.5"
            d="M16 28.5L14.1 26.6C7.14 20.34 2.5 16.14 2.5 11C2.5 6.8 5.8 3.5 10 3.5C12.36 3.5 14.64 4.6 16 6.36C17.36 4.6 19.64 3.5 22 3.5C26.2 3.5 29.5 6.8 29.5 11C29.5 16.14 24.86 20.34 17.9 26.62L16 28.5Z" 
          />
        </svg>
      </div>

      <p style={styles.text}>{Mappings.heartSpinnerText}</p>
    </div>
  );
};

export default HeartSpinner;