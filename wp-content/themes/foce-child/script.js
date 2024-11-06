/***************************** ANIMATION DES SECTION **************************/
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
      if (section.classList.contains('banner')) {
          // Animation de montée pour la section .banner
          section.classList.add("section-visible-up");
      } else {
          // Animation de descente pour les autres sections
          setTimeout(() => {
              section.classList.add("section-visible-down");
          }, index * 0); // Délai de 0ms entre chaque section 
      }
  });

  console.log("Les sections s'affichent progressivement !");
});

/************************** ANIMATION DES TITRES *******************************/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section-titre");

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
      titles.forEach(title => {
          if (isInViewport(title)) {
              title.classList.add("titre-visible");
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility); // Vérifier au chargement initial
});

/********************  ANIMATION DES NUAGES **********************/

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner les nuages et la section "Le Lieu"
    const bigCloud = document.querySelector('.place--big_cloud');
    const littleCloud = document.querySelector('.place--little_cloud');
    const placeSection = document.querySelector('#place');

    // Fonction qui ajuste la position des nuages en fonction du scroll dans la section "Le Lieu"
    function moveClouds() {
        // Obtenir la position de la section "Le Lieu" par rapport au haut de la page
        const sectionTop = placeSection.offsetTop;
        const sectionHeight = placeSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Vérifier si le scroll est dans la section "Le Lieu"
        if (scrollPosition >= sectionTop && scrollPosition <= (sectionTop + sectionHeight)) {
            // Calculer le pourcentage de scroll dans la section "Le Lieu"
            const scrollInSection = scrollPosition - sectionTop;
            const sectionScrollRatio = scrollInSection / sectionHeight;

            // Ajuster les déplacements pour que les nuages atteignent le bord gauche (limite plus élevée)
            const moveBigCloud = Math.min(sectionScrollRatio * 380, 380); 
            const moveLittleCloud = Math.min(sectionScrollRatio * 460, 460); 

            // Appliquer la transformation pour déplacer les nuages
            bigCloud.style.transform = `translateX(-${moveBigCloud}px)`;
            littleCloud.style.transform = `translateX(-${moveLittleCloud}px)`;
        }
    }

    // Attacher la fonction au scroll de la fenêtre
    window.addEventListener('scroll', moveClouds);
});

/************** SLIDER ******************/
document.addEventListener("DOMContentLoaded", () => {
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  coverflowEffect: {
    depth: 100,
    modifier: 1,
    slideShadows: false,
    stretch: 0,
  },
})
});

/************** MENU BURGER ******************/
//  Configuration du menu burger
let siteNav = document.getElementById("all-header");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let siteTitle = document.getElementById("i-site-title");
let siteLogo = document.getElementById("logo-kou-burg");
let anchorTitles = document.querySelectorAll(".nav-anchor");
let noUl = document.getElementById("ul-nav");
let imgBurg = document.getElementById("i-img-burg");
let fadeTitles1 = document.querySelector(".a-active-1");
let fadeTitles2 = document.querySelector(".a-active-2");
let fadeTitles3 = document.querySelector(".a-active-3");
let fadeTitles4 = document.querySelector(".a-active-4");
let noScroll = document.getElementById("body-all");
let noFlower = document.getElementById("studio");
let noSwiper = document.getElementById("characters");

//  Attribution des fonctions de clic
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

//  Fermer le menu lors du clic sur un élément de navigation
anchorTitles.forEach(function (anchor) {
  anchor.addEventListener("click", closeNav);
});

// Fonction pour ouvrir le menu
function openNav() {
  siteNav.classList.add("active-nav");
  siteNav.classList.remove("no-active-nav");
  closeBtn.classList.add("open-close");
  openBtn.classList.add("close-open");
  openBtn.classList.remove("open-open");
  noUl.classList.remove("no-active-ul");
  siteTitle.classList.add("site-title-active");
  siteLogo.classList.add("logo-koukaki-burg-active");
  imgBurg.classList.add("img-burg-active");
  noFlower.classList.add("opacity-nav");
  noSwiper.classList.add("opacity-nav");

  // Afficher le bouton de fermeture et masquer le bouton d'ouverture
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
}

// Fonction pour fermer le menu
function closeNav() {
  siteNav.classList.remove("active-nav");
  siteNav.classList.add("no-active-nav");
  closeBtn.classList.remove("open-close");
  openBtn.classList.remove("close-open");
  openBtn.classList.add("open-open");
  noUl.classList.add("no-active-ul");
  siteTitle.classList.remove("site-title-active");
  siteLogo.classList.remove("logo-koukaki-burg-active");
  imgBurg.classList.remove("img-burg-active");
  noFlower.classList.remove("opacity-nav");
  noSwiper.classList.remove("opacity-nav");

  // Afficher le bouton d'ouverture et masquer le bouton de fermeture
  closeBtn.style.display = "none";
  openBtn.style.display = "block";

  // Rediriger vers la page d'accueil
  // Utiliser "/" si tu veux revenir à la racine du site
  window.location.href = "/";
}

// S'assurer que les éléments existent avant d'ajouter des gestionnaires d'événements
document.addEventListener("DOMContentLoaded", function() {
  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  // Fermer le menu en cliquant sur un élément de navigation
  anchorTitles.forEach(function(anchor) {
    anchor.addEventListener("click", closeNav);
  });
});
