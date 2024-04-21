/*
    *Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.log imprima todos los valores impares del 1 al 20.
    *Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.log imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
    *Imprime la secuencia Usando un bucle, escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.
    *Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
    *Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable product y, al final, console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.
*/
let i = 1;

//Imprimir impares 1-20
while (i <= 20) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

console.log("---------------------------------------------------------");

//Disminuir múltiplos de 3
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log("---------------------------------------------------------");

//Imprime la secuencia
for(let i = 4; i >= -3.5; i -= 1.5){
    console.log(i);
}

console.log("---------------------------------------------------------");

//Sigma
i = 1;
let sum = 0;
while(i <= 100){
    sum += i;
    console.log(sum);
    i++;
}

console.log("---------------------------------------------------------");

//Factorial
let product = 0;
i = 1;
while (i <= 12) {
    if (product == 0) {
        product = i;
    } else {
        product *= i;
    }
    console.log(product);
    i++;
}