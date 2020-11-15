/*
    query workouts table 
*/
const mysql = require('./mysql');
const PREFIX = process.env.MYSQL_TABLE_PREFIX ||"";

async function getAll(){
    return await(mysql.query('SELECT * FROM Workout'));
}
async function get(id){
    const sql = "SELECT * FROM Workout WHERE Owner_id = ?";
    return await mysql.query(sql,[id]);
}
async function add(URL, Text, Media_Type, Privacy_Setting, Owner_id, Duration){
    const sql = `INSERT INTO Workout (created_at, URL, Text, Media_Type, Privacy_Setting, Owner_id, Duration) VALUES ?`;
    const params = [[ new Date(), URL, Text, Media_Type, Privacy_Setting, Owner_id, Duration ]];
    return await mysql.query(sql,[params]);
}
module.exports = { getAll, get, add}