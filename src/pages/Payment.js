import React from 'react'
import image from '../components/login_page/asssets/bg.png';
import { useState } from 'react';
import Paysucc from './Paysucc';


function Payments() {
    const[openModal, setOpenModal] = useState(false);
    return <div className="p_c">
        <img src={image} alt="" />
        <div className="p_rectangle1">
            <h1 className="p_c1">
                INVOICES
            </h1>
            <textarea placeholder="" className='p_textarea'></textarea>
            <div className="p_rectangle"></div>
            <div className='p_pass'>
                <p><b>CARD NO:</b> <input type="password" id="p_password" name="password" required></input></p>
            </div>
            <div className='p_pass1'>
        <b>CVV:</b> <input type="password" id="p_password1" name="password1" pattern="[0-9]{3}" title="Please enter a valid CVV (3 digits)"></input>
                <b>EXPIRY:</b> <input type="text" name="text" id="p_text" required></input>
            </div> <input className = "p_submit" type="submit" value="PAY NOW" onClick={() => {setOpenModal(true);}}></input></div>
            {openModal && <Paysucc closeModal={setOpenModal}/>}
    </div>
}
export default Payments;