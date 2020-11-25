/*
*       Method to display workout types aswell as put data into workouts into the server
*/
import { myFetch } from "./my-fetch";
import {session} from './session';

export const getExcercise = ()=>  myFetch('workout/types');

export function trackExercise(workoutType,sets,reps,description){
    //need to figure out to input start/end time add fields for weight and rpe
    myFetch(`workout`,{
        Owner_id: session.user.id,
        Start_Time: new Date(),
        End_Time: new Date(),
        Excercise_Type: workoutType,
        Sets: +sets,
        Reps_Per_Set: +reps,
        Weight: 100,
        Rpe: 9})
}