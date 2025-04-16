---
layout: post
panel_includes:
  - toc
title: Sujets de concours
description: Selection de sujets de concours avec corrigés.
order: 2
math: true
icon: fas fa-medal
tabpage: true
concourspage: true
toc: true
toctitle: Listes des sujets
---


> ### Note
Chaque titre avec l'icone <span class="fas fa-medal"></span> est un lien qui renvoit vers la fiche individuelle du sujet. Celle-ci contient en général plus d'informations que l'encadré du sujet sur cette page. L'encadré en question contient une brêve description du sujet, les liens de téléchargement et les chapitres abordés sous forme de tags cliquables.
{: .carte-note}

<div id="concours-view">
  <!-- Vue groupée par concours -->
  <div id="par-concours" class="view-container">
    {% assign concours_groups = site.posts | where_exp: "post", "post.concours != nil" | group_by: "concours" | sort: "name" %}

    <div class="concours-window" scroll="4">

      <div class="concours-header">
  <div class="concours-tabs-container">
    <div class="concours-tabs">
      {% for concours in concours_groups %}
        <button class="concours-tab" onclick="showConcours('{{ concours.name | slugify }}')" {% if forloop.first %}id="defaultOpenConcours"{% endif %}>{{ concours.name }}</button>
      {% endfor %}
    </div>
  </div>
  
  <div class="view-switch">
    <button id="switchViewBtn" onclick="toggleView()">
      <i class="fas fa-bars"></i>
    </button>
    <div class="view-dropdown">
      <button class="view-option active" onclick="selectView('concours')">Par concours</button>
      <button class="view-option" onclick="selectView('session')">Par session</button>
    </div>
  </div>
</div>

      {% for concours in concours_groups %}
        <div id="{{ concours.name | slugify }}" class="concours-content tab-content">
          {% assign sessions = concours.items | group_by: "session" | sort: "name" | reverse %}
          
          {% for session in sessions %}
            {% for post in session.items %}
              <div class="sujet-item">
                <div class="sujet-title">
                {% capture sujet_title %}
### [{{ post.title }}]({{ post.url | relative_url }})
                {% endcapture %}
                {{ sujet_title | markdownify }}
                <div class="sujet-meta">
                  {% if post.filiere %}
                    <span class="meta-item meta-filiere">{{ post.filiere }}</span>
                  {% endif %}
                  
                  <span class="meta-item meta-session">{{ post.session }}</span>

                  {% if post.epreuve %}
                    <span class="meta-item meta-epreuve">{{ post.epreuve }}</span>
                  {% endif %}

                  {% if post.duree %}
                    <span class="meta-item meta-duree">{{ post.duree }}</span>
                  {% endif %}

                  {% if post.difficulte %}
                    <span class="meta-item meta-difficulte">{{ post.difficulte }}</span>
                  {% endif %}
                </div>
              </div>
                
                {% if post.objectif %}
                  <p class="sujet-objectif">
                    {{ post.objectif }}</p>
                {% endif %}

                {% include links.html page=post %}
                
                
                {% if post.tags %}
                    <div class="prerequis-list">
                      {% for tag in post.tags %}
                        {% if site.data.variables.keywords[tag] %}
                          <a href="{{ '/tags/' | relative_url }}{{ tag | slugify }}" class="prerequis-item"> {{ site.data.variables.keywords[tag] }}</a>
                        {% endif %}
                      {% endfor %}
                    </div>
                  {% endif %}
                
              </div>
            {% endfor %}
          {% endfor %}
        </div>
      {% endfor %}
    </div>
  </div>

  <!-- Vue groupée par session -->
  <div id="par-session" class="view-container" style="display:none;">
    {% assign session_groups = site.posts | where_exp: "post", "post.concours != nil" | group_by: "session" | sort: "name" | reverse %}

    <div class="concours-window" scroll="4">
    
      <div class="concours-header">
  <div class="concours-tabs-container">
    <div class="concours-tabs">
      {% for session in session_groups %}
        <button class="concours-tab" onclick="showSession('{{ session.name | slugify }}')" {% if forloop.first %}id="defaultOpenSession"{% endif %}>{{ session.name }}</button>
      {% endfor %}
    </div>
  </div>
  
  <div class="view-switch">
    <button id="switchViewBtn2" onclick="toggleView()">
      <i class="fas fa-bars"></i>
    </button>
    <div class="view-dropdown">
      <button class="view-option" onclick="selectView('concours')">Par concours</button>
      <button class="view-option active" onclick="selectView('session')">Par session</button>
    </div>
  </div>
