require 'lib/screenshot'

# Initialize thumbnail builder
class ScreenshotGenerator < ::Middleman::Extension
  def initialize(app, options_hash = {}, &block)
    super
    app.before_build do |builder|
      builder.say '==> Theme thumbnail generator started', :green
      Screenshot.prepare

      themes.each do |theme|
        Screenshot.new(theme).generate_theme_image(builder)
      end
      builder.say '==> Theme thumbnail generator finished', :green
    end
  end
end

::Middleman::Extensions.register(:screenshot_generator, ScreenshotGenerator)
