import React from 'react'
import './post.css'

import likeIcon from '../../assets/like.png'
import chocolatechipcookies from '../../assets/chocolatechipcookies.jpeg'
import cookiePic1 from '../../assets/chocolatechipcookies.jpeg'
import gordon from '../../assets/gordon.png'


const Post = ({ 
    userPic, 
    user, 
    datePosted, 
    title, 
    servings, 
    prepTime,
    cookTime,
    ingredients, 
    image, 
    directions,
    likes 
    }) => {

     const upperTitle = title.toUpperCase();

    return (
        <>
            <div className="postContainer">
                <div className="postContent">
                    <section className="postRow">
                        <a href="/profile">
                            <img src={userPic} alt="" className="postThumbnail"/>
                        </a>

                        
                        <label className="postUsername">&nbsp;{user}&nbsp;</label>
                        <div className="postDate">posted {datePosted} minutes ago</div>

                    </section>

                    <hr className="topBar"/>

                    <section className="postColumnGrid">
                        <div className="postLeftColumn">

                            <section className="columnSection">
                                <label className="postTitle">{upperTitle}</label>

                                <hr className="columnBar"/>

                                <ul className="cookInfo">
                                    <li className="servings">Servings: {servings}</li>
                                    <li className="prepTime">Prep Time: {prepTime}min</li>
                                    <li className="cookTime">Cook Time: {cookTime}min</li>
                                </ul>

                            </section>

                            <section className="columnSection">
                                <label className="postTitle">INGREDIENTS</label>

                                <hr className="columnBar"/>

                                <ul className="cookInfo">
                                    {ingredients.map( element => {
                                        return (
                                            <li>{element}</li>
                                        )
                                    })}
                                </ul>

                            </section>

                        </div>

                        <div className="postRightColumn">
                            <img src={image} alt="" className="foodImage"/>
                        </div>

                    </section>


                    <section className="directions">

                        <label className="postTitle directionHeader">DIRECTIONS</label>
                        <hr className="columnBar"/>


                        
                        <ol className="directionList">
                            {directions.map( element => {
                                return (
                                    <li className="directionStep">. {element}</li>
                                )
                            })}
                        </ol>


                    </section>



                    <section className="postRow">
                        <img src={likeIcon} alt="" className="likeIcon"/>
                        <p className="postNumLikes">&nbsp; {likes} people liked this</p>
                    </section>

                </div>
            </div>

        </>
    )
}

export default Post