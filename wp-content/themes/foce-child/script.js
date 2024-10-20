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

/* ANIMATION DES TITRES */
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


