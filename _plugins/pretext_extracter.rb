# _plugins/extract_filters.rb

# généré par DeepSeek 
require 'nokogiri'

module Jekyll
  module ExtractFilters
    def extract(input, selector)
      elements = extract_elements(input, selector)
      elements.empty? ? nil : elements.first
    end

    def extract_all(input, selector)
      elements = extract_elements(input, selector)
      elements.empty? ? nil : elements
    end

    private

    def extract_elements(input, selector)
      return [] if input.to_s.strip.empty? || selector.to_s.strip.empty?

      begin
        doc = Nokogiri::HTML5(input, max_errors: 10)
        elements = doc.css(selector)

        elements.map do |element|
          {
            "attrs"   => element.to_html.match(/<#{element.name}\s*(.*?)\s*>/m)[1].to_s.strip,
            "content" => element.inner_html(save_with: Nokogiri::XML::Node::SaveOptions::AS_HTML).strip
          }
        end

      rescue => e
        Jekyll.logger.error "Extract Error: #{e.message}" if Jekyll.env == "development"
        []
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ExtractFilters)




# require 'nokogiri'

# module Jekyll
#   module ExtractFilters
#     def extract(input, selector)
#       extract_elements(input, selector).first || { "attrs" => "", "content" => "" }
#     end

#     def extract_all(input, selector)
#       extract_elements(input, selector)
#     end

#     private

#     def extract_elements(input, selector)
#       return [] if input.to_s.strip.empty? || selector.to_s.strip.empty?

#       begin
#         doc = Nokogiri::HTML5(input, max_errors: 10)
#         elements = doc.css(selector)

#         elements.map do |element|
#           {
#             "attrs"   => element.to_html.match(/<#{element.name}\s*(.*?)\s*>/m)[1].to_s.strip,
#             "content" => element.inner_html(save_with: Nokogiri::XML::Node::SaveOptions::AS_HTML).strip
#           }
#         end

#       rescue => e
#         Jekyll.logger.error "Extract Error: #{e.message}" if Jekyll.env == "development"
#         [{ "attrs" => "", "content" => input.to_s }]
#       end
#     end
#   end
# end

# Liquid::Template.register_filter(Jekyll::ExtractFilters)



# # _plugins/extract_filter.rb
# require 'nokogiri'

# module Jekyll
#   module ExtractFilter
#     def extract(input, selector)
#       return ["", ""] if input.to_s.strip.empty? || selector.to_s.strip.empty?

#       begin
#         # Parsing avec configuration simplifiée
#         doc = Nokogiri::HTML5(input, max_errors: 10)
#         element = doc.at_css(selector)

#         if element
#           # Extraction des attributs (version robuste)
#           tag_html = element.to_html
#           attrs_string = tag_html.match(/<#{element.name}\s*(.*?)\s*>/m)[1].to_s.strip

#           # Extraction du contenu
#           content = element.inner_html(save_with: Nokogiri::XML::Node::SaveOptions::AS_HTML).strip

#           [attrs_string, content]
#         else
#           ["", ""]
#         end

#       rescue => e
#         Jekyll.logger.error "Extract Error: #{e.message}" if Jekyll.env == "development"
#         ["", input.to_s]
#       end
#     end
#   end
# end

# Liquid::Template.register_filter(Jekyll::ExtractFilter)