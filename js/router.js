const hamb = document.getElementById("hamburger-btn");
const menu = document.getElementById("main-menu");
const botaoAcessibilidade = document.getElementById("acessibilidade-btn");

/* MENU ---------------------------------------------------- */
function ajustarMenuInicial() {
  if (!menu) return;

  if (window.innerWidth <= 768) {
    menu.classList.remove("mobile-open");
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function alternarMenu(e) {
  if (!menu) return;

  e.stopPropagation();
  const aberto = menu.classList.toggle("mobile-open");
  menu.style.display = aberto ? "flex" : "none";
}

function fecharMenu(e) {
  if (!menu || !hamb) return;

  if (
    window.innerWidth <= 768 &&
    !menu.contains(e.target) &&
    !hamb.contains(e.target)
  ) {
    menu.classList.remove("mobile-open");
    menu.style.display = "none";
  }
}

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768 && menu) {
      menu.classList.remove("mobile-open");
      menu.style.display = "none";
    }
  });
});

if (hamb) {
  hamb.addEventListener("click", alternarMenu);
}

document.addEventListener("click", fecharMenu);
window.addEventListener("resize", ajustarMenuInicial);
window.addEventListener("DOMContentLoaded", ajustarMenuInicial);

/* CONTRASTE ---------------------------------------------------- */
const CONTRASTE_CHAVE = "altaAcessibilidade";

function aplicarContrasteSalvo() {
  if (localStorage.getItem(CONTRASTE_CHAVE) === "true") {
    document.documentElement.classList.add("alto-contraste");
  }
}

function alternarContraste() {
  const ativo = document.documentElement.classList.toggle("alto-contraste");
  localStorage.setItem(CONTRASTE_CHAVE, ativo);
}

if (botaoAcessibilidade) {
  botaoAcessibilidade.addEventListener("click", alternarContraste);
}

aplicarContrasteSalvo();
