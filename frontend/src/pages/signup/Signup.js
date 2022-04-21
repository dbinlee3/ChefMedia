import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <>
            <div className="signupContainer">
                <div className="signupWrapper">
                    <div className="signupLeft">
                        <h3 className="chefLogo">ChefMedia</h3>
                        <span className="signupDescription">
                            Connect with friends and the world of cooking, recipes and more.
                        </span>
                    </div> {/* end signupLeft */}

                    <div className="signupRight">
                        <div className="signupBox">
                            <input placeHolder="Email" className="signupInput"/>
                            <input placeHolder="Username" className="signupInput"/>
                            <input placeHolder="Password" className="signupInput"/>
                            <input placeHolder="Retype Password" className="signupInput"/>
                            <a className="alreadyUser" href="./login">Already a user? Login!</a>
                            <button className="signupButton">Sign up</button>
                        </div> {/* end signupBox */}
                    </div> {/* end signupRight */}
                </div> {/* end signupWrapper */}
            </div> {/* end signupContainer */}
        </>
    )
}

export default Signup
