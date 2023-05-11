$(document).ready(function() {

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1700
        });

    var theme = $("#theme");

    $('#cambiarAzul').click(function(){
    theme.attr("href", "estilos/azul.css");
    });
    $('#cambiarRojo').click(function(){
    theme.attr("href", "estilos/rojo.css");
    });
    $('#cambiarVerde').click(function(){
    theme.attr("href", "estilos/verde.css");
    });

    $('#acordeon').accordion();
});