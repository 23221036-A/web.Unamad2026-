// Ejercicio 3: Sistema de facturación con IGV y descuentos

let cliente = prompt("Ingrese el nombre del cliente:");
let precioTexto = prompt("Ingrese el precio del producto:");
let cantidadTexto = prompt("Ingrese la cantidad de productos:");

cliente = cliente.trim();
precioTexto = precioTexto.trim();
cantidadTexto = cantidadTexto.trim();

let precio = Number(precioTexto);
let cantidad = Number(cantidadTexto);

//IGV
const IGV = 0.18;

if (cliente === "") {
    console.log("Error: El nombre del cliente no puede estar vacio.");
    alert("Error: El nombre del cliente no puede estar vacio.");
} else if (precioTexto === "") {
    console.log("Error: El precio no puede estar vacio.");
    alert("Error: El precio no puede estar vacio.");
} else if (isNaN(precio)) {
    console.log("Error: El precio debe ser un numero valido.");
    alert("Error: El precio debe ser un numero valido.");
} else if (precio <= 0) {
    console.log("Error: El precio debe ser mayor a 0.");
    alert("Error: El precio debe ser mayor a 0.");
} else if (cantidadTexto === "") {
    console.log("Error: La cantidad no puede estar vacia.");
    alert("Error: La cantidad no puede estar vacia.");
} else if (isNaN(cantidad)) {
    console.log("Error: La cantidad debe ser un numero valido.");
    alert("Error: La cantidad debe ser un numero valido.");
} else if (!Number.isInteger(cantidad)) {
    console.log("Error: La cantidad debe ser un numero entero.");
    alert("Error: La cantidad debe ser un numero entero.");
} else if (cantidad <= 0) {
    console.log("Error: La cantidad debe ser mayor a 0.");
    alert("Error: La cantidad debe ser mayor a 0.");
} else {

    let subtotal = precio * cantidad;

    let porcentajeDescuento;

    if (subtotal > 1000) {
        porcentajeDescuento = 0.10;
    } else if (subtotal > 500) {
        porcentajeDescuento = 0.05;
    } else {
        porcentajeDescuento = 0;
    }

    let descuento = subtotal * porcentajeDescuento;

    let montoConDescuento = subtotal - descuento;
    let igv = montoConDescuento * IGV;

    let totalFinal = montoConDescuento + igv;

    let factura = `
========= FACTURA =========
Cliente: ${cliente}
Precio del producto: S/ ${precio.toFixed(2)}
Cantidad: ${cantidad}

Subtotal: S/ ${subtotal.toFixed(2)}
Descuento aplicado: S/ ${descuento.toFixed(2)}
IGV 18%: S/ ${igv.toFixed(2)}
Total final: S/ ${totalFinal.toFixed(2)}
===========================
`;

    console.log(factura);
    alert(factura);
}