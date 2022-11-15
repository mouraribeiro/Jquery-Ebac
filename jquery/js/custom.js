// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());


  
  

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-success">Novo</span>')
    $('.featured-item:first span').css('marginLeft', '10px')
   
     $('.featured-item:eq(1)  ').append('<span class="badge bg-warning">Ultimas peças</span>')
     $('.featured-item:eq(1) span ').css('padding','10px')
     $('.featured-item h4 ').css('padding', '10px')
     $('.featured-item h6 ').css('padding', '10px')
     $('.featured-item:eq(1) span ').css('marginLeft', '30px')


     setInterval(function(){
      $('.featured-item:eq(1) span ').animate({opacity: 'toggle'})
     },1000)
    
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '200',
        });

     });


     $('.featured-item:eq(2) a').html('<span class="badge ">Indisponível</span>').removeClass('btn-dark').addClass('btn-danger');
     /*
      * Manipulação de eventos
      */
    

     $('.featured-item:eq(2) a').on('blur', function(event){

        event.preventDefault();       

        alert('Produto esgotado');

       

     })
     
     
     
     







})
