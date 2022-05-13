import React from 'react'
import './profile.css'

import gordon from '../../assets/gordon.png'
import Post from '../../components/post/Post.js'

function Profile() {
    return (
        <div className = "profileContainer">

            <div className = "profileContent"> {/* grid layout */}

                <div className = "profileLeft">

                    <div className = "profileBox">

                        <div className = "bioContent">

                            <h2 className = "username">Gordon Ramsay</h2>
                            
                            <img className = "profilePic" src = {gordon} alt = ""></img>

                            <div className = "bioBox">
                                <ul className = "bioList">
                                    <li className = "bioEntry">Name: </li>
                                    <li className = "bioEntry">Age: </li>
                                    <li className = "bioEntry">Bio: </li>
                                </ul>
                            </div>

                        </div> {/* bioContent */}

                    </div> {/* profileBox */}

                </div> {/* profileLeft */}

                <div className = "profileRight">
                    <Post />
                    
                </div> {/* profileRight */}

            </div> {/* profileContent */}

        </div> 
    )
}

export default Profile
