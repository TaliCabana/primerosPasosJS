// ESTRUCTURAS DE REPETICIÓN

// Tipos de bucles: while, for, do-while

/* while  - mientras se cumple tal condición

while (condicion logica){
    Todas las lineas de código que quiero repetir varias veces (una cantidad controlada de veces)
    Agregar alguna linea que haga que la condición lógica se deje de cumplir en algún momento.
}
*/

let renglon = 1;
while (renglon <= 50) {  // Se usa solamente si de entrada se cumple la condición lógica
  document.writeln(`<p>Renglón ${renglon}</p>`);
  renglon++; // equivale a renglon = renglon + 1
}

// do-while 
// es el que se debe ejecutar al menos una vez, sin importar si la condición lógica se cumple

let fila = 1;
