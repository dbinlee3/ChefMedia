import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

import './TestForm.css';

//const TestForm = ( {createFlag2} ) => { 

function TestForm( {onClickProp} ) {



// function TestForm( createFlag ) {

    const [postData, setPostData] = useState({
        title: '',
        servings: '',
        prepTime: '',
        cookTime: '',
        ingredients: [],
        directions: []
    })


    const dispatch = useDispatch(); //allows us to use useDispatch() from redux

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refresh from browser
        dispatch(createPost(postData)); //pass all the date from useState
    }

    var selectServings = useRef();


    return (


        <div className="testFormContainer">

            <button className="closeButton" onClick={() => onClickProp(false)}>X</button>
            <form autoComplete="off" noValidate className="testForm" onSubmit={handleSubmit}>

                <div className="testFormField">
                    <h3>1.</h3>
                    <label>What's cooking?</label>
                    <input
                        name="title"
                        type="text"
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                </div>

                <hr/>

                <div className="testFormField">
                    <h3>2.</h3>
                    <label>Let's put in some info...</label>
                    <ul className="cookInfoList">
                        <li>
                            <label>How many servings?</label>
                            <select 
                                name="Servings" 
                                ref={selectServings}
                                value={postData.servings}
                                onChange={(e) => setPostData({ ...postData, servings: e.target.value })}></select>
                        </li>
                        <li>Any prep time?</li>
                        <li>What's the cook time?</li>
                    </ul>



                    <input
                        name="servings"
                        type="text"
                        value={postData.servings}
                        onChange={(e) => setPostData({ ...postData, servings: e.target.value })}
                    />
                </div>

                <div className="testFormField">
                    <label>Prep Time</label>
                    <input
                        name="prepTime"
                        type="text"
                        value={postData.prepTime}
                        onChange={(e) => setPostData({ ...postData, prepTime: e.target.value })}
                    />
                </div>

                <div className="testFormField">
                    <label>Cook Time</label>
                    <input
                        name="cookTime"
                        type="text"
                        value={postData.cookTime}
                        onChange={(e) => setPostData({ ...postData, cookTime: e.target.value })}
                    />
                </div>

                <div className="testFormField">
                    <label>Ingredients</label>
                    <input
                        name="ingredients"
                        type="text"
                        value={postData.ingredients}
                        onChange={(e) => setPostData({ ...postData, ingredients: e.target.value })}
                    />
                </div>

                <div className="testFormField">
                    <label>Directions</label>
                    <input
                        name="directions"
                        type="text"
                        value={postData.directions}
                        onChange={(e) => setPostData({ ...postData, directions: e.target.value })}
                    />
                </div>


                <button type="submit" onClick={() => onClickProp(false)}>Submit</button>


            </form>

        </div>


    )
}

export default TestForm
