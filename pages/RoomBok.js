
import React, { useState } from 'react';
import '../components/BookRoom/Roombok.css';
import image from '../assets/image.png';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
function ROOM_BOOK() {
    return <div className="Bc">
         <div class="rectangle"></div>
        <img src={image} alt="" />
        <div class="Brectangle1">
            <h1 className="Bc1">
                Have A Great Day!!
            </h1>
            <div className='Bpass1'>
        <b>Check In:</b> <input type="date" id="text1" name="text1" ></input>
                <b>Check Out:</b> <input type="date" name="text" id="text" required></input></div>
                <div className='Bt'><b>Room No:</b> <input type="text" id="text1" name="text1" ></input>
                <b>Status:</b> <input type="text" id="text2" name="text2" ></input>
                </div>
                <div className='Bim1'><img src={image1} alt="" /></div>
                <div className='Bs'><input type="submit"id='Bsub' value="BOOK ROOM"></input></div>
                </div> 
            </div>    
}
export default ROOM_BOOK;