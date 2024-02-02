function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
     }

    else {
        alert('Elemento não encontrado ou seletor inválido!');
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// function tocaSomClap(){
//     document.querySelector('#som_tecla_clap').play();
// }

const listaDeTeclas = document.querySelectorAll('.tecla');

/* Opção de estrutura de repetição com While, código menos otimizado

let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    // console.log(instrumento);

    //Template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    // listaDeTeclas[contador].onclick = tocaSom;

    contador +=1;

    // console.log(contador);

}
*/

//Opção ao código acima de estrutura de repetição otimizada usando for
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
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