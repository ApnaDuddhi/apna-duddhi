import React, { useEffect, useState } from "react";
import "./style.scss";
import DATA from "./data.json";

const InspiringQuotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Change quotes continuously with an interval
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) =>
        prevIndex === DATA.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inspiring-container">
      <section>
        <h3 className="heading">Inspiring Quotes</h3>
        <div className="quote-container">
          <p className="quote-title">{DATA[quoteIndex].title}</p>
          <p className="quote-explanation">{DATA[quoteIndex].explanation}</p>
        </div>
        <div className="counter-container">
          {DATA.map((quote, index) => {
            return (
              <div
                className={`circle ${
                  index === quoteIndex ? "active" : "disable"
                }`}
                key={quote.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export { InspiringQuotes };