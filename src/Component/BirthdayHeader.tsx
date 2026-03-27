import React from 'react';

export const BirthdayHeader: React.FC = () => {
  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes celebrate {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.5; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-10px); }
          }
          .bday-card {
            animation: celebrate 3s infinite ease-in-out;
          }
          .sparkle-icon {
            display: inline-block;
            animation: sparkle 2s infinite ease-in-out;
          }
        `}
      </style>

      <div className="bday-card" style={cardStyle}>
       
        <h1 style={titleStyle}>Buon Compleanno, Amore!</h1>
        
        <p style={subtitleStyle}>
          Finalmente è arrivato il tuo giorno speciale. <br/>
          Siediti comodo, perché le sorprese <br/>
          <span style={highlightStyle}>sono appena cominciate...</span> 💖
        </p>

        <div style={dividerStyle} />
        <p style={footerStyle}>Con tutto il mio amore, oggi e sempre</p>
      </div>
    </div>
  );
};


const containerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  boxSizing: 'border-box',
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  borderRadius: '30px',
  padding: 'clamp(20px, 6vw, 40px)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 20px 40px rgba(168, 204, 224, 0.25)',
  textAlign: 'center',
  maxWidth: '450px',
  width: '100%',
};

const iconContainer: React.CSSProperties = {
  marginBottom: '15px',
  fontSize: '24px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Georgia', serif",
  fontSize: 'clamp(22px, 5vw, 28px)',
  color: '#5a4a6a',
  margin: '0 0 15px 0',
  lineHeight: '1.2',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 'clamp(14px, 3.5vw, 16px)',
  color: '#666',
  lineHeight: '1.6',
  margin: 0,
};

const highlightStyle: React.CSSProperties = {
  color: '#ff8fab',
  fontWeight: '600',
  fontStyle: 'italic',
};

const dividerStyle: React.CSSProperties = {
  height: '1px',
  background: 'linear-gradient(to right, transparent, rgba(168, 204, 224, 0.5), transparent)',
  margin: '20px auto',
  width: '80%',
};

const footerStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#999',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};