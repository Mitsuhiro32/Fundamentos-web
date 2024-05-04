const { performance } = require('perf_hooks');
const start = performance.now();

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.log("Fibonacci iterativo:");
console.log(iFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

//Luego de la comparación, se puede observar que el método iterativo es mucho más rápido que el método recursivo.
