// ==========================================================================
// EJERCICIO Nº 1: VALIDACIÓN DE FECHA DE NACIMIENTO
// ==========================================================================
function validarFechaNacimiento() {
    let inputFecha = document.getElementById("fecha_nacimiento");
    if (!inputFecha) return true;

    let fechaIngresada = new Date(inputFecha.value);
    let fechaActual = new Date();

    fechaActual.setHours(0, 0, 0, 0); // Limpiamos horas para comparar solo fechas

    if (fechaIngresada > fechaActual) {
        alert("La fecha de nacimiento no puede ser posterior a la fecha actual");
        return false; // Validación fallida
    }
    return true; // Validación exitosa
}

// ==========================================================================
// EJERCICIO Nº 2: VALIDACIÓN DE DNI DE 8 DÍGITOS
// ==========================================================================
function validarDNI() {
    let inputDni = document.getElementById("dni");
    if (!inputDni) return true;

    let valorDni = inputDni.value.trim();

    // Comprobamos que tenga exactamente 8 caracteres y que sea numérico
    if (valorDni.length !== 8 || isNaN(valorDni)) {
        alert("El DNI debe contener 8 dígitos");
        return false; // Validación fallida
    }
    return true; // Validación exitosa
}

// Función controladora que se ejecuta al presionar "Enviar" en el formulario
function validarFormulario(event) {
    let fechaValida = validarFechaNacimiento();
    let dniValido = validarDNI();

    if (!fechaValida || !dniValido) {
        event.preventDefault(); // Evita que el formulario se envíe con errores
        return false;
    }
    return true;
}

// Vinculamos la validación en tiempo de carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", validarFormulario);
    }
});

// ==========================================================================
// EJERCICIO Nº 5: GENERACIÓN DINÁMICA DE PARTICIPANTES (DOM - CON RADIO BUTTONS)
// ==========================================================================
function generarFormulariosParticipantes() {
    let inputCantidad = document.getElementById("cantidadParticipantes");
    let contenedor = document.getElementById("contenedorParticipantes");

    if (!inputCantidad || !contenedor) return;

    let cantidad = parseInt(inputCantidad.value);

    // Validación de rango (entre 1 y 10)
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        alert("Por favor, ingrese una cantidad válida entre 1 y 10.");
        return;
    }

    // Limpiamos el contenedor
    contenedor.innerHTML = "";

    // Bucle para construir dinámicamente el HTML de cada participante
    for (let i = 1; i <= cantidad; i++) {
        let fieldset = document.createElement("fieldset");
        fieldset.style.marginTop = "15px";
        fieldset.style.padding = "15px";
        fieldset.style.border = "1px solid #702342";
        fieldset.style.borderRadius = "5px";

        let legend = document.createElement("legend");
        legend.appendChild(document.createTextNode(`Participante ${i}`));
        fieldset.appendChild(legend);

        // 1. Campo: Apellido y Nombre
        let divNombre = document.createElement("div");
        divNombre.className = "grupo-control";
        let labelNombre = document.createElement("label");
        labelNombre.appendChild(document.createTextNode("Apellido y Nombre:"));
        let inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.name = `nombre_${i}`;
        inputNombre.required = true;
        divNombre.appendChild(labelNombre);
        divNombre.appendChild(inputNombre);
        fieldset.appendChild(divNombre);

        // 2. Campo: DNI (Clase identificadora para validar en lote)
        let divDni = document.createElement("div");
        divDni.className = "grupo-control";
        let labelDni = document.createElement("label");
        labelDni.appendChild(document.createTextNode("DNI (8 dígitos):"));
        let inputDni = document.createElement("input");
        inputDni.type = "text";
        inputDni.name = `dni_${i}`;
        inputDni.className = "dni-dinamico";
        inputDni.required = true;
        divDni.appendChild(labelDni);
        divDni.appendChild(inputDni);
        fieldset.appendChild(divDni);

        // 3. Campo: Fecha de Nacimiento (Clase identificadora para lote)
        let divFecha = document.createElement("div");
        divFecha.className = "grupo-control";
        let labelFecha = document.createElement("label");
        labelFecha.appendChild(document.createTextNode("Fecha de nacimiento:"));
        let inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.name = `fecha_${i}`;
        inputFecha.className = "fecha-dinamica";
        inputFecha.required = true;
        divFecha.appendChild(labelFecha);
        divFecha.appendChild(inputFecha);
        fieldset.appendChild(divFecha);

        // ==================================================================
        // 4. Campo: Sexo (BOTONES DE OPCIÓN REDONDITOS)
        // ==================================================================
        let divSexo = document.createElement("div");
        divSexo.className = "grupo-control";

        let labelSexoPrincipal = document.createElement("label");
        labelSexoPrincipal.appendChild(document.createTextNode("Sexo:"));
        divSexo.appendChild(labelSexoPrincipal);

        // Contenedor para alinear los botoncitos horizontalmente
        let divOpciones = document.createElement("div");
        divOpciones.className = "opciones-inline";
        divOpciones.style.marginTop = "5px";

        // Opción Femenino
        let labelF = document.createElement("label");
        labelF.style.marginRight = "15px";
        let radioF = document.createElement("input");
        radioF.type = "radio";
        radioF.name = `sexo_${i}`; // El 'name' debe ser único POR PARTICIPANTE para agruparlos
        radioF.value = "Femenino";
        radioF.required = true;
        labelF.appendChild(radioF);
        labelF.appendChild(document.createTextNode(" Femenino"));

        // Opción Masculino
        let labelM = document.createElement("label");
        labelM.style.marginRight = "15px";
        let radioM = document.createElement("input");
        radioM.type = "radio";
        radioM.name = `sexo_${i}`;
        radioM.value = "Masculino";
        labelM.appendChild(radioM);
        labelM.appendChild(document.createTextNode(" Masculino"));

        // Opción No binario
        let labelNB = document.createElement("label");
        let radioNB = document.createElement("input");
        radioNB.type = "radio";
        radioNB.name = `sexo_${i}`;
        radioNB.value = "No binario";
        labelNB.appendChild(radioNB);
        labelNB.appendChild(document.createTextNode(" No binario"));

        // Acoplamos los botoncitos al contenedor de opciones
        divOpciones.appendChild(labelF);
        divOpciones.appendChild(labelM);
        divOpciones.appendChild(labelNB);
        divSexo.appendChild(divOpciones);
        fieldset.appendChild(divSexo);

        // 5. Campo: Nivel (Se mantiene como menú desplegable select)
        let divNivel = document.createElement("div");
        divNivel.className = "grupo-control";
        let labelNivel = document.createElement("label");
        labelNivel.appendChild(document.createTextNode("Nivel:"));
        let selectNivel = document.createElement("select");
        selectNivel.name = `nivel_${i}`;
        selectNivel.required = true;

        let niveles = ["Inicial", "Intermedio", "Avanzado"];
        for (let nivel of niveles) {
            let opcNivel = document.createElement("option");
            opcNivel.value = nivel;
            opcNivel.appendChild(document.createTextNode(nivel));
            selectNivel.appendChild(opcNivel);
        }

        divNivel.appendChild(labelNivel);
        divNivel.appendChild(selectNivel);
        fieldset.appendChild(divNivel);

        contenedor.appendChild(fieldset);
    }
}