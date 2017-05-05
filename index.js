module.exports = (n = 0) => {
  const medium = n / 2;
  let primes = [];
  let sieve = 2;
  for (let i = 2; i <= n; i++) {
    if (i % sieve) primes.push(i);
  }
  sieve = primes[0];
  for (let i = 0; sieve <= medium;sieve = primes[++i]) {
    primes = primes
    .filter(number => number % sieve || number === sieve);
  }
  return primes;
};

console.log(module.exports());
