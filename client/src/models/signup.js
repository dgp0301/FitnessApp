import { myFetch } from "./my-fetch";
import {session} from './session';

export function signup(firstName,lastName,email,password){
    return myFetch(`users/register`,
    {FirstName: firstName,
    LastName: lastName,
    Password: password,
    Email: email})
}