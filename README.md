# Material Slack Themes

Forked from [Slack Themes](https://github.com/paracycle/slackthemes) to offer Material compliant colour schemes for [Slack](https://slack.com)

![](https://slack.wopian.me/images/theme/solid_blue-6f94867241eeffec0554f8fa28ad63ba.png)![](https://slack.wopian.me/images/theme/dark_blue-4bf6c39560350f5f35e4831d208daa06.png)![](https://slack.wopian.me/images/theme/light_blue-51e59a44420473473b3ac4dcf60c6348.png)

## Contributing

PRs are welcome for new Material themes.

To add a new theme:
- Edit [themes.yml](https://github.com/wopian/material-slackthemes/blob/master/data/themes.yml)
- Add your theme under the most suitable type (Light, Dark or Solid)
- Specify the primary colour's shade as defined by the [Material Guidelines](https://material.io/guidelines/style/color.html#color-color-palette)

## Development
[![Travis]][0]
[![Code Climate Score]][1]
[![Code Climate Issues]][2]
[![Version Eye]][3]

### Setup
```bash
# Check Ruby 2.3 or newer is installed
ruby -v
# Check Bundler 1.13 or newer is installed
bundle -v
# Check RubyGems 2.6 or newer is installed
gem -v
# Install gems
bundle install
```

### Building
```bash
bundle exec middleman build
```

[Travis]: https://img.shields.io/travis/wopian/material-slackthemes.svg?style=flat-square&label=travis
[Code Climate Score]: https://img.shields.io/codeclimate/github/wopian/material-slackthemes.svg?style=flat-square
[Code Climate Issues]: https://img.shields.io/codeclimate/issues/github/wopian/material-slackthemes.svg?style=flat-square
[Version Eye]: https://www.versioneye.com/user/projects/56c63c6118b271003b3925f7/badge.svg?style=flat-square

[0]: https://travis-ci.org/wopian/material-slackthemes
[1]: https://codeclimate.com/github/wopian/material-slackthemes
[2]: https://codeclimate.com/github/wopian/material-slackthemes/issues
[3]: https://www.versioneye.com/user/projects/56c63c6118b271003b3925f7
