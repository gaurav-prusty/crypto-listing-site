import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import TableItem from '../components/TableItem';
import { MainContext } from '../contexts/MainContext';
import { FavouriteArrayContext } from '../contexts/FavouriteArrayContext';

function Home() {
  const cryptoUrl = `https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD`;

  let {cryptoArray, setCryptoArray} = useContext(MainContext);
  let {setFavouriteArray} = useContext(FavouriteArrayContext);
  
  let [sortOrder, setSortOrder] = useState('ASC');
  let [customClass, setCustomClass] = useState('');
  let [displaySortIcon, setDisplaySortIcon] = useState(Array(9).fill('none'));

  let headEnum = {'rank': 0, 'name': 1, 'price': 2, 'marketCap': 3, 'volume': 4, 'totalSupply': 5, 'priceChange1h': 6, 'priceChange1d': 7, 'priceChange1w': 8};

  //fetch Cryptocurrency Data!
  function fetchCryptoData(url) {
    axios.get(url)
    .then(res=> {
        setCryptoArray(res.data.coins);
    })
  }

  useEffect(()=> {
    fetchCryptoData(cryptoUrl);
    console.log('Data Fetched!');
    }, []);

    

  function sortByKey(array, key) {
    return array.sort((a, b)=>
    {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    }

  function sorter(key) {
    var temp = Array(9).fill('none');
    temp[headEnum[key]] = 'block';
    setDisplaySortIcon([...temp]);

    if (sortOrder === 'ASC') {
      setCustomClass("fa-solid fa-sort-down");
      var sortedCryptoArray = [...sortByKey(cryptoArray, key)];
      setCryptoArray(sortedCryptoArray);
      setSortOrder('DSC');
    } else if (sortOrder === 'DSC') {
      setCustomClass("fa-solid fa-sort-up");
      var sortedCryptoArray = [...sortByKey(cryptoArray, key).reverse()];
      setCryptoArray(sortedCryptoArray);
      setSortOrder('ASC');
    }

    console.log({sortedArray: cryptoArray});
    
  }

    return (
        <div className='home'>
          <Navbar />
          <table className='crypto-table table'>
            <thead>
              <tr>
                <th onClick={()=> sorter('rank')}><i className={customClass} style={{display: displaySortIcon[0]}} ></i> RANK</th>
                <th onClick={()=> sorter('name')}><i className={customClass} style={{display: displaySortIcon[1]}} ></i>NAME</th>
                <th onClick={()=> sorter('price')}><i className={customClass} style={{display: displaySortIcon[2]}} ></i>PRICE</th>
                <th onClick={()=> sorter('marketCap')}><i className={customClass} style={{display: displaySortIcon[3]}} ></i>MARKET CAP</th>
                <th onClick={()=> sorter('volume')}><i className={customClass} style={{display: displaySortIcon[4]}} ></i>VOLUME</th>
                <th onClick={()=> sorter('totalSupply')}><i className={customClass} style={{display: displaySortIcon[5]}} ></i>SUPPLY</th>
                <th onClick={()=> sorter('priceChange1h')}><i className={customClass} style={{display: displaySortIcon[6]}} ></i>PRICE CHANGE(1h)</th>
                <th onClick={()=> sorter('priceChange1d')}><i className={customClass} style={{display: displaySortIcon[7]}} ></i>PRICE CHANGE(1d)</th>
                <th onClick={()=> sorter('priceChange1w')}><i className={customClass} style={{display: displaySortIcon[8]}} ></i>PRICE CHANGE(1w)</th>
              </tr>
            </thead>
            <tbody>
              {cryptoArray.map((coin, index)=> <TableItem key={index} id={index} rank={coin.rank} icon={coin.icon} name={coin.name} price={coin.price} marketCap={coin.marketCap} volume={coin.volume} totalSupply={coin.totalSupply} priceChange1h={coin.priceChange1h} priceChange1d={coin.priceChange1d} priceChange1w={coin.priceChange1w} />)}
            </tbody>
          </table>
        </div>
    );
}

export default Home;