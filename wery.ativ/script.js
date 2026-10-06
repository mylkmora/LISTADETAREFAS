const campo = document.getElementById('campoTarefa');
const botao = document.getElementById('botaoAdicionar');
const lista = document.getElementById('lista');

botao.addEventListener('click', adicionar);
campo.addEventListener('keypress', e => e.key === 'Enter' && adicionar());

function adicionar() {
    const texto = campo.value.trim();

    if (texto === '') {
        alert('Digite uma tarefa!');
        campo.focus();
        return;
    }

    const item = document.createElement('li');
    item.innerHTML = `
        <span>${texto}</span>
        <div class="botoes">
            <button class="concluir">Concluir</button>
            <button class="excluir">Excluir</button>
        </div>
    `;

    item.querySelector('.concluir').addEventListener('click', () => {
        item.classList.toggle('concluida');
    });

    item.querySelector('.excluir').addEventListener('click', () => {
        item.remove();
    });

    lista.appendChild(item);
    campo.value = '';
    campo.focus();
}