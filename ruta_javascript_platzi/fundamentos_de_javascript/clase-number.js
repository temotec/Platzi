// 1. Tipo de Entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notación científica
const científico = 5e3;

//3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNúmero = NaN;

// 4. Operaciones numéricas Sumación, Resta, Multiplicación y División
const suma = 10 + 5;
const resta = 10 - 5;
const multiplicación = 10 * 5;
const división = 10 / 5;

    // Modulo y Exponenciación
    const modulo = 10 % 3; // Resto de la división
    const exponenciación = 2 ** 3; // 2 elevado a la 3

    // Precisión 
    const resultado = 0.1 + 0.2;
    console.log(resultado);
    console.log(resultado.toFixed(1));
    console.log(resultado === 0.3);
    