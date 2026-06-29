// Caso 6: Sistema de Reservas de Aerolínea

const pasajeros = [
    { id: 1, nombre: "Juan", edad: 25, gasto: 800 },
    { id: 2, nombre: "Ana", edad: 17, gasto: 300 },
    { id: 3, nombre: "Luis", edad: 35, gasto: 1200 },
    { id: 4, nombre: "María", edad: 40, gasto: 950 },
    { id: 5, nombre: "Carlos", edad: 29, gasto: 1500 }
];

const nombresPasajeros = pasajeros.map((pasajero) => {
    return pasajero.nombre;
});

const pasajerosMayorGasto = pasajeros.filter((pasajero) => {
    return pasajero.gasto > 1000;
});

const gastoTotal = pasajeros.reduce((total, pasajero) => {
    return total + pasajero.gasto;
}, 0);

const pasajeroId3 = pasajeros.find((pasajero) => {
    return pasajero.id === 3;
});

const existeMenorEdad = pasajeros.some((pasajero) => {
    return pasajero.edad < 18;
});

const todosMayoresEdad = pasajeros.every((pasajero) => {
    return pasajero.edad >= 18;
});

const determinarCategoria = (gasto) => {
    if (gasto < 500) {
        return "Básico";
    } else if (gasto >= 500 && gasto <= 1000) {
        return "Frecuente";
    } else {
        return "VIP";
    }
};

const pasajerosConCategoria = pasajeros.map((pasajero) => {
    return {
        nombre: pasajero.nombre,
        categoria: determinarCategoria(pasajero.gasto)
    };
});

console.log("Lista completa de pasajeros:");
console.log(pasajeros);

console.log("1. Nombres de todos los pasajeros:");
console.log(nombresPasajeros);

console.log("2. Pasajeros con gasto mayor a S/1000:");
console.log(pasajerosMayorGasto);

console.log("3. Gasto total generado:");
console.log("S/" + gastoTotal);

console.log("4. Pasajero con ID = 3:");
console.log(pasajeroId3);

console.log("5. ¿Existe algún pasajero menor de edad?");
console.log(existeMenorEdad);

console.log("6. ¿Todos los pasajeros son mayores de edad?");
console.log(todosMayoresEdad);

console.log("7 y 8. Pasajeros con categoría:");
console.log(pasajerosConCategoria);

alert("Caso 6 desarrollado correctamente. Revisa la consola.");