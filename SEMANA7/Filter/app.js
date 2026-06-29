//Ejemplo1

const edades = [15,18,20,12];
const mayores = edades.filter(e => e >= 18);
console.log(mayores);

//Ejemplo2
const productos = [
    {nombre: "Laptop", stock: 12},
    {nombre: "Mouse", stock: 0},
    {nombre: "Mouse", stock: 2},
]

const disponibles = productos.filter(p => p.stock > 0);
console.log(disponibles);

//Ejemplo3


let Products = [
    {nombre: "Iphone 20", precio: 4500},
    {nombre: "Samsung Galaxi S45", precio: 3800},
    {nombre: "Macbook Pro 2027", precio: 7500},
    {nombre:"PlayStation", precio: 1500},
    {nombre: "Xbox Serie Xa", precio: 2000},
    {nombre: "Canon EOS RS", precio:4200},
    {nombre: "Sony A14 V", precio: 1200},
    {nombre: "DJI Mavic Air 2", precio: 800},
    {nombre: "Samsung QLED Q90T", precio: 420}
]

let prodPrecioFilter = Products.filter((preProd) =>{
    return preProd.precio > 500;
})

console.log("Los precios mayores son: ", prodPrecioFilter);