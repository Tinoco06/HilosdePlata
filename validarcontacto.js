const camposForm = {
    "nombre": null,
    "email": null,
    "telefono": null,
    "mensaje" : null
};


document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    camposForm.nombre = document.getElementById("nombre");
    camposForm.email = document.getElementById("email");
    camposForm.telefono = document.getElementById("telefono");
    camposForm.mensaje = document.getElementById("mensaje");
    console.log("Formulario Cargado", camposForm);
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validarForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }else {
            vaciarCamposFormulario();
            alert("Formulario enviado correctamente, gracias por contactar con Hilos de Plata.");
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validarForm(){
    let errors = [];
    
    if(isEmpty(camposForm.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(camposForm.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(camposForm.telefono.value)){
        errors.push("El campo telefono no es valido");
    }
    if(isEmpty(camposForm.mensaje.value)){
        errors.push("El campo mensaje no puede estar vacio");
    }

    return [ errors, errors.length == 0];
}

function isEmpty(value){
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}


function vaciarCamposFormulario() {
    camposForm.nombre.value = "";
    camposForm.email.value = "";
    camposForm.telefono.value = "";
    camposForm.mensaje.value = "";
}
