import React, { useContext, useState } from 'react';
import { FavouriteArrayContext } from '../contexts/FavouriteArrayContext';
import { FavouriteContext } from '../contexts/FavouriteContext';
import { MainContext } from '../contexts/MainContext';

function TableItem(props) {
  let {favouriteCryptoArray, setFavouriteCryptoArray} = useContext(FavouriteContext);
  let {cryptoArray} = useContext(MainContext);
  let {favouriteArray, setFavouriteArray} = useContext(FavouriteArrayContext);

  
  //manage favourite items array
  function setFavourite(rank) {
    

    if(favouriteCryptoArray.some(coin=> coin.rank === rank)) {
      favouriteCryptoArray.pop(cryptoArray.find(coin=> coin.rank === rank));        //remove favourite item
      setFavouriteCryptoArray([...favouriteCryptoArray]);
      favouriteArray[rank - 1] = false;
      setFavouriteArray([...favouriteArray]);
      console.log({removalArray: favouriteArray});
    } else {
      favouriteCryptoArray.push(cryptoArray.find(coin=> coin.rank === rank));       //add favourite item
      setFavouriteCryptoArray([...favouriteCryptoArray]);
      favouriteArray[rank - 1] = true;
      setFavouriteArray([...favouriteArray]);
      console.log({addedArray: favouriteArray});
    }
  }

  return (
    <tr>
      <td> <div onClick={()=> setFavourite(props.rank)} className='td-favourite'> <i className={favouriteArray[props.rank - 1] ? 'fa fa-star checked' : 'fa fa-star'}></i>{props.rank}</div> </td>
      <td className='name flex-parent'> <img className='crypto-icon' src={props.icon} /> {props.name}</td>
      <td>${parseFloat(props.price).toFixed(2)}</td>
      <td>${(Math.abs(props.marketCap) / 1e9).toFixed(2)} B</td>
      <td>${(Math.abs(props.volume) / 1e9).toFixed(2)} B</td>
      <td>${(Math.abs(props.totalSupply) / 1e6).toFixed(2)} M</td>

      <td className= {props.priceChange1h < 0 ? 'red' : 'green'}>{parseFloat(props.priceChange1h).toFixed(2)}%</td>

      <td className= {props.priceChange1d < 0 ? 'red' : 'green'}>{parseFloat(props.priceChange1d).toFixed(2)}%</td>

      <td className= {props.priceChange1w < 0 ? 'red' : 'green'}>{parseFloat(props.priceChange1w).toFixed(2)}%</td>
    </tr>
  );
}

export default TableItem;