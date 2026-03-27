import React, { useState, useEffect, use } from "react";
import { apiHelper } from "../Helpers/apiHelper";
import { styles } from "./Styles/LockStyle";
import { ILockInterface } from "./Interfaces/ILockInterface";
import Mappings from "../Helpers/Mappings";



export const Lock: React.FC<ILockInterface> = ({ onUnlock }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

 useEffect(() => {
    apiHelper.fetchPin()
      .then((fetchedPin) => {
        setPin(fetchedPin);
      })
      .catch((err) => console.error(Mappings.lockPinError, err));
  }, []);


  const handleUnlock = () => {
    if (input === pin) {
      setError("");
      onUnlock(); 
    } else {
      setError(Mappings.lockPinMismatchError);
    }
  };

  return (
    <div style={styles.container}>
      <h2>{Mappings.lockTitle}</h2>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={Mappings.pinPlaceholder}
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