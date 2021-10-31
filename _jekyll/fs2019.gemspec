# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "fs2019"
  spec.version       = "0.1.0"
  spec.authors       = ["ArtemSer"]
  spec.email         = ["artem.sierikov@gmail.com"]

  spec.summary       = "Learn FS with this conspect"
  spec.homepage      = "https://fs2019.tk"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_data|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
