import React from 'react'

import video1 from '../../assets/video3.mp4'

import './login.css'

function Login() {
  return (
   <>
    <div className="loginContainer">

      <video src={video1} autoPlay loop muted />

        <div className="loginBox">
          <div className="loginContent">
            <h3 className="cheflogo">Pantri</h3>


            <input className="textBox" type="text" placeholder="Username" />

            <input className="textBox" type="text" placeholder="Password"/>

            <div>
              <a className="notUser" href="./signup">Not a user? Register!</a>
            </div>



            <button className="loginButton" type="button">
              Login
            </button>
          </div>


        </div>
    </div>

  
   </>
  )

}

export default Login
