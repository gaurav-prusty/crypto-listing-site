import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import TableItem from '../components/TableItem';


function Home() {

  const cryptoUrl = `https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD`;
  let [cryptoArray, setCryptoArray] = useState([]);


  function fetchCryptoData(url) {
    axios.get(cryptoUrl)
    .then(res=> {
        setCryptoArray(res.data.coins)
    })
  }

  useEffect(()=> {
    fetchCryptoData(cryptoUrl)
    }, [])

  //cryptoArray.map(coin=> console.log(coin));

    return (
        <div className='home'>
          <Navbar />
          <table className='crypto-table table'>
            <thead>
              <tr>
                <th>RANK</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>MARKET CAP</th>
                <th>VOLUME</th>
                <th>SUPPLY</th>
                <th>PRICE CHANGE (1h)</th>
                <th>PRICE CHANGE (1d)</th>
                <th>PRICE CHANGE (1w)</th>
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