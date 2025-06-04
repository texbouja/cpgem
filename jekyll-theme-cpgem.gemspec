# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-cpgem"
  spec.version       = "0.1"
  spec.authors       = ["Sadik Boujiada"]
  spec.email         = ["ibouja@gmail.com"]

  spec.summary       = "A feature-rich Jekyll theme for technical writing based on the awesome jekyll-theme-chripy."
  spec.homepage      = "https://github.com/texbouja/jekyll-theme-cpgem"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f|
    f.match(%r!^((_(includes|layouts|sass|(data\/(locales|origin)))|assets)\/|README|LICENSE)!i)
  }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/texbouja/jekyll-theme-cpgem/issues",
    "documentation_uri" => "https://github.com/texbouja/jekyll-theme-cpgem/#readme",
    "source_code_uri"   => "https://github.com/texbouja/jekyll-theme-cpgem",
    "plugin_type"       => "theme"
  }

  spec.required_ruby_version = "~> 3.1"

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-include-cache", "~> 0.2"

end
