import bg from "./assets/Gesu.png";
import "./styles/main.css";
import { useMemo, useState } from "react";
import "./styles/main.css";

// lista di messaggi predefiniti
const MESSAGES: string[] = [
  "La semplicità è la massima sofisticazione.",
  "Il coraggio è sapere cosa non temere.",
  "Le piccole abitudini costruiscono grandi risultati.",
  "Ogni giorno è una nuova possibilità.",
  "Impara dalle versioni di te stesso di ieri.",
  "Fai una cosa semplice, ma falla bene."
];

// funzione che restituisce un indice casuale diverso da quello corrente
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

      {/* pulsanti sotto l'immagine */}
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