</div>

      {% for session in session_groups %}
        <div id="session-{{ session.name | slugify }}" class="session-content tab-content">
          {% assign concours_in_session = session.items | group_by: "concours" | sort: "name" %}
          
          {% for concours in concours_in_session %}
            <h3 class="session-concours-title">{{ concours.name }}</h3>
            {% for post in concours.items %}
              <div class="sujet-item">
                <div class="sujet-title">
                {% capture sujet_title %}
### [{{ post.title }}]({{ post.url | relative_url }})
                {% endcapture %}
                {{ sujet_title | markdownify }}
                <div class="sujet-meta">
                  {% if post.filiere %}
                    <span class="meta-item meta-filiere">{{ post.filiere }}</span>
                  {% endif %}
                  
                  <span class="meta-item meta-session">{{ post.session }}</span>

                  {% if post.epreuve %}
                    <span class="meta-item meta-epreuve">{{ post.epreuve }}</span>
                  {% endif %}

                  {% if post.duree %}
                    <span class="meta-item meta-duree">{{ post.duree }}</span>
                  {% endif %}

                  {% if post.difficulte %}
                    <span class="meta-item meta-difficulte">{{ post.difficulte }}</span>
                  {% endif %}
                </div>
              </div>
                
                {% if post.objectif %}
                  <p class="sujet-objectif">
                    {{ post.objectif }}</p>
                {% endif %}

                {% include links.html page=post %}
                
                
                {% if post.tags %}
                    <div class="prerequis-list">
                      {% for tag in post.tags %}
                        {% if site.data.variables.keywords[tag] %}
                          <a href="{{ '/tags/' | relative_url }}{{ tag | slugify }}" class="prerequis-item"> {{ site.data.variables.keywords[tag] }}</a>
                        {% endif %}
                      {% endfor %}
                    </div>
                  {% endif %}
                
              </div>
            {% endfor %}
          {% endfor %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>



<script>
// Variables globales pour suivre l'état
let currentView = 'concours';
let dropdownVisible = false;

// Fonction pour afficher un concours spécifique
function showConcours(concoursId) {
  // Masquer tous les contenus d'onglets
  var tabContents = document.querySelectorAll("#par-concours .tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Désactiver tous les boutons d'onglets
  var tabLinks = document.querySelectorAll("#par-concours .concours-tab");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  
  // Afficher le contenu de l'onglet sélectionné et activer le bouton
  document.getElementById(concoursId).style.display = "block";
  event.currentTarget.className += " active";
}

// Fonction pour afficher une session spécifique
function showSession(sessionId) {
  // Masquer tous les contenus d'onglets
  var tabContents = document.querySelectorAll("#par-session .tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Désactiver tous les boutons d'onglets
  var tabLinks = document.querySelectorAll("#par-session .concours-tab");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  
  // Afficher le contenu de l'onglet sélectionné et activer le bouton
  document.getElementById("session-" + sessionId).style.display = "block";
  event.currentTarget.className += " active";
}

// Fonction pour basculer l'affichage du menu déroulant
function toggleView(event) {
  event.stopPropagation(); // Empêcher l'événement de se propager au document
  
  // Récupérer le dropdown spécifique associé au bouton cliqué
  const dropdown = event.currentTarget.nextElementSibling;
  
  // Basculer la visibilité
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    dropdownVisible = false;
  } else {
    // Fermer tous les autres dropdowns d'abord
    document.querySelectorAll('.view-dropdown').forEach(function(el) {
      el.style.display = "none";
    });
    
    dropdown.style.display = "block";
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
    document.querySelectorAll('.view-option').forEach(function(el) {
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
    document.querySelectorAll('.view-option').forEach(function(el) {
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
  document.querySelectorAll('.view-dropdown').forEach(function(el) {
    el.style.display = 'none';
  });
  dropdownVisible = false;
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  // Définir les gestionnaires d'événements pour les boutons sandwich
  document.querySelectorAll('#switchViewBtn, #switchViewBtn2').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      toggleView(e);
    });
  });
  
  // Gestionnaires d'événements pour les options de vue
  document.querySelectorAll('.view-option').forEach(function(option) {
    option.addEventListener('click', function(e) {
      const viewType = this.textContent.trim() === 'Par concours' ? 'concours' : 'session';
      selectView(viewType, e);
    });
  });
  
  // Fermer les menus déroulants lorsqu'on clique ailleurs
  document.addEventListener('click', function() {
    if (dropdownVisible) {
      closeAllDropdowns();
    }
  });
  
  // Ouvrir l'onglet par défaut
  if (document.getElementById("defaultOpenConcours")) {
    document.getElementById("defaultOpenConcours").click();
  }
});
</script>
