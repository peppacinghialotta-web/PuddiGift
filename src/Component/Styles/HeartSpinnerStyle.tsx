export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    minHeight: '100vh', // Copre tutto lo schermo durante il caricamento
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #e6e9f0 100%)',
    boxSizing: 'border-box',
  },
  heartWrapper: {
    position: 'relative',
    width: '100px',
    height: '100px',
    marginBottom: '24px',
  },
  text: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    fontFamily: "'Georgia', serif",
    textAlign: 'center',
    color: '#5a4a6a',
    fontStyle: 'italic',
    opacity: 0.8,
  },
};