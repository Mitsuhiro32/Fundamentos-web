// Siempre hambriento
function siempreHambriento(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("Delicioso");
        } else if (i == arr.length - 1 && arr[i] != "comida") {
            console.log("Tengo hambre");
        }
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "Delicioso, "Delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

console.log("--------------------------------------------------");

// Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
        i++;
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

console.log("--------------------------------------------------");

// Mejor que el promedio
function betterThanAverage(arr) {
    let sum = 0;
    let i = 0;
    // calcular el promedio
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    let avg = sum / arr.length;
    let count = 0
    // cuenta cuántas variables son mayores que el promedio
    i = 0;
    while (i < arr.length) {
        if (arr[i] > avg) {
            count++;
        }
        i++;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

console.log("--------------------------------------------------");

// Arreglo invertido
function reverse(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

console.log("--------------------------------------------------");

// Arreglo de Fibonacci
function fibonacciArray(n) {
    // [0, 1] son los valores iniciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
