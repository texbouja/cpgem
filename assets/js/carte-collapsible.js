document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne toutes les cartes avec la classe 'collapse'
  const collapsibleCards = document.querySelectorAll('[class^="carte-"].collapse');
  
  collapsibleCards.forEach(card => {
    // Vérifie si l'élément a déjà été initialisé
    if (card.getAttribute('data-bs-initialized')) {
      return;
    }
    
    // Trouve le titre (premier h1-h6) et le contenu
    const header = card.querySelector('h1, h2, h3, h4, h5, h6:first-child');
    let content = card.querySelector('.content');
    
    // Si pas de .content explicite, on le crée
    if (!content) {
      content = document.createElement('div');
      content.className = 'content';
      
      // Déplace tous les enfants après le header dans le content
      const children = Array.from(card.children);
      for (let i = 0; i < children.length; i++) {
        if (children[i] !== header) {
          content.appendChild(children[i]);
        }
      }
      card.appendChild(content);
    }
    
    // Initialise le collapse Bootstrap
    if (header && content) {
      // Configure les attributs nécessaires
      const targetId = 'collapse-' + Math.random().toString(36).substr(2, 9);
      header.setAttribute('data-bs-toggle', 'collapse');
      header.setAttribute('data-bs-target', '#' + targetId);
      content.id = targetId;
      
      // Initialise le collapse
      new bootstrap.Collapse(content, {
        toggle: false
      });
      
      // Gère les classes pour l'icône
      header.addEventListener('click', function() {
        this.classList.toggle('collapsed');
      });
      
      // Marque comme initialisé
      card.setAttribute('data-bs-initialized', 'true');
    }
  });
});