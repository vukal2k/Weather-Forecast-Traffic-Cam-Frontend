import './App.css'
import {
  BrowserRouter as Router, // Import BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import { ROUTES } from '@/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider  client={queryClient}>
      <Router>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
