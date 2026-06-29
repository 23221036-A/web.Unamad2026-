// Ejercicio 2: Analizador avanzado de numeros

let numeroTexto = prompt("Ingrese un numero entero:");

if (numeroTexto.trim() === "") {
    console.log("Error: No ingreso ningun valor.");
    alert("Error: No ingreso ningun valor.");
} else {
    let numero = Number(numeroTexto);

    if (isNaN(numero)) {
        console.log("Error: Debe ingresar un numero valido.");
        alert("Error: Debe ingresar un numero valido.");
    } else {
        if (!Number.isInteger(numero)) {
            console.log("Error: Debe ingresar un numero entero.");
            alert("Error: Debe ingresar un numero entero.");
        } else {
            let signo;
            let paridad;
            let rango;

            if (numero > 0) {
                signo = "positivo";
            } else if (numero < 0) {
                signo = "negativo";
            } else {
                signo = "cero";
            }

            paridad = numero % 2 === 0 ? "par" : "impar";

            if (numero >= 0) {
                if (numero <= 100) {
                    rango = "Bajo";
                } else {
                    if (numero <= 1000) {
                        rango = "Medio";
                    } else {
                        rango = "Alto";
                    }
                }
            } else {
                rango = "Bajo";
            }

            let mensaje = `El numero ${numero} es ${signo}, ${paridad} y pertenece al rango ${rango}.`;

            console.log(mensaje);
            alert(mensaje);
        }
    }
}