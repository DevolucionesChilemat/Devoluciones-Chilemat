
/*5 FUNCIONES*/


var validaNombre = function(){
    var nom = document.getElementById("formulario_nombre").value;
    if(nom.length>0){
        return true;
    }else{
        return false;
    }
}

var validarTelefono = function(){
    var tel = document.getElementById("formulario_despacho").value;
    if(tel.length>5){
        return true;
    }else{
        return false;
    }
}

var validarMensaje = function(){
    var men = document.getElementById("formulario_detalle").value;
    if(men.length>3){
        return true;
    }else{
        return false;
    }
}

// validacion de funciones 

var validarFunciones =function(){
    if(validaNombre()==true){
    }else{
        envio="El campo NOMBRE CLIENTE debe ser ingresado";
        return envio;

    }
    if(validarTelefono()==true){
    }else{
        envio="El campo GUÍA DE DESPACHO debe contener al menos 5 dígitos";
        return envio;
    }
    if(validarMensaje()==true){
    }else{
        envio="El campo DETALLE DE DEVOLUCIÓN debe contener como mínimo de información";
        return envio;
    }
    
    if(validaNombre()==true&&validarTelefono()==true&&validarCorreo()==true&&validarMensaje()==true){
        envio="FORMULARIO DE CONSULTA SE HA ENVIADO CON ÉXITO";
        return envio;
    }
}