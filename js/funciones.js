$("#btnCurso1").click(function (e) { 
    e.preventDefault();
   $(".detail-1").toggle();    
});
$("#btnCurso2").click(function (e) { 
    e.preventDefault();
   $(".detail-2").toggle();    
});
$("#btnCurso3").click(function (e) { 
    e.preventDefault();
   $(".detail-3").toggle();    
});
$("#btnCurso4").click(function (e) { 
    e.preventDefault();
   $(".detail-4").toggle();    
});
$("#btnCurso5").click(function (e) { 
    e.preventDefault();
   $(".detail-5").toggle();    
});
$("#btnCurso6").click(function (e) { 
    e.preventDefault();
   $(".detail-6").toggle();    
});

$(".btnCurso").click(function (e) { 
    e.preventDefault();
    $(".detail-1, .detail-2, .detail-3, .detail-4, .detail-5, .detail-6").css("display", "none");
                
    
});

//LOGIN Y REGISTRO
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth>920){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}
anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 920){
        formulario_register.style.display ="none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display ="none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
};

function register(){
    if(window.innerWidth > 920){
        formulario_register.style.display ="block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display ="block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
};