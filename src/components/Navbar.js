import React from 'react';

function Navbar() {
    return (
        <nav className='nav'>
            <div className='site-title'>
            <i className="fa-solid fa-coins"></i>
            Crypto Casa
            </div>
            <ul>
                <li>Favourites</li>
                <li>Latest News</li>
            </ul>
        </nav>
        
    );
}

export default Navbar


