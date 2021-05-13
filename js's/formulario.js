
var usuario = {
    nombre : "Bruno",
    Apellido : "Previotto",
    nombreCuenta: "BrunoPreviotto",
    contraseña: 123
};

var noticias = ["no1", "not2"];

function validarFormulario(){
    
    if(document.getElementById('nombre').value == usuario.nombre &&
        document.getElementById('apellido').value == usuario.Apellido &&
        parseInt(document.getElementById('contrasena').value) == usuario.contraseña){
           document.getElementById('ingresar').innerHTML = usuario.nombreCuenta;
           document.getElementById('bienvenida').innerHTML = "<div><h1>Bienvenido</h1></div>" + usuario.nombreCuenta;
    }
}

function mostrarNoticia1(){
    document.getElementById('noticia1').style.display = "block"; 
}

function ocultarNoticia1(){
    document.getElementById('noticia1').style.display = "none";
}

function mostrarNoticia2(){
    document.getElementById('noticia2').style.display = "block"; 
}

function ocultarNoticia2(){
    document.getElementById('noticia2').style.display = "none";
}  