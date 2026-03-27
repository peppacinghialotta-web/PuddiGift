import React, { useEffect, useState } from 'react';
import Mappings from '../Helpers/Mappings';
import { styles } from './Styles/CountDownStyle';
import { on } from 'events';

type CountdownProps = {
  targetDate: string; 
  onComplete?: () => void;
};

const CountDown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));
  const [milestoneMessage, setMilestoneMessage] = useState('');

  function getRemaining(target: string, onComplete?: () => void) {
    const now = new Date().getTime();
    const targetTime = new Date(target).getTime(); 
    const diff = targetTime - now;

    if (diff <= 0) {
      onComplete && onComplete();
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      
    }

    const secondsTotal = Math.floor(diff / 1000);
    const days = Math.floor(secondsTotal / (24 * 3600));
    const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    return { total: diff, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = getRemaining(targetDate, onComplete);
      setRemaining(next);

      const now = new Date();
      const currentHour = now.getHours();
      const msgObj = Mappings.countdownMessages.find(m => currentHour >= m.start && currentHour <= m.end);
      
      if (msgObj) {
        const texts = msgObj.texts;
        setMilestoneMessage(texts[Math.floor(Math.random() * texts.length)]);
      } else {
        setMilestoneMessage("Il conto alla rovescia continua… presto qualcosa di speciale ti aspetta");
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate, onComplete]);

  const { days, hours, minutes, seconds, total } = remaining;

  const TimeUnit = ({ value, label, showDivider = true }: { value: number, label: string, showDivider?: boolean }) => (
    <>
      <div style={styles.timeUnit}>
        <span style={styles.number}>{String(value).padStart(2, '0')}</span>
        <span style={styles.label}>{label}</span>
      </div>
      {showDivider && <div style={styles.divider} />}
    </>
  );

  return (
    <div style={styles.container}>
      {total > 0 && (
        <>
        <div style={styles.content}>
        <p style={styles.title}>{Mappings.countdownTitle}</p>
        </div>
         <div style={styles.timerWrapper}>
            <TimeUnit value={days} label="Days" />
            <TimeUnit value={hours} label="Hours" />
            <TimeUnit value={minutes} label="Minutes" />
            <TimeUnit value={seconds} label="Seconds" showDivider={false} />
          </div>

        <div style={styles.content}>
        <p style={styles.description}>{milestoneMessage}</p>
        </div>
         
        </>
      )}
    </div>
  );
};

export default CountDown; 