import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

function TestForm() {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refresh from browser
        dispatch(createPost(postData)); //pass all the date from useState
    }

    const clear = () => {

    }

    return (
        <div>
            <form autoComplete="off" noValidate className="testForm" onSubmit={handleSubmit}>

                <div className="testFormField">
                    <label>Creator</label>
                    <input
                        name="creator"
                        type="text"
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
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
                    <label>Message</label>
                    <input
                        name="message"
                        type="text"
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
                </div>

                <div className="testFormField">
                    <label>Tags</label>
                    <input
                        name="tags"
                        type="text"
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />
                </div>

                <button type="submit">Submit</button>
                <button onClick={clear}>Clear</button>


            </form>
        </div>
    )
}

export default TestForm
