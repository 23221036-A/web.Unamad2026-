// Caso 4: Control de Acceso y Puertas de Seguridad

const alumnos = [
    { id: 1, nombre: "Juan", matriculado: true, deudaPendiente: false },
    { id: 2, nombre: "Víctor", matriculado: true, deudaPendiente: true },
    { id: 3, nombre: "Deysi", matriculado: true, deudaPendiente: false },
    { id: 4, nombre: "Lucía", matriculado: true, deudaPendiente: false }
];

const todosMatriculados = alumnos.every((alumno) => {
    return alumno.matriculado === true;
});

const existeDeudaPendiente = alumnos.some((alumno) => {
    return alumno.deudaPendiente === true;
});

console.log("Lista de alumnos:");
console.log(alumnos);

console.log("¿Todos los alumnos están matriculados?");
console.log(todosMatriculados);

console.log("¿Existe al menos un alumno con deuda pendiente?");
console.log(existeDeudaPendiente);

if (todosMatriculados && !existeDeudaPendiente) {
    console.log("Acceso permitido al laboratorio.");
    alert("Acceso permitido al laboratorio.");
} else {
    console.log("Acceso bloqueado para el grupo.");
    alert("Acceso bloqueado: verifique matrícula o deuda pendiente.");
}