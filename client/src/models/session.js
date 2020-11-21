/*
    Keeps track of users and stuffs
*/
import { myFetch } from './my-fetch';

export const session = {
    user:null
    
}
export  function login(email, password){
    return myFetch("users/login", { email: email, password: password });
}
