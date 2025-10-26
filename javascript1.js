console.log('Script 1 cargado');

function inicializar() {
    console.log('Aplicación inicializada');
}
function mostrarBienvenida() {
    console.log('Bienvenido al Proyecto Final 2');
    console.log('Grupo: JVBTS');
}

// Función para obtener información del proyecto
function obtenerInfoProyecto() {
    return {
        nombre: 'Avance Proyecto Final 2',
        grupo: 'JVBTS',
        version: '1.0'
    };
}

// Ejecutar al cargar
mostrarBienvenida();