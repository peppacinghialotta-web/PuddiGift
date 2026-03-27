export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '24px',
    textAlign: 'center',
  },
  // La "pillola" ora è in vetro satinato bianco/azzurro
  timerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(12px, 3vw, 24px)',
    background: 'rgba(255, 255, 255, 0.5)', // Bianco trasparente
    backdropFilter: 'blur(12px)', // Effetto sfocato moderno
    padding: 'clamp(16px, 4vw, 24px) clamp(24px, 6vw, 48px)',
    borderRadius: '32px',
    boxShadow: '0 8px 32px rgba(150, 180, 200, 0.15)',
    border: '1px solid rgba(168, 204, 224, 0.3)', // Bordo blu polvere
    color: '#4a4a4a', // Grigio antracite come la lettera
    width: 'fit-content',
  },
  timeUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 'clamp(45px, 10vw, 65px)',
  },
  // Divisore più sottile e colorato (lilla/blu)
  divider: {
    width: '1px',
    height: '28px',
    background: 'linear-gradient(to bottom, transparent, rgba(168, 204, 224, 0.5), transparent)',
  },
  number: {
    fontSize: 'clamp(22px, 5.5vw, 30px)',
    fontWeight: '600',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    lineHeight: '1.1',
    color: '#326771', // Blu scuro opaco, molto elegante
  },
  label: {
    fontSize: 'clamp(9px, 2.2vw, 11px)',
    color: '#8e9aaf', // Grigio-blu morbido
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginTop: '4px',
  },
  // Area messaggi sotto il timer
  content: {
    marginTop: '10px',
    maxWidth: '450px',
  },
  title: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#5a4a6a', // Il viola della tua lettera
    fontWeight: '500',
    marginBottom: '8px',
  },
  description: {
    fontSize: 'clamp(13px, 3.2vw, 15px)',
    color: '#6c757d',
    lineHeight: '1.5',
    fontStyle: 'italic',
  }
};