// EVENTOS DE LOS Inputs Y Textarea
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Evento de submit  SE USA EN LOS FORMULARIOS

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    // Validar formulario

    const {nombre, email, mensaje} = datos;
    
    if (nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios", true);

        return; //corta la ejecucion del codigo
    }

    // Crear la otra alerta de enviar formulario
    mostrarAlerta("Mensaje enviado correctamente");
    
});

function leerTexto(e){
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    
    if (error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    setTimeout(() =>{
        alerta.remove();
       }, 5000);
}


