/*
    feed model. raw data for the feed display
    Currently mocked at client side
*/

import { myFetch } from "./my-fetch";
import {session} from './session';

export const getWorkouts =  ()=> myFetch(`users/7/workoutfeed`)