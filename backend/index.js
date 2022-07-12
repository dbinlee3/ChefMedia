import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

//Every express file needs this statement to run express
const app = express();

app.use(express.json()); //Handles POST requests
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors()); //Cross origin resource (3000 & 5000)

app.use('/posts', postRoutes);

//STORE IN ENV FILE
const CONNECTION_URL = 'mongodb+srv://pantriAdmin:pantriAdmin@cluster0.fgebe.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
