
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Navigation from './pages/Responsive navbar pure css/Navigation';
import AllUser from './pages/AllUser/AllUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/home" element={<Home />} >
          </Route>
          <Route path="/allUser" element={<AllUser />} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
