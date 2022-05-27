import './postTwo.css'

import likeIcon from '../../assets/like.png'
import spaghetti from '../../assets/spaghetti.jpeg'
import gordon from '../../assets/gordon.png'

function PostTwo() {
    return (
        <div className = "post">
            
            <div className = "postTop">
                &emsp; &emsp;
                <img className="profilePicture" src = {gordon} alt = ""/>
                <span className = "name">&emsp; Gordon Ramsay</span> 
                &emsp; posted 14 minutes ago

            </div>
        
            <div className="column1">
                <center><span className="title">Spaghetti</span></center>
                <hr></hr>
                <ul>
                    <li>Servings: 4</li>
                    <li>Prep Time: 10min</li>
                    <li>Cook Time: 10-12min</li>
                    <li>Cool Time: 5min</li>
                </ul>

                <br></br>

                <center><span className="title">Ingredients</span></center>
                <hr></hr>
                <ul>
                    <li>Box of Spaghetti Noodles</li>
                    <li>Fresh Home Made Tomato Sauce</li>
                    <li>1-2 Pounds of Ground Beef</li>
                    <li>Salt</li>
                    <li>Water</li>
                    <li>Basil Leaves</li>
                    <li>Cheese</li>
                </ul>

            </div>

            <div className = "column2">
                <img className="postImg" src={spaghetti} alt=""/>
            </div>

            <div className="postBottom">

                <img className="likeIcon" alt = "" src={likeIcon}/>
                <span className="likeCounter">35 people liked this</span>

            </div>
           
        </div>

    )
}

export default PostTwo
