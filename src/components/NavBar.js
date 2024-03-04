import React from 'react'
import resort from '../assets/resort.png';
function NavBar(){
return(
    <div className="navbar">
    <div className='navrect'>
    <img src= {resort} className='resort'/>
    </div>
    </div>
);

}

export default NavBar;