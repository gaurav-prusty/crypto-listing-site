import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Favourites from "./pages/Favourites"; 
import { FavouriteContext } from "./contexts/FavouriteContext";
import { useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { FavouriteArrayContext } from "./contexts/FavouriteArrayContext";

function App() {

  let [favouriteCryptoArray, setFavouriteCryptoArray] = useState([]);
  let [cryptoArray, setCryptoArray] = useState([]);
  let [favouriteArray, setFavouriteArray] = useState(Array(30).fill(false));

  return (
    <div className="App">
      <FavouriteArrayContext.Provider value={{favouriteArray, setFavouriteArray}}>
      <MainContext.Provider value={{cryptoArray, setCryptoArray}}>
      <FavouriteContext.Provider value={{favouriteCryptoArray, setFavouriteCryptoArray}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </FavouriteContext.Provider>
      </MainContext.Provider>
      </FavouriteArrayContext.Provider>
    </div>
  );
}

export default App;
