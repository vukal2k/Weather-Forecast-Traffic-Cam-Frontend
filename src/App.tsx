import './App.css'
import {
  BrowserRouter as Router, // Import BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import { ROUTES } from '@/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import React from 'react';

const queryClient = new QueryClient();
const Context = React.createContext({});

function App() {
  return (
    <div className='shadow-lg border-t-4 border-indigo-500'>
      <ErrorBoundary>
      <Context.Provider value={{}}>
        <QueryClientProvider  client={queryClient}>
          <Router>
              <Routes>
                {ROUTES.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
          </Router>
        </QueryClientProvider>
        </Context.Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App
