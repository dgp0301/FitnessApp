/*
    Add following funcitonality to app
*/

const mysql = require('./mysql');


const PREFIX = process.env.MYSQL_TABLE_PREFIX ||"";
const Types = { ADMIN : 5, USER : 6 };

async function getAll(){
    return await mysql.query(`SELECT * FROM ${PREFIX}Followers`);
}
async function getFollowers(id){
    const sql = `SELECT F.*,
    CONCAT(U.FirstName," ",U.LastName) as Name
    FROM ${PREFIX}Followers AS F 
    INNER JOIN ${PREFIX}Users AS U
    ON U.id=F.Following_id
    WHERE F.Following_id = ? AND F.isAccepted = b'1'`;
    return await mysql.query(sql,[id])
}
async function getPendingFollowers(id){
    const sql = `SELECT F.*,
    CONCAT(U.FirstName," ",U.LastName) as Name
    FROM ${PREFIX}Followers AS F 
    INNER JOIN ${PREFIX}Users AS U
    ON U.id=F.Following_id
    WHERE F.Following_id = ? AND F.isAccepted = b'0'`;
    return await mysql.query(sql,[id])
}
async function followRequest(id1, id2){
    const sql = `INSERT INTO ${PREFIX}Followers (created_at, Following_id, Follower_id) VALUES (?)`;
    return await mysql.query(sql,[[new Date(), id1, id2]]);
}
async function acceptFollow(id){
    const sql = `UPDATE ${PREFIX}Followers SET isAccepted = b'1' WHERE id = ?`;
    return await mysql.query(sql,[id]);
}
async function remove(id){
    return await mysql.query(`DELETE FROM ${PREFIX}Followers WHERE id = ?`,[id]);
}
module.exports = { getAll, getFollowers, getPendingFollowers, followRequest, acceptFollow, remove };
