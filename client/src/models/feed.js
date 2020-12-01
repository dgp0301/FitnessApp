/*
    feed model. raw data for the feed display
    Currently mocked at client side
*/
import { myFetch } from "./my-fetch";
import {session} from './session';

export const getWorkouts = ()=> myFetch(`users/${session.user.id}/workoutfeed`);

export const getFriends = ()=> myFetch(`users/${session.user.id}/followers`);

export const getMyWorkouts = ()=>myFetch(`users/${session.user.id}/myworkouts`);

export function React(post_id){
    return myFetch(`reactions`,{Post_id: post_id, Owner_id: session.user.id});
}
export function Comment(text,workout_id){
    return myFetch(`comments`,{Text: text, Workout_id: workout_id, Owner_id: session.user.id});
}
export function acceptFollower(follow_id){
    return myFetch(`follow/acceptLink`,{id: follow_id});
}
export function denyFollower(follow_id){
    return myFetch(`follow`,{id: follow_id}, 'DELETE');
}
export function search(query){
    return myFetch(`users/search?q=${query}`);
}