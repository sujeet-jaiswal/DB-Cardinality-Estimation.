import React, { useState } from 'react';

const PrimeNumberApp = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(inputNumber, 10);

    if (isNaN(number) || number <= 1) {
      alert('Please enter a valid number greater than 1.');
      return;
    }

    const primes = generatePrimeNumbers(number);
    setPrimeNumbers(primes);
  };

  const generatePrimeNumbers = (max) => {
    const isPrime = new Array(max + 1).fill(true);

    for (let i = 2; i <= Math.sqrt(max); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime.reduce((primes, isPrime, index) => {
      if (isPrime && index > 1) {
        const primeEstimation = Math.ceil(index / Math.log(index));
        primes.push({index,primeEstimation});
      }
      return primes;
    }, []);
  };

  return (
    <div>
      <h1>Cardinality Estimation App in Databases (React)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input type="text" value={inputNumber} onChange={handleInputChange} />
        </label>
        <button type="submit">Estimated Cardinality</button>
      </form>

      <div>
        <h2>Estimated Cardinality in Databases with Prime Numbers Algo less than {inputNumber}:</h2>
        <ul>
          {primeNumbers.map((prime, i) => (
            <li key={i}>{prime.primeEstimation } with the respective algo of prime number {prime.index}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrimeNumberApp;
