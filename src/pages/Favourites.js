import React from 'react';
import Navbar from '../components/Navbar';

function Favourites() {

    
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
            </table>

            

        </div>
    );
}

export default Favourites;