const assert = require('assert');

const siave = require('./index');
describe('sieve eratothene generator', function() {
  it('should get the first primes from 1-100', function() {
    const primes = [ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
    assert.deepEqual(siave(100), primes);
  });

  it('should get the first primes from 1-5', function() {
    const primes = [ 3, 5];
    assert.deepEqual(siave(5), primes);
  });

  it('should get the first primes from 1-2', function() {
    const primes = [ ];
    assert.deepEqual(siave(2), primes);
  });

  it('should get empry array if undefined is given', function() {
    const primes = [ ];
    assert.deepEqual(siave(), primes);
  });
});
