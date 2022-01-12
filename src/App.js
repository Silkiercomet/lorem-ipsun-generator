import "./styles.css";
import React, { useState } from "react";
import data from "./data";
export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let paragraphs = [...data],
      num = +count;
    num <= 0 ? (num = 1) : num > 8 ? (num = 8) : (num = count);
    setText(paragraphs.splice(0, num));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="mount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </article>
    </section>
  );
}
