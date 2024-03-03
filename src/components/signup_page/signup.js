import React from 'react'
import './signup.css';

function Signup(){
 return <div className="loginform">
    <div className="loginbg">
    <div className="loginheader"></div>
            <form>
           <div className="emailgrp">
           
           <h2 className="emailtxt">Email</h2>
            <div className="email"> <input  type='email'/></div>
            </div>


            <div className="pas1sgrp">
          
            <h2 className="pass1txt">Paswsord</h2>
            <div className="pass1"> <input type='password'/>
            </div>
            </div>
            

            <div className="loginbtn">
                <h2 className="login">Login</h2>
                <input type='submit'/>
            </div>

            <h2 className="signup">
                dont have a account? sign up
            </h2>
            </form>
        </div>
    </div>
 
}


export default Signup;
