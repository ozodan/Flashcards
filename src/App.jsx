import React, { useState } from "react";
import "./App.css";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      onKeyPress={(e) => (e.key === "Enter" ? setFlipped((f) => !f) : null)}
      role="button"
      aria-pressed={flipped}
    >
      <div className="flashcard-front">{card.question}</div>
      <div className="flashcard-back">{card.answer}</div>
    </div>
  );
}

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    setFlashcards([
      ...flashcards,
      { question: question.trim(), answer: answer.trim() },
    ]);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="container">
      <h1>Flashcard App</h1>
      <form onSubmit={addCard} className="add-form">
        <input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <input
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit">Add Flashcard</button>
      </form>
      <div className="flashcard-list">
        {flashcards.map((card, idx) => (
          <Flashcard card={card} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;