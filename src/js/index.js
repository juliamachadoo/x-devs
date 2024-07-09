/*
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartao da lista:
    - passo 1: pegar o elementoHTML da seta avançar
    - passo 2: Identificar o clique do usuário na seta avançar
    - passo 3: fazer aparecero proximo cartao da lista
    - passo 4: buscar o cartao que está selecionado e esconder
    
OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista:
    - passo 1: pegar o elemento HTML da seta voltar
    - passo 2: Identificar o clique do usuário na seta voltar
    - passo 3: fazer aparecer o cartao anterior da lista
    - passo 4: buscar o cartao que está selecionado e esconder*/


//OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartao da lista:
// - passo 1: pegar o elementoHTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//- passo 2: Identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return;
    //- passo 4: buscar o cartao que está //selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")


    //- passo 3: fazer aparecero proximo cartao da lista, colocando a classe 'selecionado' nele

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado")

});

//OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista:
//    - passo 1: pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado")


})
