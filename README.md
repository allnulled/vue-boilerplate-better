# vue2-boilerplate-better

Vue.js (v2) project boilerplate with some interesting features included.

## Index

- [vue2-boilerplate-better](#vue2-boilerplate-better)
  - [Index](#index)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Watchdog for CSS](#watchdog-for-css)
    - [Watchdog for JS](#watchdog-for-js)
    - [Create new translation](#create-new-translation)
    - [Create new utility](#create-new-utility)
    - [Create new route](#create-new-route)
    - [Create new component](#create-new-component)
    - [Modify styles](#modify-styles)
    - [Reuse zcomponents](#reuse-zcomponents)

## Features

These are the main features that make interesting this project:

 - Internationalization - [`i18next`](https://github.com/i18next/i18next) + [`vue-i18next`](https://github.com/panter/vue-i18next)
 - Routing - [`vue-router`](https://github.com/vuejs/vue-router)
 - Local database - [`dexie`](https://github.com/dexie/Dexie.js) + [`dexie-relationships`](https://github.com/ignasbernotas/dexie-relationships)
 - Local storage - [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
 - AJAX - [`axios`](https://github.com/axios/axios)
 - Push notifications - [`push.js`](https://github.com/Nickersoft/push.js/)
 - Checkings - [`@allnulled/check-that`](https://github.com/allnulled/check-that)
 - UI utilities - [`vue-draggable`](https://github.com/SortableJS/Vue.Draggable)
 - Navigation
 - Badges
 - Dialogs
 - Customizable styles
 - Customizable utilities
 - Landing screen
 - Application metadata
 - Roboto font by default
 - Others...

## Installation

Clone the repo in a fresh directory, then from console: `npm install`

## Usage

### Watchdog for CSS

Run from console: `npm run dev-styles`

### Watchdog for JS

Run from console: `npm run serve`

### Create new translation

Go to `src/i18n/translation/{ Language ISO }.js` and add a new key.

### Create new utility

Go to `src/utils` and create a new file with your utility. Then go to `src/utils/all.js` and add it too from there.

### Create new route

Go to `src/routes/factory` and create a new route.

### Create new component

Go to `src/components` and create a new folder (in camel-case). Then inside, create your component file (in CapitalCase) with the `.vue` extension, and code there your component.

### Modify styles

Go to `src/styles/all.scss` and add your file, then save it. If you are running `npm run dev-styles`, the Sass files will be compiled automatically.

### Reuse zcomponents

The `zcomponents` library is a kit of user-interface web components coded for Vue.js (v2) and based on `win7.css` too. They will provide you a basic setup for user-interface building that is already familiar to the user.

See [zcomponents](./src/components/zcomponents/zcomponents.md) to know more.