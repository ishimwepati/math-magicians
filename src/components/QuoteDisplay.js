import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteDisplay() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true);
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'Ynra9XHiA4ZSA+O1ZPEx8Q==r5YLGKlKiQnALROo',
          },
        });

        if (response.data.length === 0) {
          throw new Error('No quotes found');
        }

        setQuote(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  if (quote) {
    return (
      <div className="quote">
        <p>{quote.quote}</p>
        <p>
          -
          {quote.author}
        </p>
      </div>
    );
  }

  return null;
}

export default QuoteDisplay;
