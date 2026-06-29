//EJEMPLO 1
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.json())
// .then(data=> console.log(data));

//EJEMPLO 2

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response=> response.json())
// .then(usuario=> console.log(usuario))


//EJEMPLO 3
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response=> response.json())
// .then(ususario =>{
//   document.getElementById('nombre').textContent = ususario.name;});

//EJEMPLO 4
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=> response.json())
// .then(data=>{console.log(data)})

//EJEMPLO 5

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=> response.json())
// .then(users=>{
//     const lista = document.getElementById('lista');
//     users.forEach(user=>{lista.innerHTML += `<li>${user,name}<li>`;
//     });
// });

//EJEMPLO 7

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=> response.json())
// .then(users => {
//     let tabla = `
//     <table border="1">
//     <tr>
//         <th>ID</th>
//         <thNombre></th>
//         <th>Email</th> 
//     </tr> `;
//     users.forEach(user => {
//         tabla += `
//         <tr>
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//         </tr> `;
//     });

//     tabla += '</table>';
//     document.body.innerHTML += tabla;
// });


//TRY/CATCH 
//EJERCICIO 1 `

// const respuesta = await fetch('https://jsonplaceholder.typicode.com/invalid');
// const data = await respuesta.json();

// async function obtenerData (){
//   try {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/invalid');
//     if(!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
//     const data = await respuesta.json();
//     console.log(data);
//   } catch (error){
//     console.error('No se puedo cargar el rescurso:', error.message);
//   }
// 
// console.log(obtenerData());


//EJEMPLO 2:


// class HttpError extends Error {
//   constructor(status, statusText){
//     super(`HTTP ${status}: ${statusText}`);
//     this.status = status;
//   }
// }

// async function obtenerUsuario(id) {
//   if (typeof id != 'number' || id <= 0){
//     throw new TypeError('ID debe ser un numero positivo');
//   }
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     if(!res.ok)  throw new HttpError(res.status, res.statusText);
//     const data = await res.json();
//     return data; 
//   }catch (error){
//     if (error instanceof HttpError) {
//       console.error(`Error del servidor: ${error.message}`);
//     } else if (error instanceof SyntaxError){
//       console.error(`Respuesta con JSON invalido`);
//     } else {
//       console.error(`Error de red:`, error.message);
//     }
//     throw error; // relanza si queremos que el caller lo maneje
//   }  
// };


// //SEGUNDA FORMA DE OBTENER DATOS DEL USUSARIO 
// obtenerUsuario(5).catch.then(usuario => console.log(usuario));


//EJEMPLO 3
// async function fetchConReIntentos(url, maIntentos = 3) {
//   let ultimoError;
//   for(let intento = 1; intento <= maxIntentos; Intento++){
//     try{
//       const respuesta = await fetch(url);
//       if(!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
//       return await respuesta.json();
//     }catch (error){
//       ultimoError = error;
//       if (intento == maIntentos) break;
//       const espera = Math.pow(2, intento) * 1000;
//       console.log(`Intento ${intento} fallo. Reintentando en ${espera/1000}s...`);
//       await new Promise(resolve => setTimeout(resolve, espera));
//     }
    
//   }
//   throw new Error(`Daloo despues de ${maxIntentos} intentos: ${ultimoError.message}`);
// }

// fetchConReIntentos('https://jsonplaceholder.typicode.com/posts/9999', 3)
// .then(console.log)
// .then(console.error); 

//EJERCICIO 4 - EJEMPLO 5 `

// const URL = "https://6a305933a7f8866418d5eedc.mockapi.io/productos";
// async function productos(){
//   try{
//     const respuesta = await fetch(URL);
//     if (!respuesta.ok){
//       throw new Erros(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
//     }

//     try{
//       const productos = await respuesta.json();
//       console.log("Lista de productos obtenidos con exito:", productos );
//       return productos; 
//     }catch(errorJson) {
//       console.error("Error: la respuesta del servidor no es un JSON valido ", errorJson);
//       throw new Error("No se pudo procesar la respuesta del servidor ");
//     }
//   }catch (errorRed) {
//     console.error("Error de red o de solicitud: ", errorRed.message);
//   }
// }

// productos();

async function cargarUsuarios() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!respuesta.ok){
      throw new Error("Error HTT");
    }
    const usuarios = await respuesta.json();
    usuarios.forEach (usuario => {
      document.body.innerHTML +=  
    } );
  }
}
