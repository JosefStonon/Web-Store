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

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     

     /*
      * Manipulação de eventos
      
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
    

     $('.featured-item:nth(1)')
         .hide(2000, function(){
        console.log( $(this).find('h4').text() + ' esgotado')
     })
         .show(2000, function(){
      console.log( $(this).find('h4').text() + ' em estoque')
   })
    */

   $('.nav-modal-open').on('click', function(e){
      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())


      let myModal = new bootstrap.Modal($('#modelId'))

       myModal.show()
   })

   function validade( elem ){
      if(elem.val()== '') {

         console.log('o campo de  '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }


   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputname = $('#nome')
      const inputemail = $('#email')

      validade(inputname)
      validade(inputemail)

      if(inputname.hasClass('invalid') || inputemail.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
         
      } else {
         $(this).submit()
      }

   })

      

 

     $('body').on('blur', '#nome', function(){
      validade($(this))
     
      })

      $('body').on('blur', '#email', function(){
         validade($(this))
       
     })


     $('body').on('blur', '#date', function(){
      validade($(this))
      $('#date').mask('00/00/0000');
    
  })

      $('body').on('blur', '#time', function(){
         validade($(this))
         $('#time').mask('00:00');
      
      })

      $('body').on('blur', '#cep', function(){
         validade($(this))
         $('#cep').mask('00000-000');
      
      })

      $('body').on('blur', '#phone', function(){
         validade($(this))
         $('#phone').mask('00000-0000');
      
      })

      $('body').on('blur', '#cpf', function(){
         validade($(this))
         $('#cpf').mask('000.000.000-00');
      
      })
     


      
     
     
   
   })

     
     
       
     








