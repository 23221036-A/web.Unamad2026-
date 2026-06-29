// Caso 3: El Monitor de Alertas de Servidores (Logs)

const servidores = [
    { nodo: "BaseDatos-01", online: true, cargaCPU: 45 },
    { nodo: "WebServer-01", online: false, cargaCPU: 0 },
    { nodo: "AuthAPI-02", online: true, cargaCPU: 88 },
    { nodo: "Storage-03", online: true, cargaCPU: 12 }
];

const servidoresOnline = servidores.filter((servidor) => {
    return servidor.online === true;
});

const servidorAlerta = servidoresOnline.find((servidor) => {
    return servidor.cargaCPU > 80;
});

console.log("Lista completa de servidores:");
console.log(servidores);

console.log("Servidores encendidos:");
console.log(servidoresOnline);

if (servidorAlerta) {
    console.log("Alerta de sobrecalentamiento:");
    console.log(servidorAlerta);

    alert("Alerta: el servidor " + servidorAlerta.nodo + " tiene una carga CPU de " + servidorAlerta.cargaCPU + "%");
} else {
    console.log("No hay servidores con carga CPU mayor a 80%.");
    alert("No hay servidores con alerta de sobrecalentamiento.");
}