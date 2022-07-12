import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const body = req.body; //Content of the request

    console.log("Controller createPost", body);

    try {
        const newPost = await PostMessage.create(body);
        console.log("After await .create");
        res.status(201).json(newPost); //formats array/object into json
    } 
    catch (error) {

        res.status(409).json({ message: error.message });
    }
}