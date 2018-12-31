# Treehouse Vue
> :frog: My Vue projects at Treehouse.

These are the project apps from the Vue Basics course. The course is intended to show the Vue syntax
when working on a traditional HTML website. I've updated them to be SPAs built with Vue CLI, and
added Vue Router, Vuex, Fetch, Linting, and Unit/E2E Testing.

This repository uses Lerna so apps can share dependencies.

## Installation

```bash
git clone https://github.com/adamelliotfields/treehouse-vue.git

cd treehouse-vue

# Lerna will bootstrap the projects after installation
npm install
```

## Running (Development)

```bash
# Flashcard app
npm run serve:flashcard

# Library app
npm run serve:library
```

## Building (Production)

```bash
# Flashcard app
npm run build:flashcard

# Library app
npm run build:library
```

## Linting (ESLint)

```bash
# Flashcard app
npm run lint:flashcard

# Library app
npm run lint:library
```

## Unit Testing (Jest)

```bash
# Flashcard app
npm run unit:flashcard

# Library app
npm run unit:library
```

## E2E Testing (Cypress)

```bash
# Flashcard app
npm run e2e:flashcard

# Library app
npm run e2e:library
```
