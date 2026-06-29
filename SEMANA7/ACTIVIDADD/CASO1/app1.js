// Caso 1: El Sistema de Autenticacion Defensivo

const validarCredenciales = (usuario, password) => {
    return usuario !== "" && password.length > 8;
};

//length: sirve para contar cuántos caracteres tiene un texto
// return: sirve para devolver un resultado desde una función
//let:  se usa para crear una variable cuyo valor puede cambiar

let usuario = prompt("Ingrese su usuario:");
let password = prompt("Ingrese su contraseña:");

if (validarCredenciales(usuario, password)) {
    localStorage.setItem("usuario_activo", usuario);

    alert("Acceso correcto. Usuario guardado en localStorage.");
    console.log("Usuario activo:", localStorage.getItem("usuario_activo"));
} else {
    alert("Error: el usuario no debe estar vacío y la contraseña debe tener más de 8 caracteres.");
    console.log("Credenciales inválidas.");
}