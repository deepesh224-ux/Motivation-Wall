import React, { useState, useEffect } from "react";
import AffirmationTimer from "./AffirmationTimer";
import MoodChart from "./MoodChart"; // Import the MoodChart component
import "./MotivationWall.css";

function MotivationWall() {
  const [note, setNote] = useState("");
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [moodCounts, setMoodCounts] = useState({
    "😊": 0,
    "😐": 0,
    "😢": 0,
    "😠": 0,
  });

  // Subtitles with timing (in seconds)
  const subtitles = [
    "💥 You are unstoppable",
    "🚀 Every step is progress",
    "🔥 Fuel your fire daily",
    "🌟 Shine through the chaos",
    "💪 Keep pushing forward",
    "✨ Believe in your vision",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentSubtitle(subtitles[index]);
      index = (index + 1) % subtitles.length;
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const addNote = () => {
    if (note.trim()) {
      setNotes([{ text: note, image, mood: selectedMood }, ...notes]);
      setNote("");
      setImage(null);
      setSelectedMood("");
      setMoodCounts((prevCounts) => ({
        ...prevCounts,
        [selectedMood]: prevCounts[selectedMood] + 1,
      }));
    }
  };

  return (
    <div className="wall-wrapper">
      <video autoPlay loop muted className="bg-video">
        <source src="/motivation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <audio autoPlay loop hidden>
        <source src="/audio/motivation.mp3" type="audio/mpeg" />
      </audio>

      {/* Subtitle on top */}
      <div className="subtitle-container">
        <p className="subtitle-text">{currentSubtitle}</p>
      </div>

      <div className="container content">
        <div className="card input-card">
          <h1 className="title">🔥 Your Motivation Hub</h1>

          <AffirmationTimer />

          <div className="mood-buttons">
            {["😊", "😐", "😢", "😠"].map((mood) => (
              <button
                key={mood}
                className={`mood-button ${selectedMood === mood ? "active" : ""}`}
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </button>
            ))}
          </div>

          <textarea
            className="textarea"
            placeholder="Write a motivational thought..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <label className="file-label">
            🎯 Upload Inspiration
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>

          {image && <img src={image} alt="Preview" className="preview-img" />}

          <button className="add-button" onClick={addNote}>
            Add Note
          </button>
        </div>

        <div className="notes">
          {notes.map((item, index) => (
            <div key={index} className="card note-card">
              <p>{item.text}</p>
              {item.mood && <div className="mood-display">Mood: {item.mood}</div>}
              {item.image && <img src={item.image} alt="Note Visual" className="note-img" />}
            </div>
          ))}
        </div>

        {/* Mood Stats and Chart */}
        <div className="mood-stats">
          <h2>Mood Stats</h2>
          <MoodChart moodCounts={moodCounts} /> {/* Add MoodChart here */}
        </div>
      </div>
    </div>
  );
}

export default MotivationWall;
