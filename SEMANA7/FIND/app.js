const edades = [12,15,22,20];

const resultado = edades.find(e => e > 18);
console.log(resultado); // 22


//EJEMPLO2

const ususarios = [

    {id:1, nombre: "Dennys"},
    {id:2, nombre: "Alberto"},
    {id:3, nombre: "Lucy"},
    {id:4, nombre: "Franck"}
];

const usuario = ususario.find(u => u.id === 2);
console.log(usuario); // {id:2, nombre: "Alberto"}