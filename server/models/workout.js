/*
    query workouts table 
*/
const mysql = require('./mysql');
const PREFIX = process.env.MYSQL_TABLE_PREFIX ||"EX_Fall_2020_";

async function getAll(){
    return await(mysql.query(`SELECT * FROM ${PREFIX}Workouts`));
}
async function get(id){
    const sql = `SELECT *
    FROM ${PREFIX}Workouts WHERE Owner_id = ?`;
    const rows =await mysql.query(sql,[id]);
    return rows[0];
}
async function add(Owner_id, Start_Time, End_Time, Exercise_Type, Sets, Reps_Per_Set, Weight, RPE){
    const sql = `INSERT INTO ${PREFIX}Workouts (created_at, Owner_id, Start_Time, End_Time, Exercise_Type, Sets, Reps_Per_Set, Weight, RPE) VALUES ?`;
    const params = [[ new Date(), Owner_id, Start_Time, End_Time, Exercise_Type, Sets, Reps_Per_Set, Weight, RPE ]];
    return await mysql.query(sql,[params]);
}
async function update(id, Start_Time, End_Time, Exercise_Type, Sets, Reps_Per_Set, Weight, RPE){
    const sql = `UPDATE Workout SET ? Where id=?`;
    const params = [[ Start_Time, End_Time, Exercise_Type, Sets, Reps_Per_Set, Weight, RPE ]];
    return await mysql.query(sql,[params,id]);
}
async function remove(id){
    const sql = `DELETE FROM Workout Where id=?`;
    return await mysql.query(sql,[id]);
}
module.exports = { getAll, get, add, update, remove }