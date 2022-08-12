import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
