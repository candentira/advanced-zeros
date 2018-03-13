module.exports = function getZerosCount(number, base) {
  const PRIME_NUMBERS = _getPrimesLess(base);
  let prPowers = _primesPowers(PRIME_NUMBERS, base);
  let minPrimePower = Math.min(...prPowers.filter(p => p > 0));
  let minPrimes = PRIME_NUMBERS
    .filter((p, i) => prPowers[i] == minPrimePower);
  let temp = minPrimes.map(() => 0);
  for(let i = 2; i <= number; i++) {
    temp = _arraysSum(temp, _primesPowers(minPrimes, i));
  }
  return Math.floor(Math.min(...temp) / minPrimePower);
  
  function _arraysSum(arr1, arr2) {
    return arr1.map((el, i) => {
      return el + (arr2[i] || 0);
    });
  }

  function _primesPowers(primeNumbers, number) {
    let powers = [];
    primeNumbers
      .filter(prime => prime <= number)
      .forEach(prime => {
        let power = 0;
        while(number % prime == 0) {
          number /= prime;
          power++;
        }
        powers.push(power);
      });
    return powers;
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