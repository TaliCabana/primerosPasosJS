// Cree un programa al estilo de un cajero automático con las siguientes opciones:
// 1- consultar el saldo
// 2- ingrsar dinero
// 3- extraer dinero

/*
switch (opcion){
    case 1: 
        Todas las lineas de código que quiero hacer si la opción del usuario es 1
        breack;
    case 2: 
        Todas las lineas de código que quiero hacer si la opción del usuario es 2
        breack;
    case n: 
        Todas las lineas de código que quiero hacer si la opción del usuario es n
        breack;
    default:
        Todas las lineas que quiero ejecutar si no se cumplió ningún caso anterior
}
*/

const opcion = prompt(
  "Seleccione una opción: 1- Consultar saldo, 2- Ingresar dinero, 3- Extraer dinero"
);
let saldo = 10000;

switch (opcion) {
  case "saldo": // Si ingresa la palabra saldo o la opción 1 => devuelve el saldo que hay en la cuenta
  case "1":
    alert("Su saldo es $" + saldo);
    break;
  case "2":
    const deposito = Number(prompt("Ingrese el monto que desea depositar"));
    if (deposito >= 1000 && deposito <= 2000000) {
      console.log(deposito);
      saldo = saldo + deposito;
      document.writeln(
        `Depositaste $ ${deposito}, tu saldo actual es: $${saldo}`
      );
    } else {
      alert("Ingresaste un monto inválido.");
    }
    break;
  case "3":
    const montoExtrer = parseFloat(prompt("Ingresá el monto a extraer"));
    if (montoExtrer <= saldo) {
      saldo = saldo - montoExtrer;
      document.writeln(
        `El monto a extraer es $${montoExtrer}, tu saldo actual es $${saldo}`
      );
    } else {
      alert("Monto inválido");
    }
    break;
  default:
    alert("Ingresaste una opción erronea");
}
