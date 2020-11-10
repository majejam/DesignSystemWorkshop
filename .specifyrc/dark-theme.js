require('dotenv').config()

module.exports = {
  repository: process.env.SPECIFY_REPOSITORY_DARK,
  personalAccessToken: process.env.SPECIFY_TOKEN,
  rules: [
    {
      name: 'Colors / Dark Theme',
      path: 'assets/styles/01-utils/variables/colors/_dark-theme.scss',
      filter: {
        types: ['color'],
      },
      parsers: [
        {
          name: 'kebabcasify',
          options: {
            keys: ['name'],
          },
        },
        {
          name: 'to-css-custom-properties',
          options: {
            formatConfig: {
              selector: ":root[data-theme='dark']",
            },
          },
        },
      ],
    },
  ],
}
