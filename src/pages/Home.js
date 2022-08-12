import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Home() {

    return (
        <div className='home'>
          <Navbar />
          <table className='crypto-table'>
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
          </table>
        </div>
    );
}

export default Home;