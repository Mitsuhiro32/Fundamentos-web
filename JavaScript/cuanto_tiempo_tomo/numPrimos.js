//Calcular números primos
Number.prototype.isPrime = function () {
    if (this < 2) return false;
    if (this <= 3) return true;
    if (this % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(this); i += 2) {
        if (this % i === 0) return false;
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

