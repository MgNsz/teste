const dadosPlacas = {
    "BOI2416": {
        cliente: "TATIANA DA SILVA PINTO",
        plataforma: "LocalGPS",
        empresa: "GPS TRAINING",
        tratativa: "NÃO LIGAR APENAS MENSAGEM"
    },
    "OTO6541": {
        cliente: "MASTER EXPRESS E PRESTADORA DE SERVIÇOS LTDA",
        plataforma: "LocalGPS",
        empresa: "LocalGPS",
        tratativa: "LIGAR/ENVIAR MENSAGEM"
    },
    "JHO3272": {
        cliente: "JOSITA DA CUNHA SANTAREM",
        plataforma: "LocalGPS",
        empresa: "LocalGPS",
        tratativa: "LIGAR/ENVIAR MENSAGEM"
    }
    // Adicione mais placas conforme necessário
};

// Função para buscar placa e mostrar informações
function buscarPlaca() {
    const placa = document.getElementById('placaBusca').value.toUpperCase();
    const resultado = dadosPlacas[placa];

    if (resultado) {
        document.getElementById('placaInfo').innerText = placa;
        document.getElementById('clienteInfo').innerText = resultado.cliente;
        document.getElementById('plataformaInfo').innerText = resultado.plataforma;
        document.getElementById('tratativaInfo').innerText = resultado.tratativa;

        if (resultado.tratativa === "NÃO LIGAR APENAS MENSAGEM") {
            document.getElementById('tratativaInfo').style.color = "red";
        } else {
            document.getElementById('tratativaInfo').style.color = "green";
        }
    } else {
        alert("Placa não encontrada.");
    }
}

// Função para adicionar aviso
function adicionarAviso() {
    const novoAviso = document.getElementById('novoAviso').value;

    if (novoAviso) {
        const quadroAvisos = document.getElementById('quadroAvisos');
        const novoAvisoDiv = document.createElement('div');
        novoAvisoDiv.classList.add('aviso');
        novoAvisoDiv.textContent = novoAviso;

        novoAvisoDiv.onclick = function() {
            quadroAvisos.removeChild(novoAvisoDiv);
        };

        quadroAvisos.appendChild(novoAvisoDiv);
        document.getElementById('novoAviso').value = ""; // Limpar o campo de texto após adicionar
    }
}
