import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuoteDisplay.css'; // Make sure to import your CSS file

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'Ynra9XHiA4ZSA+O1ZPEx8Q==r5YLGKlKiQnALROo',
          },
        });
        const randomQuote = response.data[0];
        setQuote(randomQuote);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch quote');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  let quoteContent;
  if (loading) {
    quoteContent = <p className="quote loading">Loading...</p>;
  } else if (error) {
    quoteContent = <p className="quote error-message">{error}</p>;
  } else {
    quoteContent = (
      <div className="quote">
        <p className="quote-text">{quote.quote}</p>
        <p className="quote-author">
          -
          {quote.author}
        </p>
      </div>
    );
  }

  return <div className="quote-container">{quoteContent}</div>;
}

export default QuoteDisplay;
