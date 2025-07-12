// Las CLASES son "moldes" para generar objetos.

// Personas: nombre, apellido, fechaNacimiento, provincia, dni, email, dir, tel
// calcularEdad, cambiarContraseña, mostrarDatos

//Alumnos: comisión, insignias, rollinCoins, asistencia, notas,
//pagar(), cambiarComision(),

// Existen 4 pilares de la programación orientada a objetos
// 1- ABASTRACCIÓN: La capacidad que tenemos para observar algo de la realidad y abstraerlo (dibujarlo) en nuestro código.

class Persona {
  // el nombre de la clase se escribe en singular y mayusc la primer letra (CLASE PADRE)
  #email; // propiedades privadas "#"
  #direccion;
  constructor(
    nombre,
    apellidoParam,
    fechaNacimiento,
    provincia,
    dni,
    email,
    direccion,
    telefono,
    contrasenia
  ) {
    // se coloca entre paréntesis los parámetros -separados por coma- que son palabras que en algún momento van a almacenar algún valor
    this.nombre = nombre; // con "this" se refiere al objeto, objeto que aun no fue creado. Luego: ".propiedad" o sea lo que quiero que tenga el molde. Sigue el "=" que es operador de asignación; y me devuelve lo que cargue el usuario en el parámetro, o sea lo que esta en el constructor
    this.apellido = apellidoParam;
    this.provincia = provincia;
    this.fechaNacimiento = fechaNacimiento;
    this.DNI = dni;
    this.#email = email;
    this.#direccion = direccion;
    this.telefono = telefono;
    this.contrasenia = contrasenia;
    this.estado = true; // puedo tener valores por paramétros, y otros agregados por defecto
  }
  // el método constructor va a ser el primero que se ejecuta automáticamente cuando funciona la clase Persona

  // Propiedades computadas: es una propiedad pero va a lucir como un método. geters y setters - get para leer y set para modificar
  get getEmail() {
    // entra a la propiedad privada (#) y devuelve un valor
    return this.#email;
  }

  get getDireccion() {
    // entra a la propiedad privada (#) y devuelve un valor
    return this.#direccion;
  }

  set setEmail(nuevoEmail) {
    // entra a la propiedad privada y lo modifica
    this.#email = nuevoEmail;
  }

  set setDireccion(nuevaDireccion) {
    // entra a la propiedad privada y lo modifica
    this.#direccion = nuevaDireccion;
  }

  // Métodos
  mostrarDatos() {
    // lo que quiero que haga el método
    document.writeln(`<ul>
            <li>Nombre y apellido: ${this.apellido}, ${this.nombre}</li>
            <li>Email: ${this.#email}</li>
            <li>Dirección: ${this.#direccion}</li>
            <li>Teléfono: ${this.telefono}
        </ul>`);
  }

  calcularEdad() {}

  cambiarContrasenia(contraseniaActual, contraseniaNueva) {
    if (contraseniaActual === this.contrasenia) {
      this.contrasenia = contraseniaNueva;
      console.log("Cambiaste la contraseña");
    }
  }
}

class Alumno extends Persona {
  // (Alumno: CLASE HIJO que hereda el constructor del Padre)
  // Quiero que tenga todo lo que tiene la clase Persona (herencia)
  // "extends Persona" indica que hereda todo de esa clase padre/base
  #notas;
  #curso;
  constructor(
    nombre,
    apellidoParam,
    fechaNacimiento,
    provincia,
    dni,
    email,
    direccion,
    telefono,
    contrasenia,
    comision,
    curso
  ) {
    // invocá al constructor de persona
    super(
      nombre,
      apellidoParam,
      fechaNacimiento,
      provincia,
      dni,
      email,
      direccion,
      telefono,
      contrasenia
    ); // Debe ir en orden
    // Estas son las prop del alumno; no es necesario que vayan en orden:
    this.comision = comision;
    this.insignias = [];
    this.rollinCoins = 0;
    this.asistencia = 0;
    this.#notas = []; // porque tengo una nota por módulo
    this.#curso = curso; // Full Stack por ejemplo
  }

