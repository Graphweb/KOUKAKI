document.addEventListener("DOMContentLoaded", () => {
  // Configuration de l'observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Création de l'observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const element = entry.target;

      if (entry.isIntersecting) {
        // Vérification de la direction de l'entrée dans la fenêtre
        if (entry.boundingClientRect.top < 0) {
          element.classList.add('section-visible-down');
        } else {
          element.classList.add('section-visible-up');
        }
        // Optionnel : une fois l'animation déclenchée, on peut arrêter d'observer l'élément
        observer.unobserve(element);
      }
    });
  }, options);
  
  // Sélection des éléments à observer
  const nominations = document.querySelectorAll('.section .nomination');
  nominations.forEach(nomination => {
    observer.observe(nomination);
  });
});



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