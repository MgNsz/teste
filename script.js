
let placas = {
    "BOI2416": {
        cliente: "TATIANA DA SILVA PINTO",
        plataforma: "LocalGPS",
        empresa: "GPS TRAINING"
    },
    "OTO6541": {
        cliente: "MASTER EXPRESS E PRESTADORA DE SERVICOS LTDA",
        plataforma: "LocalGPS",
        empresa: "LocalGPS"
    },
    "OTO6461": {
        cliente: "MASTER EXPRESS E PRESTADORA DE SERVICOS LTDA",
        plataforma: "LocalGPS",
        empresa: "LocalGPS"
    },
    // ... (Adicionar as outras placas conforme seu banco de dados)
};

function buscarPlaca() {
    const input = document.getElementById("placaInput").value.toUpperCase();
    const resultadoDiv = document.getElementById("resultado");

    if (placas[input]) {
        const { cliente, plataforma, empresa } = placas[input];
        resultadoDiv.innerHTML = `
            <div><strong>Placa:</strong> ${input}</div>
            <div><strong>Cliente:</strong> ${cliente}</div>
            <div><strong>Plataforma:</strong> ${plataforma}</div>
            <div><strong>Empresa / Franqueado:</strong> ${empresa}</div>
        `;
    } else {
        resultadoDiv.innerHTML = "<div class='red'>Placa não encontrada.</div>";
    }
}

function adicionarAviso() {
    const avisoInput = document.getElementById("avisoInput").value.trim();
    const quadroAvisos = document.getElementById("quadroAvisos");

    if (avisoInput !== "") {
        const avisoDiv = document.createElement("div");
        avisoDiv.textContent = avisoInput;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove");
        removeButton.onclick = function() {
            removerAviso(avisoDiv);
        };

        avisoDiv.appendChild(removeButton);
        quadroAvisos.appendChild(avisoDiv);
        document.getElementById("avisoInput").value = "";
    } else {
        alert("Digite um aviso para adicionar.");
    }
}

function removerAviso(avisoDiv) {
    avisoDiv.remove();
}
