//Ejercicios practicos coderhouse

let number= "uno"
let string= "texto dos"

let suma = 10+5; 
if ( suma > 13) {
    console.log("aprobaste!");
} else {
    console.log("desaprobaste");
}

console.log(number, string) 

//ejemplo de bucle

//resolución de entrega I

//arrays - variables - constantes

const productos = ["frejol", "arroz", "lentejas", "aceite"];
const precios = [15, 25, 30, 25];

// Condicionales y operadores

const usuario = prompt("Ingrese su usuario:");
const password = prompt("Ingrese su contraseña:");

if (usuario === "admin") {
  if (password === "123") {
    console.log("Acceso aceptado");
  } else {
    console.log("Contraseña incorrecta");
  }
} else {
  console.log("Usuario no reconocido");
}