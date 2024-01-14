import './App.css';

import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router, // Import BrowserRouter
  Route,
  Routes,
} from 'react-router-dom';

import { ROUTES } from '@/routes';

import withAPIKey from './hoc/withAPIKey';

const queryClient = new QueryClient();
const Context = React.createContext({});

function App() {
  return (
    <div className="border-t-4 border-indigo-500 shadow-lg">
      <ErrorBoundary>
        <Context.Provider value={{}}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Routes>
                {ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Router>
          </QueryClientProvider>
        </Context.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default withAPIKey(App);
