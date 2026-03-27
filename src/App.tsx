import { useEffect, useState, useCallback } from "react";
import Lock from "./Component/Lock";
import CountDown from "./Component/CountDown";
import { Letter } from "./Component/Letter";
import HeartSpinner from "./Component/HeartSpinner";
import { Home } from "./Component/Home";
import { WhoOfTwo } from "./Component/WhoOfTwo";
import { BucketList } from "./Component/BucketList";
import { LoveDeck } from "./Component/LoveDeck";
import { ScratchCard } from "./Component/ScratchCard";
import Mappings from "./Helpers/Mappings";
import { apiHelper } from "./Helpers/apiHelper";
import { BirthdayHeader } from "./Component/BirthdayHeader";
import { LoveFortune } from "./Component/LoveFortune";
import { HugButton } from "./Component/LoveHugButton";

function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [letterLoading, setLetterLoading] = useState(false);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [letterText, setLetterText] = useState("");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showWhoOfTwo, setShowWhoOfTwo] = useState(false);
  const [showBucket, setShowBucket] = useState(false);
  const [showLoveDeck, setShowLoveDeck] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [showLoveFortune, setShowLoveFortune] = useState(false);
  const [showHug, setShowHug] = useState(false);


  const startRitualLoading = useCallback((callback?: () => void) => {
    setLetterLoading(true);
    setTimeout(() => {
      setLetterLoading(false);
      if (callback) callback();
    }, 1500);
  }, []);

  
  useEffect(() => {
    if (isCountdownComplete && !letterText) {
      apiHelper.fetchMessage()
        .then(setLetterText)
        .catch(console.error);
    }
  }, [isCountdownComplete, letterText]);

  
  useEffect(() => {
    const now = new Date().getTime();
    const target = new Date(Mappings.targetDate).getTime();
   const isJustFinished = Math.abs(now - target) < 10000;

    if (isCountdownComplete && !hasAutoOpened && isJustFinished) {
      const timer = setTimeout(() => {
        setHasAutoOpened(true);
        startRitualLoading(() => setShowLetter(true));
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [isCountdownComplete, hasAutoOpened, startRitualLoading]);

  
  if (isLocked) {
    return (
      <Lock 
        onUnlock={() => {
          setIsLocked(false);
          startRitualLoading(); 
        }} 
      />
    );
  }

  if (letterLoading) {
    return <HeartSpinner />;
  }

   if (showLetter) {
    return (
      <div style={{ position: 'relative', minHeight: '100vh', background: '#fff' }}>
        <button
          onClick={() => setShowLetter(false)}
          style={{
            position: 'absolute', top: 20, left: 20, zIndex: 100,
            border: 'none', background: 'rgba(255,255,255,0.8)',
            padding: '10px 20px', borderRadius: '30px', cursor: 'pointer',
            fontFamily: 'inherit', fontSize: '14px', fontWeight: '500',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', backdropFilter: 'blur(5px)'
          }}
        > Torna alla Home </button>
        <Letter text={letterText} />
      </div>
    );
  }

  if (showWhoOfTwo) {
    return (
      <div style={fullPageCenterStyle}>
        <WhoOfTwo onBack={() => setShowWhoOfTwo(false)} />
      </div>
    );
  }

  if (showLoveFortune) {
    return (
      <div style={fullPageCenterStyle}>
        <LoveFortune onBack={() => setShowLoveFortune(false)} />
      </div>
    );
  }

  if (showBucket) {
    return (
      <div style={fullPageCenterStyle}>
        <BucketList onBack={() => setShowBucket(false)} />
      </div>
    );
  }

  if (showScratchCard) {
    return (
      <div style={fullPageCenterStyle}>
        <ScratchCard onBack={() => setShowScratchCard(false)} />
      </div>
    );
  }

  if (showLoveDeck) {
    return (
      <div style={fullPageCenterStyle}>
        <LoveDeck onBack={() => setShowLoveDeck(false)} />
      </div>
    );
  }

  if (showHug) {
    return (
      <div style={fullPageCenterStyle}>
        <HugButton onBack={() => setShowHug(false)} />
      </div>
    );
  } 
 return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      padding: '20px',
      background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #e6e9f0 100%)',
      boxSizing: 'border-box'
    }}>
      {isCountdownComplete ? (
        <BirthdayHeader />
      ) : (
        <CountDown
          targetDate={Mappings.targetDate}
          onComplete={() => setIsCountdownComplete(true)}
        />
      )}

      <Home
        isCountdownComplete={isCountdownComplete}
        onAction={(id) => {
          // Gestione click sulle icone della Home
          switch (id) {
            case 'letter':
              startRitualLoading(() => setShowLetter(true));
              break;
            case 'game':
              setShowWhoOfTwo(true);
              break;
            case 'slot':
              setShowBucket(true);
              break;
            case 'reasons':
              setShowLoveDeck(true);
              break;
            case 'scratch':
              setShowScratchCard(true);
              break;
            case 'fortune':
              setShowLoveFortune(true);
              break;
               case 'hug':
              setShowHug(true);
              break;
            default:
              console.warn("Azione non riconosciuta:", id);
          }
        }}
      />
    </div>
  );
}


const fullPageCenterStyle: React.CSSProperties = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(10px, 5vw, 30px)', 
  background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%, #e6e9f0 100%)',
  boxSizing: 'border-box',
  overflowX: 'hidden' 
};

export default App;