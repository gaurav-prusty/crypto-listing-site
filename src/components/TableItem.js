import React from 'react';

function TableItem(props) {
    return (
      <tr>
        <td>{props.rank}</td>
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