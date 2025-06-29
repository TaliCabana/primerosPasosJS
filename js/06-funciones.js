// Una función guarda un bloque de código. La clave es que haga una tarea, no más de una, que sean funciones pequeñas y específicas, que resuelvan una acción
// Una variable creada fuera de la función, no la puedo utilizar afuera de las llaves de esa función.

// Las funciones se trata de definir al principio, arriba de todo

// funciones tradicionales (sin parámetros): cuando tengo los datos que necesita la función
function saludar(){
    // todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Hola Mundo 🌎</p>`)
}

// función con parámetros: cuando todavía NO tengo los datos que necesita la función, pero los voy a obtener
function saludarPersona(nombre, apellido){
    // todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Hola ${nombre} , ${apellido}</p>`)
}

// funciones que retornan un valor
function mostrarCancion(nombreCancion){
    // todas las lineas de código que sabe hacer esta función
    const cancion = "La canción ingresada es: "+nombreCancion
    return cancion // esto indica que termina aquí la función. Siempre debe ser la última linea de la función.
    // El return devuelve solo una cosa, una variable, la que sea, pero solo una
}

// expresión de función: Guardo una función dentro de una expresión
//const saludar = function(){
    /* todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Hola Mundo 🌎</p>`)
}
    */

/*const sumar = function(numero1, numero2){
    // todas las lineas de código que sabe hacer esta función
    document.writeln(`<p>Resultado: ${numero1 + numero2}</p>`)
}
    */

// arrow function o funciones en forma de flecha
//si tengo 1 solo parametro, puedo omitir los ()
//si la linea de cod es solo 1 => puedo omitir {}
//si la unica linea de cod es un retur, puedo omitirlo tmb
const sumar = (numero1, numero2) => numero1 + numero2
/* const sumar = (numero1, numero2) => {
    return numero1 + numero2
}
    */

// llamar o invocar a la funcion

saludar();
const nombre = prompt("Ingresá tu nombre")
const apellido = prompt("Ingresá tu apellido")

saludarPersona("Matías", "Saade")
saludarPersona(nombre, apellido)

const textoGenerado = mostrarCancion("Crimen")

document.writeln(`<p>El texto generado fue: ${textoGenerado}</p>`)
document.writeln(mostrarCancion("Flaca"))

const numero1 = parseInt(prompt("Ingresá un número"))
const numero2 = parseInt(prompt("Ingresá otro número"))

sumar(numero1, numero2)
sumar (5,20)