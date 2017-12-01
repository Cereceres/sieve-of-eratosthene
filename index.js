module.exports = (n = 0) => {
  if (n < 2) return [];
  const medium = n / 2;
  let primes = [2];
  let sieve = 2;
  for (let i = 2; i <= n; i++) if (i % sieve) primes.push(i);

  sieve = primes[0];

  for (let i = 0; sieve <= medium;sieve = primes[++i]) primes = primes.filter(number => number % sieve || number === sieve);

  return primes;
};

