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

//DETECTAR EVENTOS DE COMPRA
let botones = document.getElementsByClassName("btnCompra");
console.log(botones);
for (const boton of botones) {
    boton.onclick = manejadorCompra;
}
//EVENTO AL HACER CLICK A COMPRAR
function manejadorCompra(evento) {
    //determino el id del seleccionado
    let seleccionado = evento.target.id;
    console.log(seleccionado)
    if (seleccionado == 1) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("01")
                $("#txtTituloCurso").text("Redes sociales en el deporte")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo1");

            });
    } else if (seleccionado == 2) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("02")
                $("#txtTituloCurso").text("Marketing Deportivo")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo2");

            });
    } else if (seleccionado == 3) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("03")
                $("#txtTituloCurso").text("Marketing Deportivo")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo3");

            });
    } else if (seleccionado == 4) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("04")
                $("#txtTituloCurso").text("Marketing Deportivo")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo4");

            });
    } else if (seleccionado == 5) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("05")
                $("#txtTituloCurso").text("Marketing Deportivo")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo5");

            });
    } else if (seleccionado == 6) {
        $.ajax('inscripcion.html')
            .done(function (response) {
                $(".sectionCompra").html(response);
                $("#modulo").text("06")
                $("#txtTituloCurso").text("Marketing Deportivo")
                $("#txtNumClases").text("5 Clases")
                $("#precio").text("USD $50")
                $(".section__inscripcion").addClass("estilo6");

            });
    }

};
