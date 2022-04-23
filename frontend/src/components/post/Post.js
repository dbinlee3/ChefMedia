import React from 'react'
import './post.css'

import gordon from '../../assets/gordon.png'
import dotsIcon from '../../assets/dotsicon.png'
import likeIcon from '../../assets/like.png'
import row from '../../assets/row.jpeg'

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">

                    <div className="postTopLeft">
                        <img className="postProfileImg" src={gordon} alt=""/>
                        <span className="postUsername">Gordon Ramsay</span>
                        <span className="postDate">5 mins ago</span>
                    </div>

                    <div className="postTopRight">
                        <img className="dotsIcon" src={dotsIcon} alt=""/>
                    </div>
                    
                </div>

                <div className="postCenter">
                    <span className="postText">its row</span>
                    <img className="postImg" src={row} alt=""/>
                </div>

                <div className="postBottom">

                    <div className="postBottomLeft">
                        <img className="likeIcon" src={likeIcon}/>
                        <span className="likeCounter">32 people liked this</span>
                    </div>

                    <div className="postBottomRight" alt="">
                        <span className="postCommentText">9 comments</span>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Post
