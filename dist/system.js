
// ----------- Efeito maquina de escrever ----------- //
function typeWrite(e) {
  const textoArray = e.innerHTML.split('');
  e.innerHTML = ' ';
  textoArray.forEach(function (letter, i) {
      setTimeout(function () {
          e.innerHTML += letter;
      }, 80 * i);
  });
}

const phrase = document.querySelector('.headline');

typeWrite(phrase);

// --------------- Deslizar suavemente --------------- //
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) { // Pega a posicao do item
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;

}

function scrollToIdOnClick(event) { // Previne o padrao no click
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 50;

  scrollToPosition(to);
}

function scrollToPosition(to) { // Scroll suave
  window.scroll({
    top: to,
    behavior: "smooth",
  })

}

// --------------- Veja Mais --------------- //

// botao p ver mais
var showMore = document.getElementById("show-more");

showMore.addEventListener("click", function() {

  var moreContent = document.getElementById("more-content"); // div contendo os outros cards

  if(moreContent.style.display === "grid") { //caso a div esteja com "grid" ele esconde
    moreContent.style.display = "none"
    showMore.innerHTML = "Veja mais..." // o nome no botao pe trocado

  }else{ //caso a div esteja com "grid" ele mostra
    moreContent.style.display = "grid"
    showMore.innerHTML = "Veja menos." // o nome no botao pe trocado

  }

});