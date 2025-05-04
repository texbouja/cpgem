---
layout: default
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
---

<article class="px-1">
  <header class="header-concours-titlepage">
    <h1 data-toc-skip class="concours-titlepage">
      {{ page.title }}
    </h1>
    <p class="post-desc fw-light mb-4 concours-description">
      {{ page.description }}
    </p>
  </header>

<div class="carte-generic collapsible"> <h4>Interface</h4> 
<p>L'icône
  <span class="fas fa-filter"></span>
  permet de filtrer les sujets par notions abordées et
  <span class="fas fa-bars"></span>
  de les présenter «par concours» ou «par session». </p> 

<p> L'icône
  <span class="fas fa-medal"></span>
  indique le titre d'un sujet de concours. Les autres informations du sujet figurent à droite du titre. Le titre est un lien hypertexte qui mène vers la fiche individuelle du sujet. Celle-ci peut contenir plus de détails que l'encadré dans cette page. </p> 

 <p>En bas de l'encadré du sujet, sont disponibles les liens de téléchargement et la liste des chapitres/notions abordés dans le sujet sous forme de tags qui mènent vers des pages listant toutes les publications qui abordent les mêmes notions.</p>
</div>


  <div id="concours-view" class="concours-view">
    <div id="concours-container" concours-window>
      <div class="concours-header">
        <div class="filter-switch">
          <button id="filterBtn" class="filter-button">
            <i class="fas fa-filter"></i>
          </button>
          <div class="filter-dropdown">
            <button class="filter-option active" data-filter="all">Tous les sujets</button>
            <div class="filter-separator"></div>
          <!-- Les options de filtrage seront ajoutées ici par JavaScript -->
          </div>
        </div>

        <div class="concours-tabs-container">
          <div class="concours-tabs">
            <!-- Les onglets seront ajoutés ici par JavaScript -->
          </div>
        </div>

        <div class="view-switch">
          <button id="switchViewBtn" class="view-button">
            <i class="fas fa-bars"></i>
          </button>
          <div class="view-dropdown">
            <button class="view-option active" data-view="concours">Par concours</button>
            <button class="view-option" data-view="session">Par session</button>
          </div>
        </div>
      </div>

      <div id="content-container">
        <!-- Le contenu sera généré dynamiquement par JavaScript -->
      </div>
    </div>
  </div>


</article>

<style>
  #tail-wrapper {
    display: none;
  }
</style>

<!-- ---
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

  > ### Interface
L'icône <span class="fas fa-filter"></span> permet de filtrer les sujets par partie du proramme et <span class="fas fa-bars"></span> de les présenter «par concours» ou «par session».>> L'icône <span class="fas fa-medal"></span> indique le titre d'un sujet de concours. Les autres informations du sujet figurent à droite du titre. Le titre est un lien hypertexte qui mène vers la fiche individuelle du sujet. Celle-ci peut contenir plus de détails que l'encadré dans cette page.
>
> En bas de l'encadré du sujet, sont disponibles les liens de téléchargement et la liste des chapitres/notions  abordés dans le sujet sous forme de tags qui mènent vers des pages listant toutes les publications qui abordent les mêmes notions.
{: .carte-generic .collapsible}

<div id="concours-view" class="concours-view">
  <div id="concours-container" concours-window>
    <div class="concours-header">
      <div class="filter-switch">
        <button id="filterBtn" class="filter-button">
          <i class="fas fa-filter"></i>
        </button>
        <div class="filter-dropdown">
          <button class="filter-option active" data-filter="all">Tous les sujets</button>
          <div class="filter-separator"></div>
        </div>
      </div>
      <div class="concours-tabs-container">
        <div class="concours-tabs">
        </div>
      </div>
      <div class="view-switch">
        <button id="switchViewBtn" class="view-button">
          <i class="fas fa-bars"></i>
        </button>
        <div class="view-dropdown">
          <button class="view-option active" data-view="concours">Par concours</button>
          <button class="view-option" data-view="session">Par session</button>
        </div>
      </div>
    </div>
    <div id="content-container">
    </div>
  </div>
</div>
-->