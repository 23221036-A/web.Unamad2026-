const numeros = [2,4,6,8,10];

const suma = numeros.reduce((acum,n)
=> acum + n, 0);

console.log(suma); // 30

const venntas = [100,200,300];
const total = ventas.reduce((acc, v)
=> acc + v, 0);

console.log(total);


let producst = [
    {nombre: "Iphone 20", precio: 4500},
    {nombre: "Samsung Galaxy S45", precio: 3800},
    {nombre: "MacBook Pro 2027", precio: 7500},
    {nombre: "PlayStation", precio: 1500},
    {nombre: "Xbox Series Xa", precio: 850},
    {nombre: "Canon EOS R45", precio:4200},
    {nombre: "Sony A14 V", precio: 1200},
    {nombre: "SJI Mavic Air 2", precio: 800},
    {nombre: "Samsung QLED Q90T",precio: 2350},
    {nombre: "Bose QuitConfort", precio: 420}
]

//SUMA
let prodPrecioSuma = producst.reduce((suma, preProd) => {
    return suma + preProd.precio;
},0)
console.log(prodPrecioSuma);

//PROMEDIO
let prodPrecioPromedio = producst.reduce((suma,preProd) =>
    {
        return suma + preProd.precio /  producst.length;

},0)
console.log(prodPrecioPromedio);
