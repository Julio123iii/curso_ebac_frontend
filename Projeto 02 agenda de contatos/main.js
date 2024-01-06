const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNomeDDD = document.getElementById('nome-ddd');
    const inputNumeroTel = document.getElementById('numero-tel');
    const inputMarcador = document.getElementById('marc');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNomeDDD.value}</td>`;
    linha += `<td>${inputNumeroTel.value}</td>`;
    linha += `<td>${inputMarcador.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNomeDDD.value = '';
    inputNumeroTel.value = '';
}

function atualizarTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}