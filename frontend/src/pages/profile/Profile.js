import React, { useState } from 'react'
import './profile.css'
import Post from '../../components/post/Post.js'

import gordon from '../../assets/gordon.png'
import spaghetti from '../../assets/spaghetti.jpeg'
import closeIcon from '../../assets/close-icon.svg';
import gearIcon from '../../assets/gear-icon.svg';

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

const numPosts = 4;
const numFollowers = 20;
const numFollowing = 13;

function handleClick(){
    alert("XD");
}

function handleFollowers(){

}




function Profile() {

    const [ photoHovered, setPhotoHovered ] = useState(false);

    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className = "profileContainer">

            <div className = "profileContent"> {/* grid layout */}

                <section className="profileLeft">
                    <div className = "profileLeftContent">

                        <div className = "profileBox">

                            <img 
                                src={gearIcon} 
                                alt=""
                                className="gearIcon"
                                onClick={() => setShowSettings(true)}
                            />


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

                                <div className="profileStats">

                                    <li>
                                        <div className="statSection">
                                            <h3>{numPosts}</h3> posts
                                        </div>
                                    </li>
                                    <li>
                                        <button className="statSection" onClick={() => setShowFollowers(true)}>
                                            <h3>{numFollowers}</h3> followers
                                        </button>
                                    </li>
                                    <li>
                                        <button className="statSection" onClick={() => setShowFollowing(true)}>
                                            <h3>{numFollowing}</h3> following
                                        </button>
                                    </li>

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

            <div 
                className="opacBackground"
                style={{
                    display: showFollowers ? 'flex' : 'none'
            }}>

                <div className="followContainer">

                    <div 
                        className="followersContent"
                        style={{
                            display: showFollowers ? 'block' : 'none'
                        
                    }}>
                        <div className="followersHeader">
                            <h2>Followers</h2>
                            <hr/>
                            <img 
                                src={closeIcon} 
                                alt=""
                                className="closeIcon"
                                onClick={() => setShowFollowers(false)}
                            />
                        </div>
                        <ul id="followersList" className="followersList">

                            <li>
                                <img src={gordon} alt=""/>
                                <h3>Gordon Ramsay</h3>
                                <button>Unfollow</button>
                            </li>

                            <li>
                                <img src={gordon} alt=""/>
                                <h3>Gordon Ramsay</h3>
                                <button>Unfollow</button>
                            </li>

                        </ul>
                    </div> {/* followersContent */}
                </div> {/* followContainer */}
            </div> {/* opacBackground */}


            <div 
                className="opacBackground"
                style={{
                    display: showFollowing ? 'flex' : 'none'
            }}>
                <div className="followContainer">
                    <div 
                        className="followingContent"
                        style={{
                            display: showFollowing ? 'block' : 'none'
                        
                    }}>
                        <div className="followersHeader">
                            <h2>Following</h2>
                            <hr/>
                            <img 
                                src={closeIcon} 
                                alt=""
                                className="closeIcon"
                                onClick={() => setShowFollowing(false)}
                            />
                        </div>
                        <ul id="followersList" className="followersList">

                            <li>
                                <img src={gordon} alt=""/>
                                <h3>Gordon Ramsay</h3>
                                <button>Unfollow</button>
                            </li>

                            <li>
                                <img src={gordon} alt=""/>
                                <h3>Gordon Ramsay</h3>
                                <button>Unfollow</button>
                            </li>

                        </ul>
                    </div> {/* followingContent */}
                </div> {/* followContainer */}
            </div> {/* opacBackground */}

            <div 
                className="opacBackground"
                style={{
                    display: showSettings ? 'flex' : 'none'
            }}>
                <div className="followContainer">
                    <div 
                        className="settingsContent"
                        style={{
                            display: showSettings ? 'block' : 'none'
                        
                    }}>
                        <div className="followersHeader">
                            <h2>Settings</h2>
                            <hr/>
                            <img 
                                src={closeIcon} 
                                alt=""
                                className="closeIcon"
                                onClick={() => setShowSettings(false)}
                            />
                        </div>

                    </div> {/* followingContent */}
                </div> {/* followContainer */}
            </div> {/* opacBackground */}

        </div> 
    )
}

export default Profile