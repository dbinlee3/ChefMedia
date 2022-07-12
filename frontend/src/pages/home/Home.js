import React from 'react'
import './home.css'

import Post from '../../components/post/Post'
import CreatePost from '../../components/createPost/CreatePost'

import TestPosts from '../../components/testPosts/TestPosts'
import TestForm from '../../components/testForm/TestForm'

import gordon from '../../assets/gordon.png'
import spaghetti from '../../assets/spaghetti.jpeg'

import guyfieri from '../../assets/guyfieri.jpeg'
import chocolatechipcookies from '../../assets/chocolatechipcookies.jpeg'

import wolfgang from '../../assets/wolfgang.jpeg'
import caesarsalad from '../../assets/caesarsalad.jpeg'

import { useSelector } from 'react-redux';

// Cookie Post
const cookieCookInfo = {
    servings: 6,
    prepTime: 45,
    cookTime: 60,
    coolTime: 45
};

const cookieIngredients =  [
    "2 cups of flour",
    "1 cup of milk",
    "6 sticks of butter",
    "1 cup of chocolate chips",
    "1 tbsp. of vanilla extract"
]

const cookieDirections = [
    "Mix all the dry ingredients", 
    "Mix all the wet ingredients",
    "Once all incorperated, bake in oven for 45 min at 350 degrees",
    "Mix all the dry ingredients",
    "Mix all the dry ingredients"
]

// Spaghetti Post
const spaghettiCookInfo = {
    servings: 6,
    prepTime: 10,
    cookTime: 12,
    coolTime: 5
};

const spaghettiIngredients =  [
    "Box of Spaghetti Noodles",
    "Fresh Home Made Tomato Sauce",
    "1-2 Pounds of Ground Beef",
    "Salt",
    "Water",
    "Basil Leaves",
    "Cheese"
]

const spaghettiDirections = [
    "Boil 6 quarts of water", 
    "Add 3 tablespoons of salt",
    "Add in the pasta in boiling water and stir gently occasionally",
    "Taste the pasta then drain when cooked",
    "Stir in the tomato sauce",
    "Add in the pasta water to get the right sauce consistency"
]

// Caesar Salad Post
const saladCookInfo = {
    servings: 2,
    prepTime: 11,
    cookTime: 5,
    coolTime: 0
};

const saladIngredients =  [
    "2 small heads of romaine lettuce",
    "Parmesan cheese",
    "Crispy Croutons",
    "Caesar Salad Dressing"
]

const saladDirections = [
    "Chop the lettuce and put in a large bowl", 
    "Add in the croutons and coat the lettuce in the dressing",
    "Grate the cheese into the bowl for a finishing touch"
]

function Home() {

    const posts = useSelector( (state) => state.posts);

    console.log("useSelector:", posts);



    return (
        <> 

            <div className="homeContainer">
                <div className="homeFlow">

                    {/* <CreatePost/> */}
                    <TestForm />
                    <TestPosts />
                    
                    {/* Wolfgang Puck Post */}
                    <Post
                        user = "Wolfgang Puck"
                        userPic = {wolfgang}
                        datePosted = "2"
                        title = "caesar salad" 
                        cookInfo={saladCookInfo}
                        ingredients = {saladIngredients}
                        directions = {saladDirections}
                        image = {caesarsalad}
                        likes = "20"
                    />

                    {/* Guy Fieri Post */}
                    <Post 
                        user = "Guy Fieri"
                        userPic = {guyfieri}
                        datePosted = "7"
                        title = "cookies" 
                        cookInfo={cookieCookInfo}
                        ingredients = {cookieIngredients}
                        directions = {cookieDirections}
                        image = {chocolatechipcookies}
                        likes = "47"
                    />

                    {/* Gordan Ramsay Post */}
                    <Post
                        user = "Gordan Ramsay"
                        userPic = {gordon}
                        datePosted = "21"
                        title = "spaghetti" 
                        cookInfo={spaghettiCookInfo}
                        ingredients = {spaghettiIngredients}
                        directions = {spaghettiDirections}
                        image = {spaghetti}
                        likes = "76"
                    />         

                </div>

            </div>

        </>

    )
}

export default Home
