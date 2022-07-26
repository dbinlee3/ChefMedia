import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

import './testForm.css';

//const TestForm = ( {createFlag2} ) => { 

function TestForm() {



// function TestForm( createFlag ) {

    const [postData, setPostData] = useState({
        user: '',
        title: '',
        servings: '',
        prepTime: '',
        cookTime: '',
        ingredients: [],
        directions: []
    })


    const [closeFlag, setCloseFlag] = useState(false);


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refresh from browser
        dispatch(createPost(postData)); //pass all the date from useState
    }




    function toggleClose() {

        // if (createFlag2) {
        //     closeFlag = createFlag2;
        // }

        // closeFlag = !(closeFlag);
    }

                // style={
            //     closeFlag ?
            //         {display: "flex"} :
            //         {display: "none"}
            // }

    return (
        <div 
            className="testFormBackground"
        >

            <div className="testFormContainer">

                <button className="closeButton" onClick={toggleClose}>X</button>
                <form autoComplete="off" noValidate className="testForm" onSubmit={handleSubmit}>

                    <div className="testFormField">
                        <label>User</label>
                        <input
                            name="user"
                            type="text"
                            value={postData.user}
                            onChange={(e) => setPostData({ ...postData, user: e.target.value })}
                        />
                    </div>

                    <div className="testFormField">
                        <label>Title</label>
                        <input
                            name="title"
                            type="text"
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                    </div>

                    <div className="testFormField">
                        <label>Servings</label>
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


                    <button type="submit">Submit</button>


                </form>

            </div>

        </div>
    )
}

export default TestForm
