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
/*
do {
    Todas las lineas de código que quiero repetir varias veces
    Agregar alguna linea que haga que la condición lógica se deje de cumplir en algún momento.
} while (condición lógica){
}
*/

let fila = 100;

do{
    document.writeln(`<p>Fila N ${fila}</p>`);
    fila ++
} while(fila <= 50)

/* for
Solo si se cumple la condición lógica, se ejecuta el for

for(inicializar variable; condición lógica; incrementar / decrementar la variable){
    Todas las lineas de código que quiero repetir varias veces
}
*/

for(let indice = 10; indice > 0 ; indice --){ // --es p/restar indice
    document.writeln(`<p>Cuenta regresiva N ${indice}</p>`)
}

    