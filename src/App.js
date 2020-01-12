import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(
    "Sometimes even to live is an act of courage"
  );
  const [author, setAuthor] = useState("Seneca");

  const data = async () => {
    const apiRes = await fetch("https://random-math-quote-api.herokuapp.com/");
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const generate = random => {
    //random.preventDefault();
    data().then(res => {
      setAuthor(res.author);
      setQuote(res.quote);
    });
  };

  return (
    <div className="quote-box">
      <h1>Random Quote Machine</h1>
      <h3 id="text">{quote}</h3>
      <h4 id="author">{author}</h4>
      <button id="new-quote" onClick={random => generate()}>
        Generate Random Quote
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${quote}  --${author}`}
        id="tweet-quote"
        target="blank"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
