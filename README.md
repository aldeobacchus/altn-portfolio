# Jules Moynat Portfolio (Vue.js & Tailwind CSS)

## Project Goal

This project aims to create a modern, responsive, and interactive online portfolio for Jules Moynat, showcasing their work and professional profile. It will be built using Vue.js for dynamic content and Tailwind CSS for a utility-first styling approach.

## Features

- **Personal Bio & CV:** Comprehensive sections detailing studies, professional experience, talks, and musical mixes.
- **Content Toggle:** A mechanism to switch between the main bio/CV content and an interactive image gallery.
- **Interactive Image Gallery:**
  - Dynamically loaded images.
  - Randomized sizing and positioning of images.
  - Infinite scroll functionality for continuous image loading.
  - Clickable images with descriptive overlays.
  - Draggable images for user interaction.

## Layout

- **Header :** Header layout shown in every view. It should present theses informations :
  - Name
  - A button to switch between CV-Home view and the Feed view
  - Information about the artist
  - Links to social media
- **Global view :** Global view handle dynamically

## Views

The website only has two view that should not use a route but should be handle dynamically.

- **CV View :** This view is also the Home view. It should show the global information about Jules Moynat
- **Feed View :** This is the dynamically loaded view which show all the cards of the works on which Jules worked

## Key Technical Considerations

- **Technology Stack:** Vue.js for the frontend framework and Tailwind CSS for styling.

## Setup and Development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## File Structure

```
altn-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.vue
│   │   │   └── Card.vue
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   └── Layout.vue
│   │   ├── sections/
│   │   │   ├── Description.vue
│   │   │   └── PortfolioSection.vue
│   │   └── specific/
│   │       ├── PortfolioItem.vue
│   │       ├── SocialLinks.vue
│   │       └── SwitchView.vue
│   ├── router/
│   │   └── index.ts
│   ├── stores/
│   │   └── counter.ts
│   ├── views/
│   │   ├── CVView.vue
│   │   └── FeedView.vue
│   ├── App.vue
│   └── main.ts
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.json
├── env.d.ts
├── eslint.config.ts
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── ... (other configuration and build files)
```

## Component Explanation

- **`public/`**: Contains static assets like `favicon.ico`.
- **`src/`**: The main source code directory.
  - **`assets/`**: Stores static assets such as CSS files (`base.css`, `main.css`) and images (`logo.svg`).
  - **`components/`**: Reusable Vue components.
    - **`common/`**: Generic, highly reusable components.
      - **`Button.vue`**: A common button component.
      - **`Card.vue`**: A generic card component for displaying content.
    - **`layout/`**: Components related to the overall page structure.
      - **`Header.vue`**: The header component, displayed across all views.
      - **`Layout.vue`**: The main layout component that structures the application.
    - **`sections/`**: Components representing distinct sections of a page.
      - **`Description.vue`**: Component for displaying descriptive text.
      - **`PortfolioSection.vue`**: Component to display a section of the portfolio and handle the logic of the images generated.
    - **`specific/`**: Components with more specific functionality or usage.
      - **`PortfolioItem.vue`**: Displays an individual item within the portfolio.
      - **`SocialLinks.vue`**: Component for displaying social media links.
      - **`SwitchView.vue`**: A component to switch between different views (e.g., CV and Feed).
  - **`router/`**: Contains Vue Router configuration. (Not used)
    - **`index.ts`**: Defines the application's routes.
  - **`stores/`**: Vuex or Pinia stores for state management.
    - **`counter.ts`**: An example store (e.g., for a counter).
  - **`views/`**: Top-level components representing different pages or views of the application.
    - **`CVView.vue`**: The main CV/Home view component.
    - **`FeedView.vue`**: The component for the interactive image gallery/feed.
  - **`App.vue`**: The root Vue component that orchestrates the entire application.
  - **`main.ts`**: The entry point of the Vue application, where the app is initialized and mounted.
- **Configuration Files**:
  - `.editorconfig`, `.gitattributes`, `.gitignore`, `.prettierrc.json`, `env.d.ts`, `eslint.config.ts`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`: Various configuration files for code style, Git, TypeScript, PostCSS, Tailwind CSS, and Vite.
  - `index.html`: The main HTML file served by the application.
  - `package-lock.json`, `package.json`: Node.js package manager files, defining project dependencies and scripts.
  - `README.md`: This file, providing project information.


## Features ideas

- Les images doivent avoir une taille donnée dans leur métadonnées, small, medium, large ou peut importe de manière a ce que l'on puisse choisir de forcer une image a etre petite ou grande comparé aux autres