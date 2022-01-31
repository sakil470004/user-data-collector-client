
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>

          </Route>
          <Route path="/home" element={<Home/>} >

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
