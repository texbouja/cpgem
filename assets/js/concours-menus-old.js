// concours-menu.js

document.addEventListener('DOMContentLoaded', function () {
  // Variables d'état
  let concoursData = null;
  let currentView = 'concours';
  let currentFilter = 'all';
  let currentTab = null;

  // Éléments DOM
  const contentContainer = document.getElementById('content-container');
  const filterDropdown = document.querySelector('.filter-dropdown');

  // Afficher un indicateur de chargement
  contentContainer.innerHTML =
    '<div class="loading-indicator">Chargement des données...</div>';

  // Charger les données JSON
  fetch('/cpgem/assets/data/concours_data.json')
    .then((response) => response.json())
    .then((data) => {
      concoursData = data;
      initializeFilters();
      initializeView();
      renderContent();
    });
  // .catch((error) => {
  //   console.error('Erreur lors du chargement des données:', error);
  //   contentContainer.innerHTML =
  //     '<div class="error-message">Erreur lors du chargement des données</div>';
  // });

  // Initialiser les filtres à partir des données
  function initializeFilters() {
    // Ajouter "Tous les sujets" comme premier filtre (déjà dans le HTML)

    // Ajouter les parties comme options de filtrage
    Object.keys(concoursData.parties).forEach((partie) => {
      const option = document.createElement('button');
      option.className = 'filter-option';
      option.setAttribute('data-filter', partie);
      option.textContent = formatPartieLabel(partie);
      filterDropdown.appendChild(option);

      // Ajouter un gestionnaire d'événements
      option.addEventListener('click', function (e) {
        e.stopPropagation();
        setActiveFilter(partie);
      });
    });

    // Ajouter des gestionnaires d'événements pour l'option "Tous les sujets"
    document
      .querySelector('.filter-option[data-filter="all"]')
      .addEventListener('click', function (e) {
        e.stopPropagation();
        setActiveFilter('all');
      });
  }

  // Formater le nom de la partie pour l'affichage
  function formatPartieLabel(partie) {
    // Mapping des codes de partie vers des noms lisibles
    const partieLabels = {
      proana: 'Probabilités et analyse',
      serint: 'Séries et intégrales',
      caldif: 'Calcul différentiel',
      equdif: 'Équations différentielles',
      topana: 'Topologie et analyse',
      alglin: 'Algèbre linéaire',
      algbil: 'Algèbre bilinéaire'
      // Ajoutez d'autres mappings au besoin
    };

    return partieLabels[partie] || partie;
  }

  // Définir le filtre actif
  function setActiveFilter(filter) {
    if (currentFilter === filter) return;

    currentFilter = filter;

    // Mettre à jour les classes actives
    document.querySelectorAll('.filter-option').forEach((option) => {
      if (option.getAttribute('data-filter') === filter) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });

    // Charger les données avec le nouveau filtre
    renderContent();
  }

  // Initialiser la vue (onglets et contenu)
  function initializeView() {
    // Définir les gestionnaires d'événements pour les boutons de vue
    document.querySelectorAll('.view-option').forEach((option) => {
      option.addEventListener('click', function (e) {
        e.stopPropagation();
        const view = this.getAttribute('data-view');
        setActiveView(view);
      });
    });

    // Charger la vue "par concours" par défaut
    setActiveView('concours');
  }

  // Définir la vue active
  function setActiveView(view) {
    if (currentView === view) return;

    currentView = view;

    // Mettre à jour les classes actives
    document.querySelectorAll('.view-option').forEach((option) => {
      if (option.getAttribute('data-view') === view) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });

    // Charger les données avec la nouvelle vue
    renderContent();
  }

  // Afficher le contenu en fonction de la vue et du filtre actuels
  function renderContent() {
    if (!concoursData) return;

    if (currentView === 'concours') {
      renderConcours();
    } else {
      renderSessions();
    }
  }

  // Obtenir les sujets filtrés
  function getFilteredSujets() {
    if (currentFilter === 'all') {
      return concoursData.principale;
    } else {
      return concoursData.parties[currentFilter] || [];
    }
  }

  // Rendre la vue "par concours"
  function renderConcours() {
    const sujets = getFilteredSujets();

    if (sujets.length === 0) {
      contentContainer.innerHTML =
        '<div class="no-results">Aucun sujet trouvé pour ce filtre</div>';
      return;
    }

    // Regrouper par concours
    const concoursByName = {};
    sujets.forEach((sujet) => {
      if (!concoursByName[sujet.concours]) {
        concoursByName[sujet.concours] = [];
      }
      concoursByName[sujet.concours].push(sujet);
    });

    // Créer les onglets de concours
    const tabsContainer = document.querySelector('.concours-tabs');
    tabsContainer.innerHTML = '';

    let firstTab = null;
    Object.keys(concoursByName)
      .sort()
      .forEach((concours, index) => {
        const tab = document.createElement('button');
        tab.className = 'concours-tab';
        tab.textContent = concours.toUpperCase();
        tab.setAttribute('data-concours', concours);
        tabsContainer.appendChild(tab);

        if (index === 0) firstTab = tab;

        tab.addEventListener('click', function () {
          document
            .querySelectorAll('.concours-tab')
            .forEach((t) => t.classList.remove('active'));
          this.classList.add('active');

          currentTab = concours;
          showConcoursContent(concours);
        });
      });

    // Afficher le premier concours
    if (firstTab) {
      firstTab.click();
    }
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise().catch((err) => {
        console.error('MathJax error:', err);
      });
    }
  }

  // Afficher le contenu d'un concours spécifique
  function showConcoursContent(concours) {
    const sujets = getFilteredSujets().filter(
      (sujet) => sujet.concours === concours
    );

    if (sujets.length === 0) {
      contentContainer.innerHTML =
        '<div class="no-results">Aucun sujet trouvé pour ce concours et ce filtre</div>';
      return;
    }

    // Regrouper par session
    const sessionsByName = {};
    sujets.forEach((sujet) => {
      if (!sessionsByName[sujet.session]) {
        sessionsByName[sujet.session] = [];
      }
      sessionsByName[sujet.session].push(sujet);
    });

    // Créer le contenu HTML
    let html = '';

    // Trier les sessions par ordre décroissant
    Object.keys(sessionsByName)
      .sort((a, b) => b - a)
      .forEach((session) => {
        sessionsByName[session].forEach((sujet) => {
          html += renderSujetCardConcours(sujet);
        });
      });

    contentContainer.innerHTML = html;
  }

  // Rendre la vue "par session"
  function renderSessions() {
    const sujets = getFilteredSujets();

    if (sujets.length === 0) {
      contentContainer.innerHTML =
        '<div class="no-results">Aucun sujet trouvé pour ce filtre</div>';
      return;
    }

    // Regrouper par session
    const sessionsByName = {};
    sujets.forEach((sujet) => {
      if (!sessionsByName[sujet.session]) {
        sessionsByName[sujet.session] = [];
      }
      sessionsByName[sujet.session].push(sujet);
    });

    // Créer les onglets de session
    const tabsContainer = document.querySelector('.concours-tabs');
    tabsContainer.innerHTML = '';

    let firstTab = null;
    Object.keys(sessionsByName)
      .sort((a, b) => b - a)
      .forEach((session, index) => {
        const tab = document.createElement('button');
        tab.className = 'concours-tab';
        tab.textContent = session;
        tab.setAttribute('data-session', session);
        tabsContainer.appendChild(tab);

        if (index === 0) firstTab = tab;

        tab.addEventListener('click', function () {
          document
            .querySelectorAll('.concours-tab')
            .forEach((t) => t.classList.remove('active'));
          this.classList.add('active');

          currentTab = session;
          showSessionContent(session);
        });
      });

    // Afficher la première session
    if (firstTab) {
      firstTab.click();
    }
  }

  // Afficher le contenu d'une session spécifique
  function showSessionContent(session) {
    const sujets = getFilteredSujets().filter(
      (sujet) => sujet.session == session
    );

    if (sujets.length === 0) {
      contentContainer.innerHTML =
        '<div class="no-results">Aucun sujet trouvé pour cette session et ce filtre</div>';
      return;
    }

    // Regrouper par concours
    const concoursByName = {};
    sujets.forEach((sujet) => {
      if (!concoursByName[sujet.concours]) {
        concoursByName[sujet.concours] = [];
      }
      concoursByName[sujet.concours].push(sujet);
    });

    // Créer le contenu HTML
    let html = '';

    // Trier les concours par ordre alphabétique
    Object.keys(concoursByName)
      .sort()
      .forEach((concours) => {
        // html += `<h3 class="session-concours-title">${concours.toUpperCase()}</h3>`;

        concoursByName[concours].forEach((sujet) => {
          html += renderSujetCardSessions(sujet);
        });
      });

    contentContainer.innerHTML = html;
  }

  // Rendre une carte de sujet
  function renderSujetCardConcours(sujet) {
    // Générer les liens de téléchargement
    let downloadLinks = '';
    if (sujet.download_original) {
      downloadLinks += `<a href="${sujet.download_original}" class="download-item download-original">Original</a>`;
    }
    if (sujet.download_report) {
      downloadLinks += `<a href="${sujet.download_report}" class="download-item download-report">Rapport</a>`;
    }
    if (sujet.download_print) {
      downloadLinks += `<a href="${sujet.download_print}" class="download-item download-print">Imprimable</a>`;
    }
    if (sujet.download_tablet) {
      downloadLinks += `<a href="${sujet.download_tablet}" class="download-item download-tablet">Tablette</a>`;
    }
    if (sujet.download_phone) {
      downloadLinks += `<a href="${sujet.download_phone}" class="download-item download-phone">Mobile</a>`;
    }

    return `
      <div class="sujet-view">
        <div class="sujet-title">
          <h3><a href="${sujet.url}">${sujet.title}</a></h3>
          <div class="sujet-meta">
            ${
              sujet.filiere
                ? `<span class="meta-item meta-filiere">${sujet.filiere}</span>`
                : ''
            }
            <span class="meta-item meta-session">${sujet.session}</span>
            ${
              sujet.epreuve
                ? `<span class="meta-item meta-epreuve">${sujet.epreuve}</span>`
                : ''
            }
          </div>
        </div>
        
        ${
          sujet.objectif
            ? `<div class="sujet-objectif math-content">${sujet.objectif}</div>`
            : ''
        }
        
        ${
          downloadLinks
            ? `<div class="download-list">${downloadLinks}</div>`
            : ''
        }
        
        ${
          sujet.tags && sujet.tags.length > 0
            ? `
          <div class="prerequis-list">
            ${sujet.tags
              ?.map(
                (tag) => `
  <a href="${concoursData.baseurl}/tags/${encodeURIComponent(tag.slug)}" 
     class="prerequis-item">
    ${tag.name}
  </a>
`
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>
    `;
  }
  function renderSujetCardSessions(sujet) {
    // Générer les liens de téléchargement (identique à renderSujetCardSession)
    let downloadLinks = '';
    if (sujet.download_original) {
      downloadLinks += `<a href="${sujet.download_original}" class="download-item download-original">Original</a>`;
    }
    if (sujet.download_report) {
      downloadLinks += `<a href="${sujet.download_report}" class="download-item download-report">Rapport</a>`;
    }
    if (sujet.download_print) {
      downloadLinks += `<a href="${sujet.download_print}" class="download-item download-print">Imprimable</a>`;
    }
    if (sujet.download_tablet) {
      downloadLinks += `<a href="${sujet.download_tablet}" class="download-item download-tablet">Tablette</a>`;
    }
    if (sujet.download_phone) {
      downloadLinks += `<a href="${sujet.download_phone}" class="download-item download-phone">Mobile</a>`;
    }

    return `
      <div class="sujet-view">
        <div class="sujet-title">
          <h3><a href="${sujet.url}">${sujet.title}</a></h3>
          <div class="sujet-meta">
            <span class="meta-item meta-concours">${sujet.concours}</span>
            ${
              sujet.filiere
                ? `<span class="meta-item meta-filiere">${sujet.filiere}</span>`
                : ''
            }
            ${
              sujet.epreuve
                ? `<span class="meta-item meta-epreuve">${sujet.epreuve}</span>`
                : ''
            }
          </div>
        </div>
        
        ${
          sujet.objectif
            ? `<div class="sujet-objectif math-content">${sujet.objectif}</div>`
            : ''
        }
        
        ${
          downloadLinks
            ? `<div class="download-list">${downloadLinks}</div>`
            : ''
        }
        
        ${
          sujet.tags && sujet.tags.length > 0
            ? `
          <div class="prerequis-list">
            ${sujet.tags
              ?.map(
                (tag) => `
                      <a href="${
                        concoursData.baseurl
                      }/tags/${encodeURIComponent(tag.slug)}" 
                        class="prerequis-item">
                        ${tag.name}
                      </a>
                    `
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>
    `;
  }
  // Petit bonus pour les performances (préchargement des PDF)
  function preloadPDFs() {
    document.querySelectorAll('[href$=".pdf"]').forEach((link) => {
      const pdf = new Image();
      pdf.src = link.href;
    });
  }
  // Fermer les menus déroulants lorsqu'on clique ailleurs
  document.addEventListener('click', function () {
    document
      .querySelectorAll('.filter-dropdown, .view-dropdown')
      .forEach((dropdown) => {
        dropdown.style.display = 'none';
      });
  });

  // Empêcher la propagation des clics dans les menus déroulants
  document
    .querySelectorAll('.filter-dropdown, .view-dropdown')
    .forEach((dropdown) => {
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });

  // Gérer les clics sur les boutons de menu
  document.getElementById('filterBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    const dropdown = this.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document
    .getElementById('switchViewBtn')
    .addEventListener('click', function (e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      dropdown.style.display =
        dropdown.style.display === 'block' ? 'none' : 'block';
    });
});
