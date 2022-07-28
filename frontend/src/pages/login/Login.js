import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

import video1 from '../../assets/video3.mp4'

import './login.css'

function Login() {

  const [ user, setUser ] = useState({});
 
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
 
    document.getElementById("googleBox").hidden = true;
  }
 
  function handleSignOut(event) {
    setUser({});
    document.getElementById("googleBox").hidden = false;
  }
 
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "915079553483-83jgvbmrf6cgrs3kf47n3tegjq1v4ul9.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
 
    google.accounts.id.renderButton(
      document.getElementById("googleBox"),
      {theme: "outline", size: "large"}
    );
  }, []);


  return (
   <>
    <div className="loginContainer">

      <video src={video1} autoPlay loop muted />

        <div className="loginBox">
          <div className="loginContent">
            <h3 className="cheflogo">Pantri</h3>

            <div className="googleBox" id="googleBox"></div>
            { Object.keys(user).length != 0 &&
 
              <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }
            
            { user && 
              <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
              </div>
            }


          </div>
        </div>
    </div>

  
   </>
  )

}

export default Login
