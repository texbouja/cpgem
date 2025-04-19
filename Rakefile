require 'jekyll'

# Configuration modifiable
DEFAULT_THEME = 'nord'  # Valeur par défaut mais surchargeable

task :data do
    puts "⚙️  Génération des données concours..."
    load 'templates/bin/concours_data.rb'
  end

task :images, [:theme, :force] do |t, args|
  theme = args[:theme] || DEFAULT_THEME
  force_flag = args[:force] ? ' --force' : ''
  
  puts "🖼️  Génération des images (thème: #{theme}#{force_flag})"
  system("ruby templates/bin/posts_images.rb #{theme}#{force_flag}") || fail("Échec de la génération des images")
end

namespace :generate do
  # Tâche pour les données concours
  task :data do
    puts "⚙️  Génération des données concours..."
    load 'templates/bin/concours_data.rb'
  end

  # Tâche pour les images avec paramètres flexibles
  task :images, [:theme, :force] do |t, args|
    theme = args[:theme] || DEFAULT_THEME
    force_flag = args[:force] ? ' --force' : ''
    
    puts "🖼️  Génération des images (thème: #{theme}#{force_flag})"
    system("ruby templates/bin/posts_images.rb #{theme}#{force_flag}") || fail("Échec de la génération des images")
  end
end

# Tâche build configurable
task :build, [:theme, :force] => ['generate:data'] do |t, args|
  # Appel de la tâche images avec les paramètres
  Rake::Task['generate:images'].invoke(args[:theme], args[:force])
  
  puts "🏗  Construction du site avec Jekyll..."
  sh 'bundle exec jekyll build'
end

# Exemples d'utilisation :
# rake build                     # Utilise le thème par défaut sans --force
# rake build[choco]              # Avec thème 'choco' sans --force
# rake build[choco,true]         # Avec thème 'choco' ET --force