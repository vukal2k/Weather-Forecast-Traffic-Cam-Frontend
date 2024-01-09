import './App.css'
import {
  BrowserRouter as Router, // Import BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import { ROUTES } from '@/routes';

function App() {
  return (
    <Router>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
      </Routes>
    </Router>
  )
}

export default App
