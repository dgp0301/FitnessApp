/*
    query comments table 
*/
const mysql = require('./mysql');
const PREFIX = process.env.MYSQL_TABLE_PREFIX ||"EX_Fall_2020_";

async function getAll(){
    return await mysql.query(`SELECT * FROM ${PREFIX}Comments`)
}
//Get comments from workout where id
async function getWorkoutComments(id){
    const sql = `SELECT C.Text,CONCAT(U.FirstName," ",LastName)
    FROM ${PREFIX}Comments AS C 
    INNER JOIN ${PREFIX}Users AS U ON U.id = C.Owner_id
    WHERE C.Workout_id = ?`;
    return await mysql.query(sql,[id]);
}
//Get comments a certain user has made
async function getAllUsersComments(id){
    const sql = `SELECT C.Text,CONCAT(U.FirstName," ",LastName)
    FROM ${PREFIX}Comments AS C WHERE C.Owner_id = ?`;
    return await mysql.query(sql,[id]);
}
async function add(Text, Workout_id, Owner_id){
    const sql = `INSERT INTO ${PREFIX}Comments (created_at, Text, Workout_id, Owner_id) VALUES (?)`
    const params =[[new Date(),Text, Workout_id, Owner_id]];
    return await mysql.query(sql,params);
} 
async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Comments WHERE id = ?`;
    return await mysql.query(sql,[id]);
}