// Caso 2: El Conversor de Divisas para E-Commerce
const preciosSol = [50, 120, 340, 90, 1500];
const tipoCambio = 3.75;

const preciosDolares = preciosSol.map((precio) => {
    let precioConvertido = precio / tipoCambio;
    return Number(precioConvertido.toFixed(2));
});

console.log("Precio en soles:", preciosSol);
console.log("Precio en dolares:", preciosDolares);

alert("Conversion realizada correctamente. Revisar la consola.");