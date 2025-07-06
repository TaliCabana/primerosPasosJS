// Notación literal: para pocos objetos (hasta 2).
// Clases: para 3 o más objetos

const pelicula = {
    // propiedades -> llave: propiedad == key: value ("ki y valiu", se pronuncia)
    titulo: "Episodio 3 la venganza de los siths",
    duracion: "2:20",
    anio: 2005,
    puntaje: 9.5,
    categoria: "Ciencia Ficción",
    actores: ["Evan Mcgregor", "Hayden Christensen"],

    // métodos
    reproducir: function(){
        console.log(this)  //  Objeto
        document.writeln(`<p>Comenzó la peli 🎬<b>${this.titulo}</b></p>`)
    },
    detener: () => {
        console.log(this)  //  Window
        document.writeln(`<p>La peli se detuvo 🛑</p>`)
    }
}

// mostrar el objeto
console.log(pelicula)
document.writeln(pelicula)
document.writeln(`<h1>Objeto película</h1>`)
document.writeln(`<p>Título: ${pelicula.titulo}</p>`)
document.writeln(`<p>Duración: ${pelicula.duracion}</p>`)
document.writeln(`<p>Categoría: ${pelicula["categoria"]}</p>`)
document.writeln(`<p>Año: ${pelicula.año}</p>`) // error

// agregar propiedades nuevas
pelicula.imdb = 7.6
document.writeln(`<p>IMdb: ${pelicula.imdb}</p>`)

// modificar un objeto
pelicula.imdb = 8
document.writeln(`<p>IMdb: ${pelicula.imdb}</p>`)

// borrar propiedad de un objeto
delete pelicula.puntaje
console.log(pelicula)
document.writeln(`<p>Puntaje: ${pelicula.puntaje}</p>`)

// usar los métodos del objeto
pelicula.reproducir()
pelicula.detener()