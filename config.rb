require 'lib/screenshot_generator'
require 'ostruct'
require 'dotenv'
Dotenv.load

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload

  activate :google_analytics do |ga|
    ga.disable = true
  end
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

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

  activate :google_analytics do |ga|
    # Property ID (default = nil)
    ga.tracking_id = ENV['ANALYTICS_ID'] || 'TEST_GA_TRACKING_ID'
    ga.enhanced_link_attribution = true
    ga.minify = true
  end
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
