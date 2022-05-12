import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

import './Signup.css'
import video6 from '../../assets/video6.mp4'

function Signup() {

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const retypePassword = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        if (retypePassword.current.value !== password.current.value){
            retypePassword.current.setCustomValidity("Passwords don't match!");
        }
        else {
            const user = {
                email: email.current.value,
                username: username.current.value,
                password: password.current.value,
            };
            try {
                console.log("Hello");
                await axios.post("/auth/register", user);
                navigate("/login");
            }
            catch(err) {
                console.log(err)
            }
            
        }
    }



    return (
        <>
            <div className="signupContainer">
                <video src={video6} autoPlay loop muted />
                <div className="content">
                    <div className="signupWrapper">

                        <div className="signupLeft">
                            <div className="signupBox">
                                <h3 className="chefLogo">ChefMedia</h3>
                                <span className="signupDescription">
                                    Connect with friends and the world of cooking, recipes and more.
                                </span>
                            </div>
                        </div> {/* end signupLeft */}

                        <div className="signupRight">
                            <form className="signupBox" onSubmit={handleClick}>

                                {/* Email Input */}
                                <input 
                                    type="email"
                                    placeHolder="Email" 
                                    required 
                                    ref={email} 
                                    className="signupInput"
                                />
                                
                                {/* Username Input */}
                                <input 
                                    placeHolder="Username" 
                                    required 
                                    ref={username} 
                                    className="signupInput"
                                />

                                {/* Password Input */}
                                <input 
                                    placeHolder="Password" 
                                    required
                                    ref={password} 
                                    className="signupInput"
                                    type="password" 
                                    minLength="6"
                                />

                                {/* Retype Password Input */}
                                <input 
                                    placeHolder="Retype Password" 
                                    required
                                    ref={retypePassword} 
                                    className="signupInput"
                                    type="password" 
                                />

                                <a className="alreadyUser" href="./login">Already a user? Login!</a>
                                <button className="signupButton" type="submit">Sign up</button>
                            </form> {/* end signupBox */}
                        </div> {/* end signupRight */}

                    </div> {/* end signupWrapper */}
                </div> {/* end content */}
            </div> {/* end signupContainer */}
        </>
    )
}

export default Signup
