import React, { useState } from "react"; // Make sure the path is correct
import "./JournalEntry.css";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😤", label: "Stressed" },
  { emoji: "😎", label: "Confident" },
];

function JournalEntry() {
  const [mood, setMood] = useState(null);
  const [entry, setEntry] = useState("");
  const [history, setHistory] = useState([]);

  const saveEntry = () => {
    if (entry.trim() && mood) {
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      const newEntry = {
        mood,
        text: entry,
        date,
        time,
      };
      setHistory([newEntry, ...history]);
      setEntry("");
      setMood(null);
    }
  };

  return (
    <div className="journal-wrapper">
        <video className="lightning-bg" autoPlay loop muted playsInline>
        <source src="/Lightning-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio autoPlay loop hidden>
        <source src="/audio/journal-mood.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <div className="journal-container card">
        <h2 className="journal-title">📝 Daily Journal + Mood Tracker</h2>

        <div className="mood-options">
          {moods.map((m) => (
            <button
              key={m.label}
              className={`mood-button ${mood === m.label ? "selected" : ""}`}
              onClick={() => setMood(m.label)}
            >
              {m.emoji}
            </button>
          ))}
        </div>

        <textarea
          className="journal-textarea"
          placeholder="Write your journal entry..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <button className="add-button" onClick={saveEntry}>
          Save Entry
        </button>

        <div className="journal-history">
          {history.map((item, idx) => (
            <div key={idx} className="journal-entry card">
              <p><strong>{item.date} {item.time}</strong> — Mood: {item.mood}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JournalEntry;
