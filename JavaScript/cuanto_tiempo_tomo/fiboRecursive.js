const { performance } = require('perf_hooks');
const start = performance.now();

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log("Fibonacci recursivo:");
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);