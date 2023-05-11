

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
        theme.attr("href", "estilos/rojo.css");
    });
    $('#cambiarVerde').click(function(){
        theme.attr("href", "estilos/verde.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //LocalStorage para el formulario login falso
    $('#login form').submit(function(){
       let name = $('#name').val();
        localStorage.setItem('form_name', name);
    

    });

    var name = localStorage.getItem('form_name');
    console.log(name);
    if(name != null & name!=''){
        var parrafo = $('.post h4');
        parrafo.html('<strong>Encantado, '+name+' yo soy...</strong><a href="#" id="logout">Cerrar sesion</a>');

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });

        
    }else {
        $('.post h4').html('(Inicia sesión para cargar saludo...)');
    }



    
    
});