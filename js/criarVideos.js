const formulario = document.querySelector("[data-formulario]");

function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]");
    const url = document.querySelector("[data-url]");
    const titulo = document.querySelector("[data-titulo]");
    const descricao = Math.floor(Math.random() * 10).toString();
}

formulario.addEventListener("submit", evento => criarVideo(evento));