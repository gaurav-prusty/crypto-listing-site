import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Favourites from "./pages/Favourites"; 
import { useState } from "react";

function App() {

  let [favouriteCryptoArray, setFavouriteCryptoArray] = useState([]);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </div>
  );
}

export default App;
