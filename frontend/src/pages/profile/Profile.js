import React, { useState } from 'react'
import './profile.css'

import gordon from '../../assets/gordon.png'
import PostOne from '../../components/post/PostOne.js'
import PostTwo from '../../components/post/PostTwo.js'

function Profile() {

    const [ photoHovered, setPhotoHovered ] = useState(false);

    return (
        <div className = "profileContainer">

            <div className = "profileContent"> {/* grid layout */}

                <section className="profileLeft">

                    <div className = "profileLeftContent">

                        <div className = "profileBox">

                            <div className = "bioContent">

                                <h2 className = "username">Gordon Ramsay</h2>
                                
                                <div className="profileButton">
                                    <img 
                                        className = "profilePic" 
                                        src = {gordon} 
                                        alt = "" 
                                        onMouseEnter={e => {
                                            setPhotoHovered(true)
                                        }}
                                        onMouseLeave={e => {
                                            setPhotoHovered(false)
                                        }}
                                    />

                                    <p 
                                        className="changePhoto"
                                        style={ photoHovered ? {display: "block"} : {display: "none"} }
                                    >
                                    Change Profile Photo
                                    </p>

                                </div>

                                <div className = "bioBox">
                                    <ul className = "bioList">
                                        <li className = "bioEntry">Name: </li>
                                        <li className = "bioEntry">Age: </li>
                                        <li className = "bioEntry">Bio: </li>
                                    </ul>
                                </div>

                            </div>

                        </div> 

                    </div> {/* profileLeft */}

                </section>

                <section className="profileRight">
                    <div className = "profileRightContent">
                        <PostOne />
                        
                        <PostTwo />

                    </div> 

                </section> {/* profileRight */}


            </div> {/* profileContent */}

        </div> 
    )
}

export default Profile