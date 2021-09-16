let seuVotoPara = document.querySelector('.tela-d-1-l-1 span');
let cargo = document.querySelector('.tela-d-1-l-2 span');
let descricao = document.querySelector('.tela-d-1-l-4');
let aviso = document.querySelector('.tela-d-2');
let lateralComImg = document.querySelector('.tela-d-1-r');
let numeros = document.querySelector('.tela-d-1-l-3');
let votos = [];

let etapaAtual = 0;
let numeroPreenchimento = '';
let votoBranco = false;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHTML = '<div class="numero pisca"></div>';
    
    for(let i=1; i<etapa.numeros;i++){
        numeroHTML += '<div class="numero"></div>';
    }
    numeroPreenchimento = '';
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
    numeroPreenchimento = '';
    votoBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    lateralComImg.innerHTML = '';
    descricao.innerHTML = '<div class="tela-d-1-l-2-g pisca">VOTO EM BRANCO</div>';
}
function corrige(){
    comecarEtapa();
}
function confirma(){
    votoConfirmado = false;
    if(numeroPreenchimento.length == etapas[etapaAtual].numeros){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numeroPreenchimento
        });
    } else if(votoBranco){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    }
    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] != undefined)
            comecarEtapa();
        else {
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante">FIM</div>';
            console.log(votos);
        }
    }
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
            if(candidato.fotos[i].small){
                ftsHTML += ' <div class="tela-d-1-r-i small"><img src="Imagens/' +
                candidato.fotos[i].url + '" alt=""/>' + candidato.fotos[i].legenda + '</div>'    
            } else {
                ftsHTML += ' <div class="tela-d-1-r-i"><img src="Imagens/' +
                candidato.fotos[i].url + '" alt=""/>' + candidato.fotos[i].legenda + '</div>'
            }
        }
        lateralComImg.innerHTML = ftsHTML;
    } else {
        seuVotoPara.style.display = 'block';
        lateralComImg.innerHTML = '';
        descricao.innerHTML = '<div class="tela-d-1-l-2-g pisca">VOTO NULO</div>'
    }
}

comecarEtapa();