import React from 'react';

function TableHeader() {
    return (
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
);
}

export default TableHeader