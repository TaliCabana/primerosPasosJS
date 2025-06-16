// ESTRUCTURAS DE REPETICIÓN

// Tipos de bucles: while, for, do-while

/* while  - mientras se cumple tal condición

while (condicion logica){
    Todas las lineas de código que quiero repetir varias veces (una cantidad controlada de veces)
    Agregar alguna linea que haga que la condición lógica se deje de cumplir en algún momento.
}
*/

let renglon = 1;
while (renglon <= 50) {
  document.writeln(`<p>Renglón ${renglon}</p>`);
  renglon++; // equivale a renglon = renglon + 1
}

// do-while