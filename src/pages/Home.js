import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import TableItem from '../components/TableItem';


function Home() {

  const cryptoUrl = `https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD`;
  let [cryptoArray, setCryptoArray] = useState([]);
  let [sortOrder, setSortOrder] = useState('ASC');

  function fetchCryptoData(url) {
    axios.get(url)
    .then(res=> {
        setCryptoArray(res.data.coins)
    })
  }

  useEffect(()=> {
    fetchCryptoData(cryptoUrl)
    }, []);

  function sortByKey(array, key) {
    return array.sort((a, b)=>
  {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }

  function sorter(key) {
    if (sortOrder === 'ASC') {
      var sortedCryptoArray = [...sortByKey(cryptoArray, key)];
      setCryptoArray(sortedCryptoArray);
      setSortOrder('DSC');
    } else if (sortOrder === 'DSC') {
      var sortedCryptoArray = [...sortByKey(cryptoArray, key).reverse()];
      setCryptoArray(sortedCryptoArray);
      setSortOrder('ASC');
    }
  }

    return (
        <div className='home'>
          <Navbar />
          <table className='crypto-table table'>
            <thead>
              <tr>
                <th onClick={()=> sorter('rank')}>RANK</th>
                <th onClick={()=> sorter('name')}>NAME</th>
                <th onClick={()=> sorter('price')}>PRICE</th>
                <th onClick={()=> sorter('marketCap')}>MARKET CAP</th>
                <th onClick={()=> sorter('volume')}>VOLUME</th>
                <th onClick={()=> sorter('totalSupply')}>SUPPLY</th>
                <th onClick={()=> sorter('priceChange1h')}>PRICE CHANGE(1h)</th>
                <th onClick={()=> sorter('priceChange1d')}>PRICE CHANGE(1d)</th>
                <th onClick={()=> sorter('priceChange1w')}>PRICE CHANGE(1w)</th>
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