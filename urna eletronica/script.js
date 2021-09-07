let seuVotoPara = document.querySelector('.tela-d-1-l-1 span');
let cargo = document.querySelector('.tela-d-1-l-2 span');
let descricao = document.querySelector('.tela-d-1-l-4');
let aviso = document.querySelector('.tela-d-2');
let lateralComImg = document.querySelector('.tela-d-1-r');
let numeros = document.querySelector('.tela-d-1-l-3');

let etapaAtual = 0;
let numeroPreenchimento = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHTML = '<div class="numero pisca"></div>';
    
    for(let i=1; i<etapa.numeros;i++){
        numeroHTML += '<div class="numero"></div>';
    }
    numeroHTML
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateralComImg.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function clicou(n){
    alert("Clicou em "+n);
}
function branco(){
    alert("Clicou em Branco");
}
function corrige(){
    alert("Clicou em Corrige");
}
function confirma(){
    alert("Clicou em Confirma");
}

function atualizarInterface(){
    
}

comecarEtapa();