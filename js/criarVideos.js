import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]");
    const url = document.querySelector("[data-url]");
    const titulo = document.querySelector("[data-titulo]");
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaVideos(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento))