/*
    Add following funcitonality to app
*/

const mysql = require('./mysql');


const PREFIX = process.env.MYSQL_TABLE_PREFIX ||"";
const Types = { ADMIN : 5, USER : 6 };

async function getAll(){
    return await mysql.query(`SELECT * FROM ${PREFIX}Followers`);
}
async function followRequest(id1, id2){
    const sql = `INSERT INTO ${PREFIX}Followers (created_at, Following_id, Follower_id) VALUES ?`;
    return await mysql.query(sql,[id1,id2]);
}
async function acceptFollow(id){
    const sql = `UPDATE ${PREFIX}Followers SET isAccepted = b'1' WHERE id = ?`;
    return await mysql.query(sql,[id]);
}
async function remove(id){
    return await mysql.query(`DELETE FROM ${PREFIX}Followers WHERE id = ?`,[id]);
}
module.exports = { getAll, followRequest, acceptFollow, remove };
