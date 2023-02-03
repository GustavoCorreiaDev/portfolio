$(document).ready(function(){

    $('#i-menu').click(function(){
        $(this).toggleClass('fa-rectangle-xmark');
        $('header').toggleClass('toggle')
    });

    $(window).on('scroll load',function(){

        $('#i-menu').removeClass('fa-rectangle-xmark');
        $('header').removeClass('toggle')

    })
})