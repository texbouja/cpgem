// Attend que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionne tous les éléments avec la classe collapsible
  var collapsibleElements = document.querySelectorAll('.collapsible');

  // Pour chaque élément collapsible
  collapsibleElements.forEach(function (element) {
    // Trouve le premier titre (h2, h3 ou h4)
    var header = element.querySelector(
      'h2:first-child, h3:first-child, h4:first-child'
    );

    if (header) {
      // Ajoute un écouteur d'événement au clic sur le titre
      header.addEventListener('click', function (event) {
        // Si l'utilisateur a cliqué sur un lien dans le titre, ne pas replier
        if (event.target.tagName === 'A') {
          return;
        }

        // Ajoute ou supprime la classe collapsed
        element.classList.toggle('collapsed');
      });
    }
  });
});
