# frozen_string_literal: true
module Jekyll
  class ConcoursDataGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Charger les variables depuis variables.yml
      variables = site.data['variables']
      
      # Structure de données optimisée
      data = {
        'baseurl' => site.config['baseurl'] || '',
        'concours_items' => {}, # Stockage principal des items par identifiant
        'principale' => [],     # Liste des identifiants pour la vue principale
        'by_tag' => {},         # Items classés par tag
        'by_concours' => {},    # Items classés par concours
        'by_session' => {}      # Items classés par session
      }
      
      # Premier passage: création des entrées individuelles
      site.posts.docs.each do |post|
        next unless post.data['concours']
        
        pdf_base = post.data['pdf_basename']
        item_id = pdf_base # Utiliser pdf_basename comme identifiant unique
        
        # Vérifier l'existence des fichiers PDF
        pdf_path = File.join(site.source, 'assets', 'pdf')
        
        pdf_links = {}
        ['original', 'report', 'print', 'tablet', 'phone'].each do |type|
          filename = "#{pdf_base}_#{type}.pdf"
          if File.exist?(File.join(pdf_path, filename))
            pdf_links["download_#{type}"] = File.join(site.baseurl, 'assets', 'pdf', filename)
          end
        end
        
        # Traduire les tags
        tags = []
        if post.data['tags'].is_a?(Array)
          tags = post.data['tags'].map do |tag|
            {
              'slug' => tag,  # pour l'URL
              'name' => variables['keywords'][tag] || tag  # pour l'affichage
            }
          end
        end
        
        # Concours normalisé
        concours_name = variables['concours-shortnames'][post.data['concours']] || post.data['concours']
        
        # Construire l'objet item
        item_data = {
          'title' => post.data['title'],
          'url' => File.join(site.baseurl, post.url),
          'concours' => concours_name,
          'session' => post.data['session'],
          'filiere' => post.data['filiere'],
          'epreuve' => post.data['epreuve'],
          'tags' => tags,
          'pdfbasename' => pdf_base,
          'objectif' => post.data['objectif'] || []
        }.merge(pdf_links)
        
        # Stocker l'item dans la structure principale
        data['concours_items'][item_id] = item_data
        
        # Ajouter à la liste principale
        data['principale'] << item_id
        
        # Classement par tag
        if post.data['tags'].is_a?(Array)
          post.data['tags'].each do |tag|
            data['by_tag'][tag] ||= []
            data['by_tag'][tag] << item_id
          end
        end
        
        # Classement par concours
        data['by_concours'][concours_name] ||= []
        data['by_concours'][concours_name] << item_id
        
        # Classement par session
        session = post.data['session']
        if session
          data['by_session'][session] ||= []
          data['by_session'][session] << item_id
        end
      end
      
      # Créer le répertoire de sortie s'il n'existe pas
      output_dir = File.join(site.dest, 'assets', 'data')
      FileUtils.mkdir_p(output_dir)
      
      # Écrire le fichier JSON - avec mode 'w' pour écraser
      output_path = File.join(output_dir, 'concours_data.json')
      File.open(output_path, 'w') do |file|
        file.write(JSON.pretty_generate(data))
      end
      
            
      Jekyll.logger.info "ConcoursDataGenerator:", "Données de concours générées (#{data['principale'].size} items)"
    end 
  end
end