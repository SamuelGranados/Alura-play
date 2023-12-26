import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

        if (busca.length == 0) {
            lista.innerHTML = `<h2 class="mensagem__titulo">Não existem v´deis com esse termo</h2>`
        }
}

const botaoDePesquisa = document.querySelector("[data-label-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))