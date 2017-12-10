# Material Slack Themes

[![web badge]][web]
[![uptime badge]][web]
[![donate badge]][donate]


Forked from [Slack Themes] to offer Material compliant colour schemes for [Slack]

![][SOLID]![][DARK]![][LIGHT]

## Contributing

PRs are welcome for new Material themes.

To add a new theme:
- Edit [themes.yml]
- Add your theme under the most suitable type (Solid, Dark or Light)
- Specify the primary colour's shade as defined by the [Material Guidelines]

## Development
[![travis badge]][travis]
[![gemnasium badge]][gemnasium]
[![cc maintainability badge]][cc maintainability]

### Requirements

- Ruby >= 2.3
- RubyGems >= 2.6
- Bundler >= 1.13

### Building
```bash
bundle install
bundle exec middleman build
```

[Slack]:https://slack.com
[Slack Themes]:https://github.com/paracycle/slackthemes
[Material Guidelines]:https://material.io/guidelines/style/color.html#color-color-palette
[themes.yml]:https://github.com/wopian/material-slackthemes/blob/master/data/themes.yml

[SOLID]:https://slack.wopian.me/images/theme/solid_blue-6f94867241eeffec0554f8fa28ad63ba.png
[DARK]:https://slack.wopian.me/images/theme/dark_blue-4bf6c39560350f5f35e4831d208daa06.png
[LIGHT]:https://slack.wopian.me/images/theme/light_blue-51e59a44420473473b3ac4dcf60c6348.png

[web]:https://slack.wopian.me
[web badge]:https://img.shields.io/website-up-down-green-red/https/slack.wopian.me.svg?style=flat-square
[uptime badge]:https://img.shields.io/uptimerobot/ratio/7/m779740458-09508685f3ffd31c4acd254b.svg?style=flat-square

[travis]:https://travis-ci.org/wopian/material-slackthemes
[travis badge]:https://img.shields.io/travis/wopian/material-slackthemes.svg?style=flat-square

[gemnasium]:https://gemnasium.com/github.com/wopian/material-slackthemes
[gemnasium badge]:https://img.shields.io/gemnasium/wopian/material-slackthemes.svg?style=flat-square

[cc maintainability]:https://codeclimate.com/github/wopian/material-slackthemes
[cc maintainability badge]:https://img.shields.io/codeclimate/maintainability/wopian/material-slackthemes.svg?style=flat-square

[donate]:https://paypal.me/pools/c/7ZZSVeBON7
[donate badge]:https://img.shields.io/badge/£-donate-ff69b4.svg?style=flat-square
