// Variables globales pour suivre l'état
let currentView = 'concours';
let dropdownVisible = false;

// Fonction pour afficher un concours spécifique
function showConcours(concoursId) {
  // Masquer tous les contenus d'onglets
  var tabContents = document.querySelectorAll('#par-concours .tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // Désactiver tous les boutons d'onglets
  var tabLinks = document.querySelectorAll('#par-concours .concours-tab');
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  // Afficher le contenu de l'onglet sélectionné et activer le bouton
  document.getElementById(concoursId).style.display = 'block';
  event.currentTarget.className += ' active';
}

// Fonction pour afficher une session spécifique
function showSession(sessionId) {
  // Masquer tous les contenus d'onglets
  var tabContents = document.querySelectorAll('#par-session .tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // Désactiver tous les boutons d'onglets
  var tabLinks = document.querySelectorAll('#par-session .concours-tab');
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  // Afficher le contenu de l'onglet sélectionné et activer le bouton
  document.getElementById('session-' + sessionId).style.display = 'block';
  event.currentTarget.className += ' active';
}

// Fonction pour basculer l'affichage du menu déroulant
function toggleView(event) {
  event.stopPropagation(); // Empêcher l'événement de se propager au document

  // Récupérer le dropdown spécifique associé au bouton cliqué
  const dropdown = event.currentTarget.nextElementSibling;

  // Basculer la visibilité
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    dropdownVisible = false;
  } else {
    // Fermer tous les autres dropdowns d'abord
    document.querySelectorAll('.view-dropdown').forEach(function (el) {
      el.style.display = 'none';
    });

    dropdown.style.display = 'block';
    dropdownVisible = true;
  }
}

// Fonction pour sélectionner le mode de visualisation
function selectView(viewType, event) {
  event.stopPropagation(); // Empêcher l'événement de se propager

  // Ne rien faire si on est déjà dans cette vue
  if (viewType === currentView) {
    closeAllDropdowns();
    return;
  }

  currentView = viewType;

  if (viewType === 'concours') {
    document.getElementById('par-concours').style.display = 'block';
    document.getElementById('par-session').style.display = 'none';

    // Mettre à jour les boutons d'option
    document.querySelectorAll('.view-option').forEach(function (el) {
      if (el.textContent.trim() === 'Par concours') {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Cliquer sur le premier onglet par défaut
    setTimeout(() => {
      if (document.getElementById('defaultOpenConcours')) {
        document.getElementById('defaultOpenConcours').click();
      }
    }, 0);
  } else {
    document.getElementById('par-concours').style.display = 'none';
    document.getElementById('par-session').style.display = 'block';

    // Mettre à jour les boutons d'option
    document.querySelectorAll('.view-option').forEach(function (el) {
      if (el.textContent.trim() === 'Par session') {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Cliquer sur le premier onglet par défaut
    setTimeout(() => {
      if (document.getElementById('defaultOpenSession')) {
        document.getElementById('defaultOpenSession').click();
      }
    }, 0);
  }

  // Fermer le menu déroulant
  closeAllDropdowns();
}

// Fonction pour fermer tous les menus déroulants
function closeAllDropdowns() {
  document.querySelectorAll('.view-dropdown').forEach(function (el) {
    el.style.display = 'none';
  });
  dropdownVisible = false;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  // Définir les gestionnaires d'événements pour les boutons sandwich
  document
    .querySelectorAll('#switchViewBtn, #switchViewBtn2')
    .forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        toggleView(e);
      });
    });

  // Gestionnaires d'événements pour les options de vue
  document.querySelectorAll('.view-option').forEach(function (option) {
    option.addEventListener('click', function (e) {
      const viewType =
        this.textContent.trim() === 'Par concours' ? 'concours' : 'session';
      selectView(viewType, e);
    });
  });

  // Fermer les menus déroulants lorsqu'on clique ailleurs
  document.addEventListener('click', function () {
    if (dropdownVisible) {
      closeAllDropdowns();
    }
  });

  // Ouvrir l'onglet par défaut
  if (document.getElementById('defaultOpenConcours')) {
    document.getElementById('defaultOpenConcours').click();
  }
});
