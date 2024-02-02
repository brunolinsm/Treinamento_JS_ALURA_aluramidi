const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorSom){
    const somEscolhido = document.querySelector(seletorSom);

    if (somEscolhido != null && somEscolhido.localName === 'audio'){
     somEscolhido.play();
     }
     
    else{
        alert('Elemento não encontrado ou seletor inválido!');
    }
}

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idSom);
    }
    
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}