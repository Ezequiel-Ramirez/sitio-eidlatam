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



