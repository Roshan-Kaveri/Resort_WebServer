import React from 'react'
import resort from '../login_page/asssets/resort.png';
import './login.css';
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