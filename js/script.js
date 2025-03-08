$(document).ready(function(){

    // Ação para o menu hambúrguer (abrir/fechar)
    $('#i-menu').click(function(){
        $(this).toggleClass('fa-rectangle-xmark');  // Alterna entre o ícone de hambúrguer e o "X"
        $('header').toggleClass('toggle');  // Adiciona/remover a classe "toggle" para mostrar/ocultar o menu
    });

    // Quando o usuário rolar a página ou carregar a página, o menu é fechado
    $(window).on('scroll load', function(){
        $('#i-menu').removeClass('fa-rectangle-xmark');  // Remove o ícone "X" do menu
        $('header').removeClass('toggle');  // Esconde o menu
    });

    // Rolagem suave para seções ao clicar nos links de navegação
    $('a[href^="#"]').on('click', function(event){
        // Previne o comportamento padrão de navegação
        event.preventDefault();

        var target = $(this).attr('href');  // Pega o destino da âncora (id da seção)

        // Executa a animação de rolagem suave
        $('html, body').animate({
            scrollTop: $(target).offset().top  // Anima a rolagem até o topo do destino
        }, 1000);  // 1000 milissegundos = 1 segundo de rolagem suave

        // Fechar o menu hambúrguer após clicar no link
        if ($('header').hasClass('toggle')) {
            $('#i-menu').removeClass('fa-rectangle-xmark');  // Remove o "X"
            $('header').removeClass('toggle');  // Fecha o menu
        }
    });

});

// Função para enviar o formulário e limpar os campos
function sendAndClearForm() {
    $("#contact-form").find("input[type=text], input[type=email], textarea").val("");  // Limpa os campos

    window.location.href = "mailto:gustavocorreiadev@outlook.com?subject=Contact Form Submission&body=" + 
        "Name: " + $("input[name='name']").val() + "%0D%0A" +
        "Email: " + $("input[name='email']").val() + "%0D%0A" +
        "Project: " + $("input[name='project']").val() + "%0D%0A" +
        "Message: " + $("textarea[name='message']").val();
}
