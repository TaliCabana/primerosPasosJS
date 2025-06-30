// Notación literal

const pelicula = {
    // propiedades
    titulo: "Episodio 3 la venganza de los siths",
    duracion: "2:20",
    anio: 2005,
    puntaje: 9.5,
    categoria: "Ciencia Ficción",
    actores: ["Evan Mcgregor", "Hayden Christensen"],

    // métodos
    reproducir: function(){
        document.writeln(`<p>Comenzó la peli 🎬</p>`)
    },
    detener: () => {
        document.writeln(`<p>La peli se detuvo 🛑</p>`)
    }
}

// mostrar el objeto
console.log(pelicula)