  // get y set: son propiedades computadas, no son métodos

  set setNotas(nuevaNota){
    this.#notas.push(nuevaNota)
  }

  get getNotas(){
    return this.#notas
  }

  // agregar métodos. Como lo agrego en mi clase hija, aunque se llame igual, lo que interpreta es que quiero que me muestre lo mismo que herede de mi padre, pero con otras cosas:
  mostrarDatos() { // Dirección y Email van con "get" porque son prop priv del padre, en cambio la prop privada notas no es necesario que vaya con get porque es priv de la hija, o sea donde estamos ahora
    // Este método aplica polimorfismo
    document.writeln(`<ol class="list-group">
            <li class="list-group-item">Nombre y apellido: ${this.apellido}, ${this.nombre}</li>
            <li class="list-group-item">Email: ${this.getEmailemail}</li>
            <li class="list-group-item">Dirección: ${this.getDireccion}</li> 
            <li class="list-group-item">Teléfono: ${this.telefono}
            <li class="list-group-item">Comisión: ${this.comision}
            <li class="list-group-item">Notas: ${this.getNotas}</li>            
            </ol>`);
  }

  calcularPromedio(){
    let suma =0
    for(let i=0; i<this.#notas.length ;i++){
        suma = suma + this.#notas[i]
    }
    return suma/this.#notas.length
  }
}
// lógica de mi programa

const maxi = new Persona(
  "Maximiliano",
  "Gómez Tolrá",
  "10/04/2000",
  "Tucumán",
  "44665777",
  "maxi@gomeztolra.com",
  null,
  "3813444555",
  "%123654ABC$"
); // instanciar una clase, es invocar una clase, y lo hago con el new
const agus = new Persona(
  "Agustina",
  "Bulacio",
  "10/04/2004",
  "Tucumán",
  "44665777",
  "agus@bulacio.com",
  null,
  "3813444987",
  "%123654ABC$"
);

console.log(maxi);

maxi.mostrarDatos();
agus.mostrarDatos();

// 2- ENCAPSULAMIENTO: La teoría de la programación orientada a objetos dice que yo no debería dejar que nadie fuera de la clase modifique las propiedades del objeto creado. Sirve para "proteger" las propiedades.

// en principio, sin encapsular, puedo modificar un dato
maxi.email = "maxi@gmail.com";
maxi.mostrarDatos();

// si quiero que se modifiquen solo con métodos, entonces ponemos el "#" arriba del constructor con el nombre de la propiedad

document.writeln(`<p>Consultar email: ${maxi.getEmail}</p>`);
maxi.setEmail = "maxi@outlook.com";

maxi.mostrarDatos();

// 3- HERENCIA: Significa que se hereda todas las propiedades y métodos que voy a usar como clase base.

const pau = new Alumno(
  "Paula",
  "Gramajo",
  "10/04/2004",
  "Tucumán",
  "44665888",
  "pau@gramajo.com",
  null,
  "3813444988",
  "%123654ABC$",
  "c13",
  "FullStack"
);

console.log(pau);
pau.mostrarDatos();

pau.setDireccion = "San Miguel de Tucumán";
document.writeln(`<p>Dirección: ${pau.getDireccion}</p>`);

// 4- POLIMORFISMO: Viene de que algo va a cambiar de forma. Entonces si quiero modificar el método heredado (por ej "Mostrar Datos") para mostrar más datos, aplicamos polimorfimos
// Ej: mostrarDatos de pau
// si pongo new Persona, sabe que será mostrarDatos del tipo persona, y si es new Alumno, sabe que será mostrarDatos del tipo persona.
// El polimorfismo aplica a métodos que se llaman de la misma manera

pau.setNotas = 10;
pau.setNotas = 8;

pau.mostrarDatos()
maxi.mostrarDatos()

document.writeln(`<p>Promedio: ${pau.calcularPromedio()}</p>`)