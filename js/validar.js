function validar(){
    
    var nombre, apellidos, correo, clave, clave_conf;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;
    user = document.getElementById("user").value;
    clave_conf = document.getElementById("clave_conf").value;

    if(nombre === "" || apellidos==="" || user==="" || clave===""){
        alert("Favor de rellenar todos los campos");
        return  false;
    }
    else if(nombre.length>100){
        alert("Nombre es demasiado largo");
        return false;
    }
    else if(apellidos.length>100){
        alert("Apellido es demasiado largo Maximo 10 Caracteres");
        return false;
    }
    else if(user.length>20){
        alert("Usuario es demasiado largo Maximo 20 Caracteres");
        return false;
    }
    else if(correo.length>100){
        alert("Correo es demasiado largo Maximo 10 Caracteres");
        return false;
    }
    else if(clave.length>10){
        alert("Apellido es demasiado largo Maximo 10 Caracteres");
        return false;
    }
    else if(clave!=clave_conf){
        alert("Las contraseñas no coinciden, favor de verificar");
    }
}

