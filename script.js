
const imagem1 = document.querySelector('#img01');
const imagem2 = document.querySelector('#img02');
const imagem3 = document.querySelector('#img03');
const nomeDoPersonagem1 = document.querySelector('#nome01');
const nomeDoPersonagem2 = document.querySelector('#nome02');
const nomeDoPersonagem3 = document.querySelector('#nome03');
const especie1 = document.querySelector('#especie01');
const especie2 = document.querySelector('#especie02');
const especie3 = document.querySelector('#especie03');
const condicao1 = document.querySelector('#status01');
const condicao2 = document.querySelector('#status02');
const condicao3 = document.querySelector('#status03');
const botao = document.querySelector('#botao');



gerarValorAleatorio = () =>{ // => aero function
    return Math.floor(Math.random() * 671);
}


pegarPersonagem1 = () => { // função de chamada de API
        
        let  numeroAleatorio = gerarValorAleatorio();
            
            return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {// a crase no JS permite a alteração em tempo real
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-type": 'application/json'
                }
            }).then((response) => response.json()).then((data) => {

                imagem1.src = data.image;
                imagem1.alt = data.name;
                nomeDoPersonagem1.innerHTML = data.name;
                especie1.innerHTML = data.species;
                condicao1.innerHTML = data.status;
            }); // promessa de resposta   
    }

    pegarPersonagem2 = () => { // função de chamada de API
        
        let  numeroAleatorio = gerarValorAleatorio();
            
            return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {// a crase no JS permite a alteração em tempo real
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-type": 'application/json'
                }
            }).then((response) => response.json()).then((data) => {

                imagem2.src = data.image;
                imagem2.alt = data.name;
                nomeDoPersonagem2.innerHTML = data.name;
                especie2.innerHTML = data.species;
                condicao2.innerHTML = data.status;
            }); // promessa de resposta   
    }

    pegarPersonagem3 = () => { // função de chamada de API
        
        let  numeroAleatorio = gerarValorAleatorio();
            
            return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {// a crase no JS permite a alteração em tempo real
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-type": 'application/json'
                }
            }).then((response) => response.json()).then((data) => {

                imagem3.src = data.image;
                imagem3.alt = data.name;
                nomeDoPersonagem3.innerHTML = data.name;
                especie3.innerHTML = data.species;
                condicao3.innerHTML = data.status;
            }); // promessa de resposta   
    }

//===============================================

function alteraPersonagens() {
      
        pegarPersonagem1()
        pegarPersonagem2();
        pegarPersonagem3();
}

botao.onclick =  alteraPersonagens;
