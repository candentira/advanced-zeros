module.exports = function getZerosCount(number, base) {


  function primes(number) {
    
  }
  
}

/* let result = 0;
  let temp = 1;
  for(let i = 2; i <= number; i++) {
    temp = temp * gcd( i, base);
    while(temp % base == 0) {
      result++;
      temp /= base;
    }
  }
  console.log("result: " + result);
  return result;

  function gcd(first, second) {
    if(first < second) {
      const temp = first;
      first = second;
      second = temp;
    }
    let remaining = first % second;
    if(remaining != 0) {
      return gcd(second, remaining);
    } else {
      return second;
    }
  } */

/* let result = 0;
  let temp = 1;
  for(let i = 2; i <= number; i++) {
    temp = gcd(temp * i, base);
    if(temp % base == 0) {
      result++;
      temp /= base;
    }
  }
  console.log("result: " + result);
  return result;

  function gcd(first, second) {    
    if(first < second) {
      const temp = first;
      first = second;
      second = temp;
    }
    let remaining = first % second;
    if(remaining != 0) {
      return gcd(second, remaining);
    } else {
      return second;
    }
  } */