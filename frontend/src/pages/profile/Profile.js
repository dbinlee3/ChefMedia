import React, { useState } from 'react'
import './profile.css'
import Post from '../../components/post/Post.js'

import gordon from '../../assets/gordon.png'
import spaghetti from '../../assets/spaghetti.jpeg'

// Spaghetti Post
const spaghettiCookInfo = {
    servings: 6,
    prepTime: 10,
    cookTime: 10,
    coolTime: 5
};

const spaghettiIngredients =  [
    "Box of Spaghetti Noodles",
    "Fresh Home Made Tomato Sauce",
    "1-2 Pounds of Ground Beef",
    "Salt",
    "Water",
    "Basil Leaves",
    "Cheese"
]

const spaghettiDirections = [
    "Boil 6 quarts of water", 
    "Add 3 tablespoons of salt",
    "Add in the pasta in boiling water and stir gently occasionally",
    "Taste the pasta then drain when cooked",
    "Stir in the tomato sauce",
    "Add in the pasta water to get the right sauce consistency"
]

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
                                        <li className = "bioEntry">Age: 55</li>
                                        <li className = "bioEntry">Bio: It's row.</li>
                                    </ul>
                                </div>
                            </div>

                        </div> 
                    </div> {/* profileLeft */}

                </section>

                <section className="profileRight">
                    <div className = "profileRightContent">
                    {/* Gordan Ramsay Post */}
                        <Post
                            user = "Gordan Ramsay"
                            userPic = {gordon}
                            datePosted = "21"
                            title = "spaghetti" 
                            cookInfo={spaghettiCookInfo}
                            ingredients = {spaghettiIngredients}
                            directions = {spaghettiDirections}
                            image = {spaghetti}
                            likes = "76"
                        />         

                    </div> 

                </section> {/* profileRight */}


            </div> {/* profileContent */}

        </div> 
    )
}

export default Profile