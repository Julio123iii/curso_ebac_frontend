$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaAtividade = $('#input-atividade').val();
        const novoItem = $('<li class="li-tabela"></li>');
        const atividadeFeita = false

        $('<img src="./imagens/check_5610944.png" alt="check" class="adicionarConfig">').appendTo(novoItem);
        $(`<p>${enderecoNovaAtividade}</p>`).appendTo(novoItem);
        $(`<img src="./imagens/delete_4041994.png" alt="delete" class="deletarItem">`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#input-atividade').val('');

        $('.deletarItem').click(function () {
            $(novoItem).remove();
        })

        $('.adicionarConfig').click(function () {
            $(".li-tabela").toggleClass("done");
        })
    })
})    
