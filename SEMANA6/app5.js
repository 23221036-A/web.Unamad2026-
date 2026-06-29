//suma

let monito = 500;
let cpu = 90;
let memoria = 120;
let precioTotal = monito +cpu + memoria;
console.log(`Precio Total: ${precioTotal}`);

let adicionales = 50 + 10;
console.log("Adicionales: ", adicionales);

//resta
let descuento = 25;
let precioConDscto = precioTotal - descuento;
console.log("Precio con Descuento: ", precioConDscto);

//dividir en cuotas
let cuotas = precioConDscto / 2;
console.log("Precio en Cuotas: ", cuotas);

//multiplicar
let totalPorTres = precioConDscto * 3;
console.log("Precio por Tres: ", totalPorTres);
