// Apparition des cartes jeux au scroll
const cards = document.querySelectorAll('.game-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach(card => observer.observe(card));

// Accordéon FAQ
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Ferme tous les items
    accordionItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.maxHeight = null;
    });

    // Ouvre l'item cliqué si ce n'était pas déjà ouvert
    if (!isOpen) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
