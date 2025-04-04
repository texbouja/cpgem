Jekyll::Hooks.register :documents, :pre_render do |doc|
    if doc.data["layout"] == "concours" && doc.data["theme"]
      # Force le titre en écrasant la valeur auto-générée
        if doc.data["theme"]
            doc.data["title"] = doc.data["theme"]
        end
    end
  end