module Jekyll
    class ConcoursTagsGenerator < Generator
      safe true
      priority :low
  
      def generate(site)
        concours_posts = site.posts.docs.select { |post| post.data['concours'].is_a?(String) }
        concours_tags = {}
  
        concours_posts.each do |post|
          next unless post.data['tags'].is_a?(Array)
  
          post.data['tags'].each do |tag|
            concours_tags[tag] ||= []
            concours_tags[tag] << post
          end
        end
  
        site.config['concourstags'] = concours_tags
      end
    end
  end