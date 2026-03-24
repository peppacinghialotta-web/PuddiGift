import React, { useState, useEffect, use } from "react";
import { apiHelper } from "../Helpers/apiHelper";
import { styles } from "./Styles/LockStyle";

type LockProps = {
  onUnlock: () => void;
};

const Lock: React.FC<LockProps> = ({ onUnlock }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

 useEffect(() => {
    apiHelper.fetchPin()
      .then((fetchedPin) => {
        setPin(fetchedPin);
      })
      .catch(() => setError("Errore nel caricamento del PIN"));
  }, []);


  const handleUnlock = () => {
    if (input === pin) {
      setError("");
      onUnlock(); 
    } else {
      setError("Mmm... non sei tu il mio puddino!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Solo per te ❤️</h2>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Inserisci PIN"
        maxLength={8}
        style={styles.input}
      />
      <br />
      <button
        onClick={handleUnlock}
        style={styles.button}
      >
        Sblocca
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default Lock;