// Una función guarda un bloque de código. La clave es que haga una tarea, no más de una, que sean funciones pequeñas y específicas, que resuelvan una acción
// Una variable creada fuera de la función, no la puedo utilizar afuera de las llaves de esa función.

// Las funciones se trata de definir al principio, arriba de todo

// funciones tradicionales
function saludar(){
    // todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Hola Mundo 🌎</p>`)
}

// función con parámetros
function saludarPersona(nombre, apellido){
    // todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Hola ${nombre} , ${apellido}</p>`)
}

function mostrarCancion(nombreCancion){
    // todas las lineas de código que sabe hacer esta función
    const cancion = "La canción ingresada es: "+nombreCancion
    return cancion // esto indica que termina aquí la función. Siempre debe ser la última linea de la función.
}

// expresión de funcion

//arrow function o funciones en forma de flecha

// llamar o invocar a la funcion

saludar();
const nombre = prompt("Ingresá tu nombre")
const apellido = prompt("Ingresá tu apellido")

saludarPersona("Matías", "Saade")
saludarPersona(nombre, apellido)

const textoGenerado = mostrarCancion("Crimen")

document.writeln(`<p>El texto generado fue: ${textoGenerado}</p>`)
document.writeln(mostrarCancion("Flaca"))
