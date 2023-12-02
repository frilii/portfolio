
let btnMenu = document.getElementById('btn-menu')
let menumob = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let header = document.querySelector("#header");
let btnContato = document.getElementById("btn-contato");

btnMenu.addEventListener('click', ()=>{
    menumob.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menumob.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menumob.classList.remove('abrir-menu')
})

window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 0) {
      header.classList.add("rolagem");
      btnContato.classList.add("btn-contato-scrolled");
    } else {
      header.classList.remove("rolagem");
      btnContato.classList.remove("btn-contato-scrolled");
    }
  });
  

  const menu = document.querySelector('.fixed-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Ajuste este valor conforme necessário
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });
  