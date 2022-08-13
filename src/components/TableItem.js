import React, {  useState } from 'react';


function TableItem(props) {

  let [customClass, setCustomClass] = useState('fa fa-star');

  function setFavourite(rank) {
    if (customClass === 'fa fa-star') {
      setCustomClass('fa fa-star checked');
    } else if (customClass === 'fa fa-star checked') {
      setCustomClass('fa fa-star');
    }
  }

  return (
    <tr>
      <td> <div onClick={()=> setFavourite(props.rank)} className='td-favourite'> <i className={customClass}></i>{props.rank}</div> </td>
      <td className='name flex-parent'> <img className='crypto-icon' src={props.icon} alt='crypto-icon'/> {props.name}</td>
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