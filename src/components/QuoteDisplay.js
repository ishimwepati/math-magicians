import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteDisplay.css';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

    const headers = {
      'X-Api-Key': 'Ynra9XHiA4ZSA+O1ZPEx8Q==r5YLGKlKiQnALROo',
    };

    axios.get(apiUrl, { headers })
      .then((response) => {
        const { quote, author } = response.data[0];
        setQuote(quote);
        setAuthor(author);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-container">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="quote">
          <p className="quote-text">{quote}</p>
          <p className="quote-author">
            -
            {author}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuoteDisplay;
