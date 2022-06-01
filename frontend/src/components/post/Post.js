import React from 'react'
import './post.css'
import likeIcon from '../../assets/like.png'

// to reuse code from "Home.js" file
// using Props in JSX
const Post = ( { user, userPic, datePosted, title, cookInfo, ingredients, image, directions, likes } ) => {

  // Making the food names all uppercase letters
  const upperTitle = title.toUpperCase();

  return (
    <>

        <div className="postContainer">

            {/* Overall Post Content */}
            <div className="postContent">

                {/* Post Heading */}
                <section className="postRow">

                    <img src={userPic} alt="" className="postThumbnail" />
                    <label className="postUsername">&nbsp;{user}&nbsp;</label>
                    <div className="postDate">posted {datePosted} minutes ago</div>

                </section>
                
                {/* Horizontal Bar */}
                <hr className = "topBar"/>

                {/* Left and Right column */}
                <section className="postColumnGrid">
                    
                    {/* Left column */}
                    <div className="postLeftColumn">
                        
                        {/* Food Name and Cooking Information */}
                        <section className="columnSection">
                            <label className="postTitle">{upperTitle}</label>
                        
                            <hr className = "columnBar"/>

                            <ul className="cookInfo"> 
                                <li>Servings: {cookInfo.servings}</li>
                                <li>Prep Time: {cookInfo.prepTime}&nbsp;min</li>
                                <li>Cook Time: {cookInfo.cookTime}&nbsp;min</li>
                                <li>Cool Time: {cookInfo.coolTime}&nbsp;min</li>
                            </ul>
                        </section>
                        
                        {/* Ingredients Section */}
                        <section className="columnSection">

                            <label className="postTitle">INGREDIENTS</label>

                            {/* Horizontal Bar */}
                            <hr className = "columnBar"/>

                            {/* we are iterating through each element in the const variable given */}
                            <ul className="cookInfo">
                                {ingredients.map(element => {
                                    return (
                                        <li>{element}</li>
                                    )
                                })}
                            </ul>

                        </section>

                    </div>
                    
                    {/* Image for right column */}
                    <div className="postRightColumn">
                        <img src={image} alt="" className="foodImage" />
                    </div>

                </section>
                
                {/* Cooking Directions */}
                <section className="directions">

                    <label className="postTitle">DIRECTIONS</label>
                    
                    {/* Horizontal Bar */}
                    <hr className = "columnBar"/>

                    {/* we are iterating through each element in the const variable given */}
                    <ol className="directionList">
                        {directions.map(element => {
                            return (
                                <li className = "directionStep">. {element}</li>
                            )
                        })}
                    </ol>

                </section>
                
                {/* likes and number of likes */}
                <section className="postRow">
                    <img src={likeIcon} alt="" className="postThumbnail" />
                    <p className="postNumLikes">&nbsp; {likes} people liked this</p>
                </section>
                
            </div>

        </div>
    
    </>
  )
}

export default Post
