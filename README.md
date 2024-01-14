# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Weather Forecast Traffic Cam

## Description

Weather Forecast Traffic Cam is a web application providing real-time weather forecasts and traffic camera visuals. This project leverages modern web technologies for a responsive and intuitive user experience.

## Key Features

- Weather forecast display
- Traffic camera integration for live traffic updates
- Responsive and user-friendly interface

## Technologies Used

- React for the frontend
- Ant Design (antd) for UI components
- FontAwesome for icons
- Day.js and Moment.js for date/time handling
- Axios for API requests
- Vite for build tooling and development server
- Tailwind CSS for styling
- React Query for data fetching
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic understanding of React and TypeScript

### Installation

1. Clone the repository:

   ```bash
   git clone [repository URL]
