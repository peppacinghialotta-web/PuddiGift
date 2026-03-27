export const styles: { [key: string]: React.CSSProperties } = {
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.6)', 
    backdropFilter: 'blur(12px)',
    borderRadius: '32px', // Molto stondato come il countdown
    width: 'clamp(260px, 90vw, 340px)',
    border: '1px solid rgba(168, 204, 224, 0.3)', // Blu carta da zucchero
    boxShadow: '0 10px 30px rgba(150, 180, 200, 0.15)',
    margin: '20px auto',
  },
  navButton: {
    padding: '16px 20px',
    borderRadius: '20px',
    border: '1px solid transparent',
    background: '#ffffff',
    color: '#4a4a4a', // Grigio antracite della lettera
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    fontFamily: "'Segoe UI', sans-serif",
  },
  icon: {
    fontSize: '20px',
    opacity: 0.8,
  }
};