import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Favourites from "./pages/Favourites"; 
import { FavouriteContext } from "./contexts/FavouriteContext";
import { useState } from "react";

function App() {

  let [favouriteCryptoArray, setFavouriteCryptoArray] = useState([]);

  return (
    <div className="App">
      <FavouriteContext.Provider value={{favouriteCryptoArray, setFavouriteCryptoArray}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </FavouriteContext.Provider>
    </div>
  );
}

export default App;
