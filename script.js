// ===============================
// BOTÃO "ASSISTIR AGORA"
// ===============================

function playMovie() {
    alert("🎬 Carregando filme...");
}


// ===============================
// SISTEMA DE BUSCA
// ===============================

function searchMovies() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const title = card
            .getAttribute("data-title")
            .toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ===============================
// BUSCAR APERTANDO ENTER
// ===============================

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchMovies();
        }

    });


// ===============================
// CLICAR NOS FILMES
// ===============================

document.querySelectorAll(".movie-card").forEach(card => {

    card.addEventListener("click", function() {

        const title = this.getAttribute("data-title");

        alert("🎬 Você selecionou: " + title);

    });

});


// ===============================
// BOTÃO "MINHA LISTA"
// ===============================

document.querySelectorAll(".btn-secondary").forEach(button => {

    button.addEventListener("click", function() {

        this.textContent = "✓ Adicionado";

        setTimeout(() => {
            this.textContent = "+ Minha lista";
        }, 2000);

    });

});


// ===============================
// ANIMAÇÃO AO CARREGAR
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});