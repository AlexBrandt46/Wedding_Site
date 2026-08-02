# React + TypeScript + Vite

**CI/CD:**

[![Deployed with GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github%20Pages&logoColor=white)](https://alexbrandt46.github.io/Wedding_Site)

[![YAML](https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515)](https://yaml.org/)

**Frontend:**

![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)

[![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com)

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)

**Backend:**

[![Made with Supabase](https://supabase.com/badge-made-with-supabase.svg)](https://supabase.com)

**Languages:**

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
 globalIgnores(['dist']),
 {
  files: ['**/*.{ts,tsx}'],
  extends: [
   // Other configs...

   // Remove tseslint.configs.recommended and replace with this
   tseslint.configs.recommendedTypeChecked,
   // Alternatively, use this for stricter rules
   tseslint.configs.strictTypeChecked,
   // Optionally, add this for stylistic rules
   tseslint.configs.stylisticTypeChecked,

   // Other configs...
  ],
  languageOptions: {
   parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
   },
   // other options...
  },
 },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
 globalIgnores(['dist']),
 {
  files: ['**/*.{ts,tsx}'],
  extends: [
   // Other configs...
   // Enable lint rules for React
   reactX.configs['recommended-typescript'],
   // Enable lint rules for React DOM
   reactDom.configs.recommended,
  ],
  languageOptions: {
   parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
   },
   // other options...
  },
 },
]);
```

# TO-DO

1. See if `roboto` package can be removed
2. 