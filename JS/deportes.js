// ==========================================================================
// EJERCICIO Nº 3: GESTIÓN DE ACTIVIDADES DEPORTIVAS (POO)
// ==========================================================================

// Función constructora para actividades
function Actividad(nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

// Clase administradora en ES6
class SistemaDeportes {
    constructor() {
        this.actividades = [];
    }

    agregarActividad(actividad) {
        this.actividades.push(actividad);
    }

    listarActividades() {
        return this.actividades;
    }
}

// Inicialización del sistema con los 4 deportes mínimos solicitados
const sistema = new SistemaDeportes();
sistema.agregarActividad(new Actividad("Fútbol", "Cancha general", "Miércoles", "19:00 hs", 20, "disponible"));
sistema.agregarActividad(new Actividad("Básquet", "Cancha Techada", "Martes", "17:00 hs", 15, "disponible"));
sistema.agregarActividad(new Actividad("Vóley", "Cancha Techada", "Viernes", "18:00 hs", 0, "completo"));
sistema.agregarActividad(new Actividad("Atletismo", "Pista de Atletismo", "Sábado", "09:00 hs", 25, "disponible"));

// ==========================================================================
// EJERCICIO Nº 4: MOSTRAR ACTIVIDADES EN TABLA DINÁMICA (DOM)
// ==========================================================================
function renderizarTablaActividades() {
    let tbody = document.getElementById("cuerpoTabla");
    if (!tbody) return;

    tbody.innerHTML = ""; // Limpiamos la tabla

    let lista = sistema.listarActividades();

    for (let actividad of lista) {
        let fila = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.appendChild(document.createTextNode(actividad.nombre));

        let tdLugar = document.createElement("td");
        tdLugar.appendChild(document.createTextNode(actividad.lugar));

        let tdDia = document.createElement("td");
        tdDia.appendChild(document.createTextNode(actividad.dia));

        let tdHorario = document.createElement("td");
        tdHorario.appendChild(document.createTextNode(actividad.horario));

        let tdCupos = document.createElement("td");
        tdCupos.appendChild(document.createTextNode(actividad.cupo));

        let tdEstado = document.createElement("td");
        tdEstado.appendChild(document.createTextNode(actividad.estado));

        fila.appendChild(tdNombre);
        fila.appendChild(tdLugar);
        fila.appendChild(tdDia);
        fila.appendChild(tdHorario);
        fila.appendChild(tdCupos);
        fila.appendChild(tdEstado);

        tbody.appendChild(fila);
    }
}

document.addEventListener("DOMContentLoaded", renderizarTablaActividades);