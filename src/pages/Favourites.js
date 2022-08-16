import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import TableItem from '../components/TableItem';
import { FavouriteContext } from '../contexts/FavouriteContext';

function Favourites() {

    let {favouriteCryptoArray, setFavouriteCryptoArray} = useContext(FavouriteContext);

    
    return (
        <div className='favourites'>
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
                        <th>PRICE CHANGE(1h)</th>
                        <th>PRICE CHANGE(1d)</th>
                        <th>PRICE CHANGE(1w)</th>
                    </tr>
                </thead>
                <tbody>
                    {favouriteCryptoArray.map((coin, index)=> <TableItem key={index} id={index} rank={coin.rank} icon={coin.icon} name={coin.name} price={coin.price} marketCap={coin.marketCap} volume={coin.volume} totalSupply={coin.totalSupply} priceChange1h={coin.priceChange1h} priceChange1d={coin.priceChange1d} priceChange1w={coin.priceChange1w} />)}
                </tbody>
            </table>

            

        </div>
    );
}

export default Favourites;