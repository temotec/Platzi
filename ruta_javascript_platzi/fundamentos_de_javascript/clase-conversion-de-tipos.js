//Explicit TypeCasting

const string = '42';
const integer = parseInt(string); // Convierte a entero
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal); // Convierte a flotante
console.log(float);
console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2); // Convierte a decimal desde binario
console.log(decimal);
console.log(typeof decimal);