const mostrarCanciones = (titulo) => {
  document.writeln(
    `<h2 class="mt-3">${titulo} - Cantidad de elementos antes de modificar la lista: ${canciones.length}</h2>`
  );

  document.writeln(`<ul class="list-group">`);
  for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
  }
  document.writeln("</ul>");
};

// Cómo declarar un array
// array vacío
const peliculas = [];

//array de canciones
const canciones = ["Batidora", 2010, true, "Música ligera", "Mujer amante"];

// mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);
const indice = 0;
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`);
document.writeln(
  `<p>Mostrar el primer elemento del array: ${canciones[indice]}</p>`
);
document.writeln(
  `<p>Mostrar el elemento de la posició 30 del array: ${canciones[30]}</p>`
); // indefinido

mostrarCanciones("Mostrar el array de canciones");

// agregar elemento al inicio del array
canciones.unshift(false, "Like stone");
mostrarCanciones("Agregar un elemento al inicio del array");

// agregar elemento al finañ del array
canciones.push("Like a Rolling Stone");
mostrarCanciones("Agregar un elemento al final del array");

// agregar elemento en el medio del array
canciones.splice(4, 0, "Feel Good Inc"); // (posición donde quiero agregar el elemento, cuántos elementos quiero borrar, qué quiero agregar)
mostrarCanciones("Agregar un elemento en el medio del array");

// borrar un elemento al inicio del array
canciones.shift(); // puedo usarlo varias veces, siempre va a borrar el primero de la lista
mostrarCanciones("Borrar un elemento al inicio del array");

// borrar un elemento al final del array
canciones.pop(); // puedo usarlo varias veces, siempre va a borrar el último de la lista
mostrarCanciones("Borrar un elemento del final del array");

// borrar un elemento del medio del array
canciones.splice(2, 1); // En la posición 2, borro 1 elemento (pero si en lugar de "1" pongo ás, borro más elementos)

// Si: canciones.splice(2) => borro TODO lo que hay desde la posición 2 en adelante, o sea que quedaría la posición 0 y la posición 1
// Si quiero borrar el último elemento con splice
// canciones.splice(canciones.length - 1, 1)
mostrarCanciones("Borrar un elemento del medio del array");

// modificar un elemento del array
canciones[3] = "Sobredosis de TV";
mostrarCanciones("Modificar un elemento del array");

// Métodos extras para trabajar con arrays
const nombreCancion = prompt("Ingresá un nombre de canción");

const cancionAlmacenada = canciones.find(
  (cancion) => nombreCancion === cancion
);
console.log(cancionAlmacenada);

/*
if (cancionAlmacenada){ // Folses: null,undefinid,0,""
  document.writeln(`<p>La canción buscada existe</p>`)
}else{ 
 document.writeln(`<p>La canción buscada no existe</p>`)
}
*/

// Operador ternario: (condición lógica)? si se cumple la condición hago esto : si no se cumple la condición hago esto otro

const respuesta = cancionAlmacenada
  ? "La canción buscada existe"
  : "La canción buscada no existe";
document.writeln(`<p>${respuesta}</p>`);

const indiceCancion = canciones.findIndex((cancion)=> nombreCancion === cancion )
// si encuentra => devuelve un nro >= 0
// si no encuentra => devuelve -1
console.log(indiceCancion)
const indiceCancionBuscada = indiceCancion > -1
  ? `La canción está en la posición ${indiceCancion} del array de canciones.`
  : "La canción buscada no está en la lista";
document.writeln(`<p>${indiceCancionBuscada}</p>`);

const cancionesFiltradas = canciones.filter((item) => item.length>=13)

console.log(cancionesFiltradas)

document.writeln(`<li class="list-group">`)
cancionesFiltradas.map((cancion, indice)=>document.writeln(`<li class="list-group-item">${cancion} - Índice: ${indice}</li>`))
document.writeln(`</ul>`)