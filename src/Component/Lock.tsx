import React, { useState } from "react";
import { styles } from "./Styles/LockStyle";

type LockProps = {
  onUnlock: () => void;
};

export const Lock: React.FC<LockProps> = ({ onUnlock }) => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const generatePin = (): string => {
    const day = 29;
    const month = 3;
    const year = 2026;

    return (
      String(day).padStart(2, "0") +
      String(month).padStart(2, "0") +
      String(year)
    );
  };

  const handleUnlock = () => {
    if (input === generatePin()) {
      setError("");
      onUnlock();
    } else {
      setError("Mmm... non sei tu il mio puddino 😏");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Solo per te ❤️</h2>
      <p>Inserisci il codice</p>

      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={8}
        style={styles.input}
      />

      <button onClick={handleUnlock} style={styles.button}>
        Sblocca
      </button>

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default Lock;
