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
          }, index * 500); // Délai de 500ms entre chaque section pour un effet fluide
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

/******************** ANIMATION DES NUAGES **************/
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner les nuages
  const bigCloud = document.querySelector('.place--big_cloud');
  const littleCloud = document.querySelector('.place--little_cloud');

  // Fonction qui ajuste la position des nuages en fonction du scroll
  function moveClouds() {
    // Obtenir la position de défilement actuelle
    const scrollPosition = window.scrollY;

    // Calculer les nouveaux déplacements des nuages basés sur le scroll (maximum 300px vers la gauche)
    const moveBigCloud = Math.min(scrollPosition * 0.3, 300 );  
    const moveLittleCloud = Math.min(scrollPosition * 0.5,300 ); 

    // Appliquer la transformation pour déplacer les nuages
    bigCloud.style.transform = `translateX(-${moveBigCloud}px)`;
    littleCloud.style.transform = `translateX(-${moveLittleCloud}px)`;
  }

  // Attacher la fonction au scroll de la fenêtre
  window.addEventListener('scroll', moveClouds);
});
/********************************/
 