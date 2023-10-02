import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/USD'; // Free API endpoint

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL)
      .then(response => {
        setCurrencies(response.data.rates);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = () => {
    const fromRate = currencies[fromCurrency];
    const toRate = currencies[toCurrency];
    const result = (amount / fromRate) * toRate;
    setConvertedAmount(result);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(currencies).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div>
        <h3>Converted Amount:</h3>
        <p>{`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}</p>
      </div>
      <div>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {Object.keys(currencies).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyConverter;
