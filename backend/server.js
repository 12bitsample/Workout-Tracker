import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import workoutRoutes from './routes/workouts.js';
import mongoose from 'mongoose';


//express app
const app = express();

//middleware
app.use(express.json());

app.use((req,res,next)  => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG0_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Success!! Connected to Database: Listening on Port 4000');
        })})
    .catch((error) => {
        console.log(error);
    })


