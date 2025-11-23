
//   script 

    // fotos/vds
    
  document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelector('.slides');
    const slideCount = carousel.querySelectorAll('.slide').length;
    const dotsContainer = carousel.querySelector('.dots');
    let current = 0;

    // cria bolinhas
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
    const dots = carousel.querySelectorAll('.dot');

    function goToSlide(index) {
      current = (index + slideCount) % slideCount;
      slides.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach(d => d.classList.remove('active'));
      dots[current].classList.add('active');
      // pausa vídeos fora do slide
      carousel.querySelectorAll('video').forEach(v => v.pause());
      const activeVideo = slides.children[current].querySelector('video');
      if (activeVideo) activeVideo.play();
    }

    carousel.querySelector('.next').onclick = () => goToSlide(current + 1);
    carousel.querySelector('.prev').onclick = () => goToSlide(current - 1);
  });



// menu hamburger 

  const btn = document.getElementById("btn-menu");  
const menu = document.querySelector(".hamburguer1");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});



// sobre 
 
  document.addEventListener("DOMContentLoaded", () => {
  const aba = document.getElementById("sobre-aba");
  const botao = document.getElementById("btn-sobre");

  // abre a aba
  botao.addEventListener("click", (e) => {
    e.stopPropagation();  // impede o clique de fechar imediatamente
    aba.classList.toggle("open");
  });

  // fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!aba.contains(e.target) && e.target !== botao) {
      aba.classList.remove("open");
    }
  });
});


