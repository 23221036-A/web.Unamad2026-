let cosumoTexto = prompt("Ingrese el monto total de consumo");
let amigosTexto = prompt("Ingrese la cantidad de amigos");
let propinaTexto = prompt("Ingrese el porcentaje de propina");

consumoTexto = cosumoTexto.trim();
amigosTexto = amigosTexto.trim();
propinaTexto = propinaTexto.trim(); 

let consumo = Number(consumoTexto);
let amigos = Number(amigosTexto);
let porcentajePropina = Number(propinaTexto);

if (consumoTexto === "") {
    console.log("Error: El monto de consumo no puede estar vacío.");
    alert("Error: El monto de consumo no puede estar vacio.");
} else if (isNaN(consumo)) {
    console.log("Error: El monto de consumo debe ser un numero valido.");
    alert("Error: El monto de consumo debe ser un numero valido.");
} else if (consumo <= 0) {
    console.log("Error: El monto de consumo debe ser mayor a 0.");
    alert("Error: El monto de consumo debe ser mayor a 0.");
} else if (amigosTexto === "") {
    console.log("Error: La cantidad de amigos no puede estar vacía.");
    alert("Error: La cantidad de amigos no puede estar vacia.");
} else if (isNaN(amigos)) {
    console.log("Error: La cantidad de amigos debe ser un numero valido.");
    alert("Error: La cantidad de amigos debe ser un numero valido.");
} else if (!Number.isInteger(amigos)) {
    console.log("Error: La cantidad de amigos debe ser un numero entero.");
    alert("Error: La cantidad de amigos debe ser un numero entero.");
} else if (amigos <= 0) {
    console.log("Error: La cantidad de amigos debe ser mayor a cero.");
    alert("Error: La cantidad de amigos debe ser mayor a cero.");
} else if (propinaTexto === "") {
    console.log("Error: El porcentaje de propina no puede estar vacio.");
    alert("Error: El porcentaje de propina no puede estar vacio.");
} else if (isNaN(porcentajePropina)) {
    console.log("Error: El porcentaje de propina debe ser un numero valido.");
    alert("Error: El porcentaje de propina debe ser un numero valido.");
} else if (porcentajePropina < 0) {
    console.log("Error: El porcentaje de propina no puede ser negativo.");
    alert("Error: El porcentaje de propina no puede ser negativo.");
} else 

{
    let propina = consumo * (porcentajePropina / 100);

    let totalGeneral = consumo + propina;

    let pagoPorPersona = totalGeneral / amigos;

    let nivelGasto;

    if (pagoPorPersona < 50) {
        nivelGasto = "Poco";
    } else if (pagoPorPersona >= 50 && pagoPorPersona <= 150) {
        nivelGasto = "Moderado";
    } else {
        nivelGasto = "Alto";
    }
    let mensaje = `
========= DIVISIÓN DE GASTOS =========
Total consumo: S/ ${consumo.toFixed(2)}
Propina (${porcentajePropina}%): S/ ${propina.toFixed(2)}
Total general: S/ ${totalGeneral.toFixed(2)}
Cantidad de amigos: ${amigos}

Cada amigo debe pagar: S/ ${pagoPorPersona.toFixed(2)}
Nivel de gasto: ${nivelGasto}
=====================================
`;

    console.log(mensaje);
    alert(mensaje);
}