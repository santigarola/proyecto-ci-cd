// math.test.js
const { suma, resta, multiplicar } = require('./math.js');

console.assert(suma(2, 3) === 5, 'Suma falló');
console.assert(resta(5, 2) === 3, 'Resta falló');
console.assert(multiplicar(4, 3) === 12, 'Multiplicación falló');

console.log("Todas las pruebas pasaron.");
