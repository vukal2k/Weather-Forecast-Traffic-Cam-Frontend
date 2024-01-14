# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



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
- Node.js v18.17.0
- Docker


### Installation

1. Clone the repository:
```bash
git clone https://github.com/vukal2k/Weather-Forecast-Traffic-Cam-Frontend.git
cd Weather-Forecast-Traffic-Cam-Frontend
npm install
```

## Available Scripts
In the project directory, you can run:

#### Start the development server:
```bash
npm run dev
```
#### Build the app for production:
```bash
npm run build
```
#### Lint the project:
```bash
npm run lint
```
#### Preview the production build locally:
```bash
npm run preview
```

## Usage
After starting the development server, the app will be available in your browser at http://localhost:5173. You can view weather forecasts and traffic camera feeds, interact with various UI components, and explore different functionalities.

## Environment Setup
The project uses different environment files for development and production:

- `env.development`: Contains environment variables for the development environment.
- `prod.development`: Contains environment variables for the production environment.


The project uses the following environment variables:
- `VITE_BASE_URL`: The base URL of the backend API (e.g., `http://localhost:3000`).
- `VITE_FE_URL`: The URL for the frontend application (e.g., `http://localhost:5173`).
