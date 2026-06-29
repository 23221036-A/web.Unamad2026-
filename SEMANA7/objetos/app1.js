
//EJEMPLO 1:
const estudiante ={
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería en Sistemas",

}
console.log(estudiante.nombre); // Juan
console.log(estudiante.edad); // 20

//EJEMPLO :2
const producto = {
    nombre: "Laptop",
    precio: 2500
}

//ANTES
console.log(producto); // 2500
producto.precio = 2000; 
console.log(producto.precio); 


//EJEMPLO3

const persona = {
    nombre: "Maria",

    saludar (){
        return `Hola soy ${this.nombre}`;
    }
};

console.log(persona.saludar());

//EJEMPLO4

const cuentaBancaria = {
    titular: "Zoila Ruiz",
    saldo: 1500,

    depositar(monto){
        this.saldo += monto;
        return `Deposito exitosos. Nuevo saldo S/. ${this.saldo}`;
    },

    retirar(monto){
        if (monto > this.saldo){
            return "Fondos insuficientes";
        }
        this.saldo -= monto;
        return `Retiro exitoso. Saldo restante S/. ${this.saldo}`;
    }
}

console.log(cuentaBancaria.depositar(1000)); 
console.log(cuentaBancaria.retirar(500));


//DESECCTURCTURACION DE OBJETOS

const persona1 ={
    nombre: "Ana",
    edad: 22

}

//ANTES
console.log(persona1);
const {nombre, edad} = persona1;

//DESPUES
console.log(`El nombre es: ${nombre}`);
console.log(`La edad es: ${edad}`);

//EJEMPLO 2
//RENOMBRANO VARIABLES

const usuario = {
    nombre2: "Arthur",
    correo: "23221036@unamad.edu.pe"

}

const {
    nombre2: nombreUsuario,
    correo: email 
} = usuario;

console.log(nombreUsuario);
console.log(email); 


//EJEMPLO 3 

const factura = {
    id: "FAC-482",
    cliente1: {
        datosPersonales: {nombre: "Carlos", RUC: "123124353"},
        direccion: "Av. Universitaria 743"
    },

    items: [{producto: "Laptop", precio: 1200}]
};

//DESESTRUCTURACION PROFUNDA EN LOS ARGUMENTOS DE UNA FUNCION
function procesarEnvio({cliente1: {datosPersonales: {nombreCliente1}, direccion}}) 
{ return `Preparando envio para ${nombreCliente1} ala direccion ${direccion}`
    }

    console.log(procesarEnvio(factura));

//SPREAT OPERATOR
const frutas = ["manzana", "plarano"];
const citricos = ["Limon", "naranja"];

const totalFrutas = [
    ...frutas,
    ...citricos, "fresa"
];

console.log(totalFrutas);

// EJEMPLO 2
const estadoOriginal = {
    ususaio: "Alberto",
    autentiacion: false,
    tema: "oscuro"
};


//CAMBIAMOS EL ESTADO DE FORMAS INMUTABLES
const nuevoEstado = {
    ...estadoOriginal,
    autenticacion: true,
    ultimoAcceso: new Date()
};

console.log("Original", estadoOriginal);
console.log("Modificado", nuevoEstado);


//ASINTRONIAS
//CALLBACKS

function consultarBaseDatos (id, callback){
    setTimeout(() => {
        const usuario = {id, nombre: "Julio"};
        callback(usuario);
    },3000);
}

consultarBaseDatos(5,(Datos) => {
    console.log(`Usuario cargado: ${Datos.nombre}`);}
);


//EJEMLPLO 2 

function consultarBaseDatos1(query, callback){
    setTimeout(() => {
        if (query === "" ){
            callback(new Error("query vacia"), null);
        } else {
            callback(null, {id: 1, resultado: "Fila encontrados"});
        }
    },1500);
}

consultarBaseDatos1("", (err, data) => {
    if (err){
        console.error(`Error de DB: ${err.message}`);
        return;
    }
    console.log("Datos obtenidos", data);
});

//PROMESAA
const promesa = new Promise((resolve, reject) => {
    resolve("Operacion exitosa");
});

promesa.then(resultado => {
    console.log(resultado);
});


//EJEMPLO 2

const verificarStockTienda =  (cantidadSolicitada) => {
    return new Promise((resolve, reject) => {
        const stockActual = 10;
        if (cantidadSolicitada <= stockActual){
            resolve("Stock disponible. Procediendo al despacho");
        }else{
            reject("Error: No hay suficiente stock en almacen");
        }
    });
};

verificarStockTienda(5)
.then(respuesta => console.log(respuesta))
.catch(error => console.error(error));
//.finally(() => console.log("Operacion de inventario finalizada"));
//.finally(() => console.log("Operacion de nventario finalizada")); 

//EJEMPLO 1 
const obtenerClima = () => new Promise(res => setTimeout(() => res("Soleado, 25°C"), 1000));

async function mostrarDashboard(){
    console.log("Cargando datos del clima...");
    const clima = await obtenerClima();
    console.log(`El clima acde hoy es: ${clima}`);
}

mostrarDashboard();

