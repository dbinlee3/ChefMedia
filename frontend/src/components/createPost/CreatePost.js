import React from 'react'
import { useRef } from 'react'

/*
userPic, 
user, 
datePosted, 
title, 
cookInfo = {
    servings: 6,
    prepTime: 45,
    cookTime: 60,
    coolTime: 45
},
ingredients = [
    1, 2, 3
]
image, 
directions = [

],

likes 
*/

function CreatePost() {

    const title = useRef();
    const servings = useRef();
    const prepTime = useRef();
    const cookTime = useRef();
    const coolTime = useRef();


    return (
        <div className="createContainer">
            {/* <form className="createForm" onSubmit={handleSubmit}> */}
            <form className="createForm">

                <div className="createFormField">
                    <label>Title</label>
                    <input type="text" id="title" className="title" ref={title} required />
                </div>

                <div className="createFormField">
                    <label>Servings</label>
                    <input type="text" id="servings" className="servings" ref={servings} required />
                </div>

                <div className="createFormField">
                    <label>Prep Time</label>
                    <input type="text" id="prepTime" className="prepTime" ref={prepTime} required />
                </div>

                <div className="createFormField">
                    <label>Cook Time</label>
                    <input type="text" id="cookTime" className="cookTime" ref={cookTime} required />
                </div>

                <div className="createFormField">
                    <label>Cool Time</label>
                    <input type="text" id="coolTime" className="coolTime" ref={coolTime} required />
                </div>

                {/* <div className="createFormField">
                    <label>Ingredients</label>
                    <input type="text" id="ingredients" className="ingredients" required />
                </div>

                <div className="createFormField">
                    <label>Directions</label>
                    <input type="text" id="directions" className="directions" required />
                </div> */}

                <button id="submitPost" type="button">Submit</button>

            </form>
        </div>
    )
}

export default CreatePost
