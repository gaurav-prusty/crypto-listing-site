import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    function goToFavourites() {
        navigate('/favourites');
    }

    return (
        <nav className='nav'>
            <div onClick={goToHome} className='site-title'>
            <i className="fa-solid fa-coins"></i>
            Crypto Casa
            </div>
            <ul>
                <li onClick={goToFavourites} >Favourites</li>
                <li onClick={(goToHome)} >Latest News</li>
            </ul>
        </nav>
        
    );
}

export default Navbar


