/*
    feed model. raw data for the feed display
    Currently mocked at client side
*/

import { myFetch } from "./my-fetch";
import {session} from './session';

export const getWorkouts = ()=> myFetch(`users/${session.user.id}/workoutfeed`);

export const getFriends = ()=> myFetch(`users/${session.user.id}/followers`);

export const getMyWorkouts = ()=>myFetch(`users/${session.user.id}/myworkouts`);