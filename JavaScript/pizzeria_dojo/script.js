function pizzaOven(tipoCorteza, tipoSalsa, quesos, agregados) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.agregados = agregados;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "traditional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "queso feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("estilo New York", "traditional", ["mozzarella", "parmesano"], ["pepperoni", "salchicha", "pimientos", "cebollas"]);
console.log(pizza3);

var pizza4 = pizzaOven("estilo California", "blanca", ["mozzarella", "ricotta"], ["espinacas", "champiñones", "cebollas"]);
console.log(pizza4);