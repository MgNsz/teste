// Função para adicionar avisos ao quadro
const avisoInput = document.getElementById('aviso-input');
const adicionarAvisoBtn = document.getElementById('adicionar-aviso');
const avisosContainer = document.querySelector('.avisos');

// Função para buscar placas
const placaInput = document.getElementById('placa-input');
const buscarPlacaBtn = document.getElementById('buscar-placa');
const resultadoDiv = document.getElementById('resultado');

// Dados de exemplo (poderiam vir de um banco de dados ou arquivo)
const placas = [
    { placa: 'BOI2416', cliente: 'TATIANA DA SILVA PINTO', plataforma: 'LocalGPS', empresa: 'GPS TRAINING' },
    { placa: 'OTO6541', cliente: 'MASTER EXPRESS', plataforma: 'LocalGPS', empresa: 'LocalGPS' },
    { placa: 'JHO3272', cliente: 'JOSITA DA CUNHA', plataforma: 'LocalGPS', empresa: 'LocalGPS' },
    { placa: 'JKA3167', cliente: 'DOMINGOS ALVES', plataforma: 'LocalGPS', empresa: 'LocalGPS' },
    // Adicione mais placas aqui
];

// Função para buscar placa e exibir dados
buscarPlacaBtn.addEventListener('click', () => {
    const placaBuscada = placaInput.value.trim().toUpperCase();
    const placaEncontrada = placas.find(placa => placa.placa === placaBuscada);
    
    if (placaEncontrada) {
        resultadoDiv.innerHTML = `
            <p><strong>Placa:</strong> ${placaEncontrada.placa}</p>
            <p><strong>Cliente:</strong> ${placaEncontrada.cliente}</p>
            <p><strong>Plataforma:</strong> ${placaEncontrada.plataforma}</p>
            <p><strong>Empresa:</strong> ${placaEncontrada.empresa}</p>
        `;
    } else {
        resultadoDiv.innerHTML = '<p>Placa não encontrada!</p>';
    }
});

// Função para adicionar um novo aviso ao quadro
adicionarAvisoBtn.addEventListener('click', () => {
    const avisoTexto = avisoInput.value.trim();

    if (avisoTexto) {
        const novoAviso = document.createElement('div');
        novoAviso.classList.add('aviso');
        novoAviso.textContent = avisoTexto;

        avisosContainer.appendChild(novoAviso);
        avisoInput.value = ''; // Limpar campo após adicionar
    } else {
        alert('Por favor, digite um aviso!');
    }
});
