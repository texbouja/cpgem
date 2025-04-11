---
layout: post
title: Sujets de concours
description: Selection de sujets de concours avec corrigés.
order: 2
math: true
icon: fas fa-medal
tabpage: true
toc: true
toctitle: Listes des sujets 
---


> ## Note 
Chaque titre avec l'icone <span class="fas fa-medal"></span> est un lien qui renvoit vers la fiche individuelle du sujet. Celle-ci contient en général plus d'informations que l'encadré du sujet sur cette page. L'encadré en question contient une brêve description du sujet, les liens de téléchargement et les chapitres abordés sous forme de tags cliquables.
{: .carte-note}


{% assign concours_groups = site.posts | where_exp: "post", "post.concours != nil" | group_by: "concours" | sort: "name" %}

{% for concours in concours_groups %}
<div class="carte-concours" scroll="4">
<h2> {{ concours.name }} </h2>
      
      <div class="concours-content">
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
    </div>
    
  {% endfor %}

