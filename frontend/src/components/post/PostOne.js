import './postOne.css'

import likeIcon from '../../assets/like.png'
import chocolatechipcookies from '../../assets/chocolatechipcookies.jpeg'
import gordon from '../../assets/gordon.png'

function PostOne() {
    return (
        <div className = "post">
            
            <div className = "postTop">
                &emsp; &emsp;
                <img className="profilePicture" src = {gordon} alt = ""/>
                <span className = "name">&emsp; Gordon Ramsay</span> 
                &emsp; posted 5 minutes ago

            </div>
        
            <div className="column1">
                <center><span className="title">Chocolate Chip Cookies</span></center>
                <hr></hr>
                <ul>
                    <li>Servings: 6</li>
                    <li>Prep Time: 30min</li>
                    <li>Cook Time: 45min</li>
                    <li>Cool Time: 30min</li>
                </ul>

                <br></br>

                <center><span className="title">Ingredients</span></center>
                <hr></hr>
                <ul>
                    <li>4 cups of flour</li>
                    <li>3 sticks of butter</li>
                    <li>2 cups of sugar</li>
                    <li>1 cup of chocolate chips</li>
                    <li>2 tbsp. of vegetable oil</li>
                    <li>1 tsp. of vanilla extract</li>
                </ul>

            </div>

            <div className = "column2">
                <img className="postImg" src={chocolatechipcookies} alt=""/>
            </div>

            <div className="postBottom">

                <img className="likeIcon" alt = "" src={likeIcon}/>
                <span className="likeCounter">100 people liked this</span>

            </div>
           
        </div>

    )
}

export default PostOne
