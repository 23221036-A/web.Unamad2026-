// Caso 5: El Procesador Metrico de Telemetria

const sensores = [
    { id: "S-01", zona: "Norte", estado: "OK", temperatura: 24.5 },
    { id: "S-02", zona: "Sur", estado: "OK", temperatura: 27.1 },
    { id: "S-03", zona: "Norte", estado: "ERROR", temperatura: null },
    { id: "S-04", zona: "Norte", estado: "OK", temperatura: 26.3 },
    { id: "S-05", zona: "Este", estado: "OK", temperatura: 28.4 },
    { id: "S-06", zona: "Norte", estado: "OK", temperatura: 25.2 }
];

const sensoresFiltrados = sensores.filter((sensor) => {
    return sensor.zona === "Norte" &&
           sensor.estado === "OK" &&
           sensor.temperatura !== null;
});

const sumaTemperaturas = sensoresFiltrados.reduce((suma, sensor) => {
    return suma + sensor.temperatura;
}, 0);

const promedioTemperatura = sumaTemperaturas / sensoresFiltrados.length;

const reporteFinal = {
    zonaEvaluada: "Norte",
    promedio: promedioTemperatura,
    generadoEn: 2026
};

const reporteJSON = JSON.stringify(reporteFinal, null, 2);

// Mostrar resultados
console.log("Sensores originales:");
console.log(sensores);

console.log("Sensores filtrados:");
console.log(sensoresFiltrados);

console.log("Reporte final en formato JSON:");
console.log(reporteJSON);

alert("Reporte generado correctamente. Revisa la consola.");