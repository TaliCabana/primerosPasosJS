// Cómo declarar un array
// array vacío
const peliculas = []

// array de canciones
const canciones =["Batidora", 2010, true, "Música ligera", "Mujer amante"]

// mostrar un array
console.log(peliculas)
console.log(canciones)
document.writeln(canciones)

document.writeln("<ul>")
for (let i=0 ; i<=canciones.length ; i++){
    document.writeln(`<ul><li>${canciones[i]}</li></ul>`)
}

document.writeln("</ul>")