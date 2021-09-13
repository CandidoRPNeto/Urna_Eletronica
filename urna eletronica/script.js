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
    let num = document.querySelector('.numero.pisca')
    if (num != null){
        num.innerHTML = n;
        numeroPreenchimento += n;
        num.classList.remove('pisca');
        let next = num.nextElementSibling;
        if(next != null)
            next.classList.add('pisca');
        else
            atualizarInterface();
    }
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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((itens) => {
        if(itens.numero == numeroPreenchimento)
            return true;
        else
            return false;
    });
    if (candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = 'Nome: ' + candidato.nome + '<br/>' +
        'Partido: ' + candidato.partido + '<br/>';
        let ftsHTML = '';
        for (let i in candidato.fotos){
            ftsHTML += ' <div class="tela-d-1-r-i"><img src="Imagens/' +
            candidato.fotos[i].url + '" alt=""/>' + candidato.fotos[i].legenda + '</div>'
        }
        lateralComImg.innerHTML = ftsHTML;
    }
}

comecarEtapa();