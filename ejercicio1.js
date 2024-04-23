let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

let mayor, centro, menor;
if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
        centro = numero2;
        menor = numero3;
    } else {
        centro = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
        centro = numero1;
        menor = numero3;
    } else {
        centro = numero3;
        menor = numero1;
    }
} else {
    mayor = numero3;
    if (numero1 >= numero2) {
        centro = numero1;
        menor = numero2;
    } else {
        centro = numero2;
        menor = numero1;
    }
}
console.log("El número mayor es: " + mayor);
console.log("El número del centro es: " + centro);
console.log("El número menor es: " + menor);
console.log("Los números en orden de mayor a menor son: " + mayor + ", " + centro + ", " + menor);
console.log("Los números en orden de menor a mayor son: " + menor + ", " + centro + ", " + mayor);

if (numero1 === numero2 && numero1 === numero3) {
    console.log("Los tres números son iguales.");
}
if (numero1 === numero2 && numero1 !== numero3) {
    console.log("Los 2 primeros números ingresados son iguales y el 3er número es diferente");
}
if (numero2 === numero3 && numero2 !== numero1) {
    console.log("Los 2 últimos números ingresados son iguales y el 1er número es diferente");
}