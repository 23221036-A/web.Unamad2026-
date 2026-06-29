// Ejercicio 5: Combinador avanzado de cadenas

let cadenaA = prompt("Ingrese la primera cadena de texto:");
let cadenaB = prompt("Ingrese la segunda cadena de texto:");

// Limpiar espacios al inicio y al final
cadenaA = cadenaA.trim();
cadenaB = cadenaB.trim();

// Validaciones
if (cadenaA === "") {
    console.log("Error: La primera cadena no puede estar vacia.");
    alert("Error: La primera cadena no puede estar vacia.");
} else if (cadenaB === "") {
    console.log("Error: La segunda cadena no puede estar vacia.");
    alert("Error: La segunda cadena no puede estar vacia.");
} else {
    let cadenaASinEspacios = cadenaA.replaceAll(" ", "");
    let cadenaBSinEspacios = cadenaB.replaceAll(" ", "");

    let cadenaCorta;
    let cadenaLarga;

    if (cadenaASinEspacios.length < cadenaBSinEspacios.length) {
        cadenaCorta = cadenaA;
        cadenaLarga = cadenaB;
    } else if (cadenaBSinEspacios.length < cadenaASinEspacios.length) {
        cadenaCorta = cadenaB;
        cadenaLarga = cadenaA;
    } else {
        cadenaCorta = cadenaA;
        cadenaLarga = cadenaB;
    }

    let resultado = cadenaCorta + cadenaLarga + cadenaCorta;

    let resultadoMayuscula = resultado.toUpperCase();

    let totalCaracteres = resultado.length;

    let mensaje = `
========= COMBINADOR DE CADENAS =========
Primera cadena: ${cadenaA}
Segunda cadena: ${cadenaB}

Resultado: ${resultadoMayuscula}
Cadena más larga: ${cadenaLarga}
Total de caracteres: ${totalCaracteres}
=========================================
`;

    console.log(mensaje);
    alert(mensaje);
}