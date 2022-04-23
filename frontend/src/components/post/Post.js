import React from 'react'
import './post.css'

import gordon from '../../assets/gordon.png'
import {MoreVert} from "@material-ui/icons"

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop"></div>
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={gordon} al=""/>
                        <span className="postUsername">Gordon Ramsay</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">

                    </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>




            </div>
        </div>
    )
}

export default Post
