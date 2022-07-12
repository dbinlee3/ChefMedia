import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    /* Not included yet:
    userPic, images
    */
   
    user: String,
    title: String,

    servings: Number,
    prepTime: {
        type: Number,
        default: 0
    },
    cookTime: Number,

    ingredients: [String],
    directions: [String],

    likeCount: {
        type: Number,
        default: 0
    },
    datePosted: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;