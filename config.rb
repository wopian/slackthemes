require 'lib/screenshot_generator'
require 'ostruct'
require 'dotenv'
Dotenv.load

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :screenshot_generator

  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.method = :git
end if ENV['ANALYTICS_ID']

helpers do
  def themes
    data.themes.sort_by { |theme| [theme['type'], theme['shade'], theme['name']] }.map do |theme|
      OpenStruct.new(theme.merge(
                       name: theme['name'],
                       shade: theme['shade'],
                       type: theme['type'],
                       slug: theme['type'].parameterize.underscore + '_' + theme['name'].parameterize.underscore + (theme['shade'] == '' ? '' : '_') + theme['shade'],
                       digest: Digest::MD5.new.hexdigest(theme['colors'])
      ))
    end
  end
end
