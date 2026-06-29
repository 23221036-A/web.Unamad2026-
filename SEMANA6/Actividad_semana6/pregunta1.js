// Ejercicio 1: Registro inteligente de usuario con validaciones

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edadTexto = prompt("Ingrese su edad:");

nombre = nombre.trim();
apellido = apellido.trim();

let edad = Number(edadTexto);

if (nombre === "") {
    console.log("Error: El nombre no puede estar vacio.");
    alert("Error: El nombre no puede estar vacio.");
} else if (apellido === "") {
    console.log("Error: El apellido no puede estar vacio.");
    alert("Error: El apellido no puede estar vacio.");
} else if (edadTexto.trim() === "") {
    console.log("Error: La edad no puede estar vacia.");
    alert("Error: La edad no puede estar vacia.");
} else if (isNaN(edad)) {
    console.log("Error: La edad debe ser un numero valido.");
    alert("Error: La edad debe ser un numero valido.");
} else if (edad <= 0) {
    console.log("Error: La edad debe ser mayor a 0.");
    alert("Error: La edad debe ser mayor a 0.");
} else {
    let categoria;

    if (edad < 18) {
        categoria = "Menor de edad";
    } else if (edad >= 18 && edad < 60) {
        categoria = "Adulto";
    } else {
        categoria = "Adulto mayor";
    }

    let mensaje = `Buen día, soy ${nombre} ${apellido}, tengo ${edad} años y pertenezco a la categoria ${categoria}.`;

    console.log(mensaje);
    alert(mensaje);
}