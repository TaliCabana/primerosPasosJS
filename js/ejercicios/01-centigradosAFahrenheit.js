//Crear un programa que calcule cuántos grados Fahrenheit son X grados centígrados. Fórmula = (x °c * 9/5) + 32
const gradoCentigrado = parseInt(prompt("Ingresá los grados centígrados"))
//parcear entero es convertir un texto en número

const gradoFahrenheit = (gradoCentigrado * 9/5) + 32

console.log(gradoCentigrado);
document.writeln("Los grados centígrados: " + gradoCentigrado+"°C, pasados a Fahrenheit son : "+gradoFahrenheit+ "°F")

// Ventana emergente para mostrar un mensaje
alert("Los grados centígrados: " + gradoCentigrado+"°C, pasados a Fahrenheit son : "+gradoFahrenheit+ "°F")