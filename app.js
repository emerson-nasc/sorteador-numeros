function sortear (){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;


    //Verificar se quantidade é maior que o mumeros de intervalo
    let numerosDeIntervalo = (ate - de) + 1;
    if (quantidade > numerosDeIntervalo) {
        //alerta para que o usuário reveja se inseriu os dados corretamente.
        alert (`A quantidade de números que você quer sortear é maior que o mumeros de intervalo entre ${de} e ${ate}.`);
        reiniciar(); 
        return; //Para a execução da função aqui
    }

    if (de >= ate){
        alert ('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!.');
        reiniciar(); 
        return; //Para a execução da função aqui
    }

    //para sortear a quantidade de números selecionado peo usuário
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        //vai sortear um novo número, caso for um número repetido.
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            console.log ('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }
    //Mostra os números sorteados na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alterarStatusBotao();
}

//Função para escolher um número aleatório entre o "De" e o "Até"
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Vai ativar ou desativar botão
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    //Veirifica se está habilitado ou desabilitado
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
//Limpar todos os campos
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

//você observará que está sendo permitido colocar um valor no campo “Do número” maior que o valor informado no campo “Até o número”,
//o que não é recomendável. O ideal é emitir um alerta para que o usuário reveja se inseriu os dados corretamente.

//Colocado novo comentário para testar salvar repositório

