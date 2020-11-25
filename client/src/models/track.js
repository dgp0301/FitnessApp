/*
*       Method to display workout types aswell as put data into workouts into the server
*/
import { myFetch } from "./my-fetch";
import {session} from './session';

export const getExcercise = ()=>  myFetch('workout/types');