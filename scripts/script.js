// =========================
//   CARROSSEL – fotos/vds
// =========================

document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelector('.slides');
  const slideCount = carousel.querySelectorAll('.slide').length;
  const dotsContainer = carousel.querySelector('.dots');
  let current = 0;

  // Criar bolinhas
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = carousel.querySelectorAll('.dot');

  // ---- MOBILE: acompanhar dedo ----
  const isMobile = window.innerWidth <= 768;
  let scrollTimeout;

  if (isMobile) {
    slides.addEventListener("scroll", () => {
      const index = Math.round(slides.scrollLeft / slides.clientWidth);

      // Atualiza bolinhas
      dots.forEach(d => d.classList.remove("active"));
      dots[index]?.classList.add("active");

      // Atualiza vídeos ao parar o scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        current = index;

        carousel.querySelectorAll("video").forEach(v => v.pause());
        const vid = slides.children[current].querySelector("video");
        if (vid) vid.play();
      }, 130);
    });
  }

  // ---- Função principal ----
  function goToSlide(index) {
    current = (index + slideCount) % slideCount;

    if (window.innerWidth <= 768) {
      // MOBILE → desliza usando scroll
      slides.scrollTo({
        left: current * slides.clientWidth,
        behavior: "smooth"
      });
    } else {
      // DESKTOP → desliza via transform
      slides.style.transform = `translateX(-${current * 100}%)`;
    }

    // Bolinhas
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');

    // Vídeos
    carousel.querySelectorAll('video').forEach(v => v.pause());
    const activeVideo = slides.children[current].querySelector('video');
    if (activeVideo) activeVideo.play();
  }

  // Setas (só funcionam no desktop)
  const next = carousel.querySelector('.next');
  const prev = carousel.querySelector('.prev');

  if (next) next.onclick = () => goToSlide(current + 1);
  if (prev) prev.onclick = () => goToSlide(current - 1);
});


// =========================
//   MENU HAMBURGUER
// =========================

const btn = document.getElementById("btn-menu");
const menu = document.querySelector(".hamburguer1");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});


// =========================
//   SOBRE – Abrir e fechar
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const aba = document.getElementById("sobre-aba");
  const botao = document.getElementById("btn-sobre");

  botao.addEventListener("click", (e) => {
    e.stopPropagation();
    aba.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!aba.contains(e.target) && e.target !== botao) {
      aba.classList.remove("open");
    }
  });
});

// botao saber mais 
// botao saber mais 
document.querySelectorAll(".parte").forEach(parte => {

  const btn = parte.querySelector(".btn-mais");
  const infos = parte.querySelector(".infos");

  if (!btn || !infos) return;

  // abrir ao clicar
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    infos.classList.add("show");
    btn.style.display = "none";
  });

  // fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!infos.contains(e.target) && e.target !== btn) {
      infos.classList.remove("show");
      btn.style.display = "block";
    }
  });

});



