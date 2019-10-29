# Off Guard Games website

This site has the [Timber plugin](https://wordpress.org/plugins/timber-library/) installed so that templating can be done in Twig. This allows us to make use of pattern/design library tools, such as Emulsify or Storybook.

## Requirements

- [lando](https://docs.lando.dev/basics/installation.html#system-requirements) for local development.
- [node js](https://nodejs.org/en/)

## Installation

- `lando start` to build the local environment
- Install database from live OR set up your own WP (activate the `offguardgames` theme and the plugins).
- `cd wordpress/wp-content/themes/offguardgames/`
- `npm i` or `yarn` to install dependencies.

## Updating the Theme

Everything is written in plain CSS, so no compiling is needed. Just add new files to `styles.css`

The HTML for the pages are all in the `template` folder and are written in Twig.

## Storybook

Some of the components for the site have been put into Storybook so that the components can be reviewed and tested separate from the site.

To see this is in action, from the theme directory run `npm run storybook`
