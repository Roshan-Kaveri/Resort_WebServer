import React from 'react'
import './signup.css';
import { Link } from "react-router-dom";

function Signup(){
 return <div className="loginform">
    <div className="signupbg">
    <div className="loginheader"></div>
            <form>
               <div className="signUp_list">
           <div className="signup_email">
           <h2 className="signup_emailtxt" >Email</h2>
            <div className="signup_email_inp"> <input  type='email' required/></div>
            </div>
            <div className="signup_email">
           <h2 className="signup_emailtxt">Password</h2>
            <div className="signup_email_inp"> <input  type='password' required/></div>
            </div>
            <div className="signup_email">
           <h2 className="signup_emailtxt">Name</h2>
            <div className="signup_email_inp"> <input  type='text' required/></div>
            </div>
            <div className="signup_email">
           <h2 className="signup_emailtxt">Ph.No</h2>
            <div className="signup_email_inp"> <input  type='tel'required/></div>
            </div>
            <div className="signup_email">
           <h2 className="signup_emailtxt">Address</h2>
            <div className="signup_email_inp"> <input  type='text' required/></div>
            </div>
            </div> 
            <div className="signupbtn">
                <h2 className="signup">SignUp</h2>
                <input type='submit'/>
            </div>
            <Link to="/login">
            <h2 className="signup_loginbtn">
                dont have a account? sign up
            </h2>
            </Link>
            </form>
        </div>
    </div>
 
}


export default Signup;
