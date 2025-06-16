// 9- Escribe un programa que pida una frase y escriba las vocales que aparecen.
// Nota: Tener en cuenta la funcion length y substring o charAt (Developer Mozilla)

const frase = prompt("Ingresá una frase de hasta 5 caracteres").toLowerCase();
// frase de ejemplo: hola mundo
console.log(frase.toLowerCase()) // Esto transforma un texto a minúscula
console.log(frase.toUpperCase()) // Esto transforma un texto a mayúsucula
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(0));
console.log(frase.charAt(5));

// El doble igual compara solo el valor
//  1=="1" True, pues es el mismo valor

// El triple igual compara el valor y el tipo de dato:
//  1==="1" False, pues es el mismo valor, pero != tipo de dato, uno es un nro y el otro es un texto

if (
  frase.charAt(0) === "a" || 
  frase.charAt(0) === "á" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "é" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "í" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "ó" ||
  frase.charAt(0) === "u" ||
  frase.charAt(0) === "ú"
) {
  document.writeln(frase.charAt(0));
}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "á" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "é" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "í" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "ó" ||
  frase.charAt(1) === "u" ||
  frase.charAt(1) === "ú"
) {
  document.writeln(frase.charAt(1));
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "é" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "í" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "ó" ||
  frase.charAt(2) === "u" ||
  frase.charAt(2) === "ú"
) {
  document.writeln(frase.charAt(2));
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "á" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "é" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "í" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "ó" ||
  frase.charAt(3) === "ú" ||
  frase.charAt(3) === "u"
) {
  document.writeln(frase.charAt(3));
}
if (
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "á" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "é" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "í" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "ó" ||
  frase.charAt(4) === "ú" ||
  frase.charAt(4) === "u"
) {
  document.writeln(frase.charAt(4));
}
if (
  frase.charAt(5) === "a" ||
  frase.charAt(5) === "á" ||
  frase.charAt(5) === "e" ||
  frase.charAt(5) === "é" ||
  frase.charAt(5) === "i" ||
  frase.charAt(5) === "í" ||
  frase.charAt(5) === "o" ||
  frase.charAt(5) === "ó" ||
  frase.charAt(5) === "ú" ||
  frase.charAt(5) === "u"
) {
  document.writeln(frase.charAt(5));
}