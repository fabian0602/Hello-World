const TIEMPO_COCCION_ESTANDAR = 40;
const TIEMPO_POR_CAPA = 2;

function calcularTiempos() {
    const capas = parseInt(document.getElementById('capas').value);
    const tiempoHorno = parseInt(document.getElementById('tiempoHorno').value);

    if (isNaN(capas) || isNaN(tiempoHorno) || capas < 1 || tiempoHorno < 0) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return;
    }

    const tiempoRestante = Math.max(0, TIEMPO_COCCION_ESTANDAR - tiempoHorno);
    const tiempoPreparacion = capas * TIEMPO_POR_CAPA;
    const tiempoTotal = tiempoHorno + tiempoPreparacion;

    document.getElementById('tiempoRestante').textContent = `Tiempo restante en el horno: ${tiempoRestante} minutos`;
    document.getElementById('tiempoPreparacion').textContent = `Tiempo total de preparación: ${tiempoPreparacion} minutos`;
    document.getElementById('tiempoTotal').textContent = `Tiempo total de trabajo: ${tiempoTotal} minutos`;

    document.getElementById('resultados').style.display = 'block';
}