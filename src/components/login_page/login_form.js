import React from 'react'
import { Link } from "react-router-dom";

function LoginForm(){
 return <div className="loginform">
    <div className="loginbg">
    <div className="loginheader"></div>
            <form>
           <div className="emailgrp">
           
           <h2 className="emailtxt">Email</h2>
            <div className="email"> <input  type='email' required   /></div>
            </div>


            <div className="passgrp">
          
            <h2 className="passtxt">Paswsord</h2>
            <div className="pass"> <input type='password' required/>
            </div>
            </div>
            

            <div className="loginbtn">
                <h2 className="login">Login</h2>
                <input type='submit'/>
            </div>
            <Link to="/signup">
            <h2 className="login_signupbtn">
                dont have a account? sign up
            </h2>
            </Link>
            </form>
        </div>
    </div>
 
}


export default LoginForm;
