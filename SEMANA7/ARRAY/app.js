//EJEMPLO1

const numeros = [4,6,8];
const dobes = numeros.map(n => n*2);
console.log(dobes); // [8,12,16]

//EJEMPLO2

const precios =[50,100,150];
const igv =precios.map(p => p*1.18);
console.log(igv); // [59,118,177]

let storeTechProducts = [
    {nombre: "phone", precio: 4500},
    {nombre: "Samsung", precio: 3800},
    {nombre: "Macbook", precio: 7500},
    {nombre:"PlayStation", precio: 1500},
    {nombre: "Xbox", precio: 2000},
    {nombre: "Canon EOS RS", precio:4200},
    {nombre: "Sony A14 V", precio: 1200},
    {nombre: "DJI Mavic Air 2", precio: 800},
    {nombre: "Samsung QLED Q90T", precio: 420}
]
let prodIncrementadoPrecio = storeTechProducts.map((preProd) =>{
    let precioFinal = prePro.precio = 1.20;
    return precioFinal;
})

console.log("Los precios finales son: ", prodIncrementadoPrecio);