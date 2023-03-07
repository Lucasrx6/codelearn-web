// A função a seguir será executada quando o documento for carregado
$(document).ready(function () {
    // Atribui uma função ao evento 'change' do botão de opção de rádio
    $('input[type="radio"]').change(function () {
        // Obtém o valor do botão de opção de rádio selecionado
        var radioValue = $("input[name='opcao']:checked").val();
        // Define o caminho da imagem a ser exibida
        var imagePath = "";
        if (radioValue === "opcao1") {
            imagePath = "img/taguatinga.jpg";
        } else if (radioValue === "opcao2") {
            imagePath = "img/brasilia.jpg";
        } else if (radioValue === "opcao3") {
            imagePath = "img/gama.jpg";
        } else if (radioValue === "opcao4") {
            imagePath = "img/sobradinho.jpg";
        }
        // Atualiza a imagem na área principal da página
        $('#imagem-principal').attr('src', imagePath);
    });
});

  
