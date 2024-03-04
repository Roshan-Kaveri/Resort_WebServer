import React from 'react'
import image from '../assets/image.png';
function Payments() {
    return <div className="c">
        <img src={image} alt="" />
        <div class="rectangle1">
            <h1 className="c1">
                INVOICES
            </h1>
            <textarea placeholder=""></textarea>
            <div class="rectangle"></div>
            <div className='pass'>
                <p><b>CARD NO:</b> <input type="password" id="password" name="password" required></input></p>
            </div>
            <div className='pass1'>
        <b>CVV:</b> <input type="password" id="password1" name="password1" pattern="[0-9]{3}" title="Please enter a valid CVV (3 digits)"></input>
                <b>EXPIRY:</b> <input type="text" name="text" id="text" required></input>
            </div> <input type="submit" value="PAY NOW"></input></div>
    </div>
}
export default Payments;