/* ANIMATION DES SECTION */
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
/* FIN ANIMATION SECTION */



/* PERMET D'AVOIR UN EFFET SCROLL logo */

document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll('.animation-titre');

  // Fonction qui vérifie si l'élément est visible dans le viewport
  function affichageViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  // Fonction qui vérifie chaque titre sur scroll
  function titreScroll() {
    titles.forEach(title => {
      if (affichageViewport(title)) {
        title.classList.add('visible');
      }
    });
  }

  // Lancer la vérification au chargement initial et sur chaque défilement
  window.addEventListener('scroll', titreScroll);

  // Optionnel : Vérifier immédiatement après le chargement pour les éléments déjà visibles
  titreScroll();
});

/* fin */

/********************** ANIMATION TITRES  ************/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section-titre");

  // Vérifier si un élément est visible dans le viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  // Vérifier la visibilité de chaque titre et appliquer l'animation
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