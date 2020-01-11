import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(
    "Sometimes even to live is an act of courage"
  );
  const [author, setAuthor] = useState("Seneca");

  const data = async () => {
    const apiRes = await fetch(
      "https://aitorp6.herokuapp.com/quotes/api/random"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const generate = random => {
    //random.preventDefault();
    data().then(res => {
      setAuthor(res.quotes.author);
      setQuote(res.quotes.quote);
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
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet it out boi
      </a>
    </div>
  );
}

export default App;
