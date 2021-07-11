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

const txtInscripcion = [["Redes sociales en el deporte", "5 Clases", "USD 50" ], ["Marketing Deportivo", "5 Clases", "USD $50"], ["E-Sports", "5 Clases", "USD $50"], ["Nombre Curso 4", "5 Clases", "USD $50"], ["Nombre Curso 5", "5 Clases", "USD $50"], ["Nombre Curso 6", "5 Clases", "USD $50"]
                    ]

function manejadorCompra(evento) {
    //determino el id del seleccionado
    let id = evento.target.id;
    console.log(id);

    $.ajax('inscripcion.html')
    .done(function (response) {
        $(".sectionCompra").html(response);
        $("#modulo").text("0"+id)
        $("#txtTituloCurso").text(txtInscripcion[(id - 1)][0])
        $("#txtNumClases").text(txtInscripcion[(id - 1)][1])
        $("#precio").text(txtInscripcion[(id - 1)][2])
        $(".section__inscripcion").addClass("estilo"+id);
    });
};
