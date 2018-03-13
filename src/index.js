module.exports = function getZerosCount(number, base) {

  let prime = primes(base);
  let result = 0;
  let temp = prime[0].map(p => 0);
  for(let i = 2; i <= number; i++) {
    let tempI = i;
    prime[0].forEach(p => {
      while(tempI % p == 0) {
        tempI /= p;
        temp[prime[0].indexOf(p)]++;
      }
    });
  }
  let min = Math.min(...temp);
  result = Math.floor(min / prime[1][temp.indexOf(min)]);
  return result;

  function primes(number) {
    let primes = [];
    let powers = [];
    for(let i = 2; i <= number && number > 1; i++) {
      if(number % i == 0) {
        primes.push(i);
        let power = 0;
        while(number % i == 0) {
          number /= i;
          power++;
        }
        powers.push(power);
      }
    }
    return [primes, powers];
  }
}