module.exports = function getZerosCount(number, base) {
  const PRIME_NUMBERS = _getPrimesLess(base);
  let primes = _primes(PRIME_NUMBERS, base);
  let temp = primes[0].map(() => 0);
  primes[0].forEach((p, i) => {
    for(let numberCopy = number;numberCopy / p >= 1; numberCopy /= p) {
      temp[i] += Math.floor(numberCopy / p);
    }
  });
  ;
  return Math.min(...divideArrays(temp, primes[1]));

  function divideArrays(arr1, arr2) {
    return arr1.map((a, i) => {
      return Math.floor(a / (arr2[i] || 1));
    });
  }

  function _primes(primeNumbers, number) {
    let primes = [];
    let powers = [];
    primeNumbers
      .filter(prime => prime <= number)
      .forEach(prime => {
        if(number % prime == 0) {
          primes.push(prime);
          let power = 0;
          while(number % prime == 0) {
            number /= prime;
            power++;
          }
          powers.push(power);
        }
      });
    return [primes, powers];
  }

  function _getPrimesLess(max) {
    let result = [];
    let hasDivisiors;
    for(let i = 2; i <= max; i++) {
      hasDivisiors = false;
      result.forEach(r => {
        if(!hasDivisiors && i % r == 0) {
          hasDivisiors = true;
        }
      });
      if(!hasDivisiors) {
        result.push(i);
      }
    }
    return result;
  }
}