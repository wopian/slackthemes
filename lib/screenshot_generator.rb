require 'lib/screenshot'

class ScreenshotGenerator < ::Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
    app.before_build do |builder|
      builder.say "==> Theme thumbnail generator started", :pink
      Screenshot.prepare

      themes.each do |theme|
        Screenshot.new(theme).generate_theme_image(builder)
      end
      builder.say "==> Theme thumbnail generator finished", :lightgreen
    end
  end
end

::Middleman::Extensions.register(:screenshot_generator, ScreenshotGenerator)
