import express from 'express';
import {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
    ,} from '../controllers/workoutController.js';

const router = express.Router();

//GET all workouts
router.get('/', getWorkout);

//GET single workout
router.get('/:id', getWorkouts);

//POST a new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);
//UPDATE a workout
router.patch('/:id', updateWorkout);

export {router as default};