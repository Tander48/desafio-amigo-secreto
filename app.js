let participantes = [];

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function adicionarParticipante() {
    const input = document.querySelector('.container__input');
    const nome = input.value.trim();
    
    if (nome === '') {
        exibirTextoNaTela('.texto__paragrafo', 'Por favor, insira um nome válido.');
        return;
    }
    
    if (participantes.includes(nome)) {
        exibirTextoNaTela('.texto__paragrafo', 'Este nome já foi adicionado.');
        return;
    }
    
    participantes.push(nome);
    exibirTextoNaTela('.texto__paragrafo', `${nome} foi adicionado com sucesso!`);
    input.value = '';
    atualizarListaParticipantes();
}

function sortearPares() {
    if (participantes.length < 2) {
        exibirTextoNaTela('.texto__paragrafo', 'Adicione pelo menos 2 participantes.');
        return;
    }
    
    // Seleciona um participante aleatório
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const sorteado = participantes[indiceSorteado];
    
    // Mostra a imagem do presente e animação
    const presente = document.querySelector('.container__presente');
    presente.style.display = 'block';
    
    // Exibe o resultado após a animação
    setTimeout(() => {
        exibirTextoNaTela('.texto__paragrafo', `${sorteado} é o amigo secreto!!!`);
        // Esconde o presente após 2 segundos
        setTimeout(() => {
            presente.style.display = 'none';
        }, 2000);
    }, 1000);
}


function atualizarListaParticipantes() {
    const lista = participantes.map(nome => `• ${nome}`).join('<br>');
    exibirTextoNaTela('.container__lista', lista);
}

// Configuração dos botões
document.querySelector('.adicionar').addEventListener('click', adicionarParticipante);
document.querySelector('.sortear').addEventListener('click', sortearPares);

// Inicialização
exibirTextoNaTela('h1', 'Amigo Secreto');
exibirTextoNaTela('.texto__paragrafo', 'Adicione os participantes para começar!');
