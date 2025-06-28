// Realiza un script que pida cadenas de texto hasta que se pulse "Cancelar". Al salir con "Canelar" deben mostrar todas las cadenas concatenadas con un guión -.

let text = ""
do{
    const palabra = prompt ("Ingrese lo que desea concatenar")
    console.log(text.length)
    if(text.length===0){
        text=palabra
    } else {
        text = text + "-" + palabra
    }
    console.log(text.length)
    console.log(text)
}

while(confirm("Presione 'Aceptar' para agregar otro texto"))

document.writeln(text)