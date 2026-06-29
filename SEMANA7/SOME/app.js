const numeros = [1,3,5,8];

const existePar = numeros.some(n=>n%2===0);
console.log(existePar);


const alumnos = [
    {nombre: "Juan", aprobado: false},
    {nombre: "Vitor", aprobado:false},
    {nombre: "Tomas", aprobado:true}
];

const existeAprobado = alumnos.some(a=>a.aprobado);
console.log(existeAprobado);