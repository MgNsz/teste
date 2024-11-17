// Selecionando os elementos
const avisoInput = document.getElementById('aviso-input');
const adicionarAvisoBtn = document.getElementById('adicionar-aviso');
const avisosContainer = document.querySelector('.avisos');

// Função para adicionar o aviso ao quadro
adicionarAvisoBtn.addEventListener('click', () => {
    const avisoTexto = avisoInput.value.trim();

    // Verifica se o campo não está vazio
    if (avisoTexto) {
        const novoAviso = document.createElement('div');
        novoAviso.classList.add('aviso');
        novoAviso.textContent = avisoTexto;

        // Adiciona o aviso ao container de avisos
        avisosContainer.appendChild(novoAviso);

        // Limpa o campo de input após adicionar o aviso
        avisoInput.value = '';
    } else {
        alert('Por favor, digite um aviso!');
    }
});
