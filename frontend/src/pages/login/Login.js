import React from 'react'
import myVideo from '../../assets/video4.mp4'

import './login.css'
import { Link } from 'react-router-dom';


function Login() {
    return (
        <>
            <div className="loginContainer">

                <video src={myVideo} autoPlay loop muted />

                <h3 className="chefLogo">ChefMedia</h3>


                <div className="usernameContainer">
                    <label className="textField">Username: </label>
                    <input type="text" />
                </div>

                <div className="passwordContainer">
                    <label className="textField">Password: </label>
                    <input type="text" />
                </div>

                <Link to="/">
                    <button className="loginButton" type="button">
                        Login
                    </button>
                </Link>


            </div>

        </>
    )
}

export default Login
