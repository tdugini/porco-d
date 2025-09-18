import bg from "./assets/Gesu.png";
import "./styles/main.css";
import { useMemo, useState } from "react";
import "./styles/main.css";
import { MESSAGES } from "./data/message";


function getRandomIndex(exclude?: number) {
  if (MESSAGES.length === 1) return 0;
  let idx: number;
  do {
    idx = Math.floor(Math.random() * MESSAGES.length);
  } while (idx === exclude);
  return idx;
}

export default function App() {
  const initial = useMemo(() => getRandomIndex(), []);
  const [msgIndex, setMsgIndex] = useState(initial);

  const pickRandomMessage = () => setMsgIndex(getRandomIndex(msgIndex));

  return (
    <main className="page">
      <div className="hero">
        <img src={bg} alt="hero" className="hero-img" />
        <div className="overlay">
          <div className="overlay-box">
            <p>{MESSAGES[msgIndex]}</p>
          </div>
        </div>
      </div>

      <div className="controls" role="group" aria-label="Cambia messaggio">
        <button
          type="button"
          className="btn"
          aria-label="Messaggio precedente"
          onClick={pickRandomMessage}
        >
          ◀
        </button>
        <button
          type="button"
          className="btn"
          aria-label="Messaggio successivo"
          onClick={pickRandomMessage}
        >
          ▶
        </button>
      </div>
    </main>
  );
}
