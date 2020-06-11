# Material Slack Themes

[![web badge]][web]
[![uptime badge]][web]
[![travis badge]][travis]
[![cc maintainability badge]][cc maintainability]
[![cc debt badge]][cc debt]
[![cc loc badge]][cc loc]

Forked from [Slack Themes] to offer Material compliant colour schemes for [Slack]

![][SOLID]![][DARK]![][LIGHT]

## Contributing

PRs are welcome for new Material themes.

To add a new theme:
- Edit [themes.yml]
- Add your theme under the most suitable type (Solid, Dark or Light)
- Specify the primary colour's shade as defined by the [Material Guidelines]

## Development

### Requirements

- Ruby >= 2.3
- RubyGems >= 2.6
- Bundler >= 1.13
- PhantomJS

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
[web badge]:https://flat.badgen.net/uptime-robot/status/m779740458-09508685f3ffd31c4acd254b
[uptime badge]:https://flat.badgen.net/uptime-robot/month/m779740458-09508685f3ffd31c4acd254b

[travis]:https://travis-ci.org/wopian/material-slackthemes
[travis badge]:https://flat.badgen.net/travis/wopian/material-slackthemes

[cc maintainability]:https://codeclimate.com/github/wopian/material-slackthemes
[cc maintainability badge]:https://flat.badgen.net/codeclimate/maintainability/wopian/material-slackthemes

[cc debt]:https://codeclimate.com/github/wopian/material-slackthemes
[cc debt badge]:https://flat.badgen.net/codeclimate/tech-debt/wopian/material-slackthemes

[cc loc]:https://codeclimate.com/github/wopian/material-slackthemes
[cc loc badge]:https://flat.badgen.net/codeclimate/loc/wopian/material-slackthemes
