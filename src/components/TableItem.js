import React from 'react';

function TableItem(props) {
    return (
        <tr>
          <td>{props.rank}</td>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.marketCap}</td>
          <td>{props.volume}</td>
          <td>{props.totalSupply}</td>
          <td>{props.priceChange1h}</td>
          <td>{props.priceChange1d}</td>
          <td>{props.priceChange1w}</td>
        </tr>
    );
}

export default TableItem