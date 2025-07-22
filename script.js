const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = React.useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;

  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
