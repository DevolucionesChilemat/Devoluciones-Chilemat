
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, textarea');

const expresiones = {
	texto: /^.{1,50}$/,
	numero: /^\d{1,8}$/
}

const campos = {
    nombre: false,
    detalle: false,
    dim: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre de cliente":
            validarCampo(expresiones.texto, e.target, 'nombre');
            break;
        case "Num del documento de despacho":
            validarCampo(expresiones.numero, e.target, 'dim');
            break;
        case "Detalle":
            validarCampo(expresiones.texto, e.target, 'detalle');
            break;
        default:
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
        document.querySelector('#formulario_'+campo+' .input-error')
        .classList.remove('input-error-activo');
        campos[campo] = true;
    } else {
        document.querySelector('#formulario_'+campo+' .input-error')
        .classList.add('input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    if (campos.nombre && campos.detalle && campos.num) {
        formulario.reset();  
    } else {
        document.querySelector('#formulario_aviso .error-envio')
        .classList.add('error-envio-activo');
    }
});