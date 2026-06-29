// Ejercicio 6: Comparador profesional de áreas de triángulos

let base1Texto = prompt("Ingrese la base del triangulo 1:");
let altura1Texto = prompt("Ingrese la altura del triangulo 1:");

let base2Texto = prompt("Ingrese la base del triangulo 2:");
let altura2Texto = prompt("Ingrese la altura del triangulo 2:");

base1Texto = base1Texto.trim();
altura1Texto = altura1Texto.trim();
base2Texto = base2Texto.trim();
altura2Texto = altura2Texto.trim();

let base1 = Number(base1Texto);
let altura1 = Number(altura1Texto);
let base2 = Number(base2Texto);
let altura2 = Number(altura2Texto);

if (base1Texto === "") {
    console.log("Error: La base del triangulo 1 no puede estar vacía.");
    alert("Error: La base del triangulo 1 no puede estar vacia.");
} else if (isNaN(base1)) {
    console.log("Error: La base del triangulo 1 debe ser un numero valido.");
    alert("Error: La base del triangulo 1 debe ser un numero válido.");
} else if (base1 <= 0) {
    console.log("Error: La base del triangulo 1 debe ser positiva.");
    alert("Error: La base del triangulo 1 debe ser positiva.");
} else if (altura1Texto === "") {
    console.log("Error: La altura del triangulo 1 no puede estar vacía.");
    alert("Error: La altura del triangulo 1 no puede estar vacia.");
} else if (isNaN(altura1)) {
    console.log("Error: La altura del triangulo 1 debe ser un numero valido.");
    alert("Error: La altura del triangulo 1 debe ser un numero válido.");
} else if (altura1 <= 0) {
    console.log("Error: La altura del triangulo 1 debe ser positiva.");
    alert("Error: La altura del triangulo 1 debe ser positiva.");
} else if (base2Texto === "") {
    console.log("Error: La base del triangulo 2 no puede estar vacía.");
    alert("Error: La base del triangulo 2 no puede estar vacia.");
} else if (isNaN(base2)) {
    console.log("Error: La base del triangulo 2 debe ser un numero valido.");
    alert("Error: La base del triangulo 2 debe ser un numero válido.");
} else if (base2 <= 0) {
    console.log("Error: La base del triangulo 2 debe ser positiva.");
    alert("Error: La base del triangulo 2 debe ser positiva.");
} else if (altura2Texto === "") {
    console.log("Error: La altura del triangulo 2 no puede estar vacía.");
    alert("Error: La altura del triangulo 2 no puede estar vacia.");
} else if (isNaN(altura2)) {
    console.log("Error: La altura del triangulo 2 debe ser un numero valido.");
    alert("Error: La altura del triangulo 2 debe ser un numero válido.");
} else if (altura2 <= 0) {
    console.log("Error: La altura del triangulo 2 debe ser positiva.");
    alert("Error: La altura del triangulo 2 debe ser positiva.");
} else {
    let area1 = (base1 * altura1) / 2;
    let area2 = (base2 * altura2) / 2;

    //Area del triángulo 1
    let clasificacion1;

    if (area1 < 50) {
        clasificacion1 = "Pequeña";
    } else if (area1 >= 50 && area1 <= 200) {
        clasificacion1 = "Mediana";
    } else {
        clasificacion1 = "Grande";
    }

    //Area del triángulo 2
    let clasificacion2;

    if (area2 < 50) {
        clasificacion2 = "Pequeña";
    } else if (area2 >= 50 && area2 <= 200) {
        clasificacion2 = "Mediana";
    } else {
        clasificacion2 = "Grande";
    }

    let diferencia = Math.abs(area1 - area2);

    let comparacion;

    if (area1 > area2) {
        comparacion = "El triangulo 1 tiene mayor area.";
    } else if (area2 > area1) {
        comparacion = "El triangulo 2 tiene mayor area.";
    } else {
        comparacion = "Ambos triangulos poseen areas iguales.";
    }

    let mensaje = `
========= COMPARADOR DE TRIANGULOS =========
Triangulo 1:
Base: ${base1}
Altura: ${altura1}
Área: ${area1.toFixed(2)}
Clasificación: ${clasificacion1}

Triangulo 2:
Base: ${base2}
Altura: ${altura2}
Área: ${area2.toFixed(2)}
ClasificaciOn: ${clasificacion2}

${comparacion}
Diferenica entre areas: ${diferencia.toFixed(2)}
============================================
`;

    console.log(mensaje);
    alert(mensaje);
}