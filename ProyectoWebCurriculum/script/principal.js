

$(document).ready(function() {

    // Efecto del slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1700
    });

    // Posts
    var posts = [
        {
            title: 'Presentación dinamica con JS y JSON',
            date: new Date(),
            content: '<h2>Ademas también puedes cambiar el tema de la pagina en el recuadro amarillo de la izquierda</h2> <br><p class="textoSobreMi">¡Hola a todos! Mi nombre es Antonio José Sánchez González <strong>(ahora estoy añadiendo esto desde un objeto JSON puedes actualizar la página para ver como cambia la fecha y hora)</strong>'
        },
    ];
    posts.forEach((item, index) =>{
        var post = `
                    <article class="post">
                    <h3>${item.title}</h3>
                    <span id="fecha">${item.date}</span>
                    ${item.content}
                    </article>
        `;

        $('#contenido').append(post);

    });


    var theme = $("#theme");

    $('#cambiarAzul').click(function(){
        theme.attr("href", "estilos/azul.css");
    });
    $('#cambiarRojo').click(function(){
        theme.attr("href", "estilos/Rojo.css");
    });
    $('#cambiarVerde').click(function(){
        theme.attr("href", "estilos/verde.css");
    });

});