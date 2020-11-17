//
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const Emojis = { LOVE: '❤️' }

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT R.*, FirstName, LastName FROM ${PREFIX}Reactions R Join ${PREFIX}Users U ON R.Owner_id = U.id`
    return await mysql.query(sql);
}
async function getForPost(id){
    const sql = `SELECT R.*, CONCAT(U.FirstName," ",LastName) AS Name
    FROM ${PREFIX}Reactions R JOIN ${PREFIX}Users AS U ON R.Owner_id = U.id
    WHERE P.Post_id=?`;
    return await mysql.query(sql,[id]);
}
async function get(id){
    const sql = `SELECT 
    *
FROM ${PREFIX}Reactions WHERE id=?`;
const rows = await mysql.query(sql, [id]);
if(!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
return rows[0];
}
async function add( Emoji = Emojis.LOVE, Workout_id, Owner_id ){
    const sql = `INSERT INTO ${PREFIX}Reactions (created_at, Emoji, Post_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Emoji, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}
async function update( id, Emoji, Workout_id, Owner_id ){
    const sql = `UPDATE ${PREFIX}Reactions SET ? WHERE id = ?`;
    const params = { Emoji, Post_id, Owner_id };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}
async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Reactions WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Workout_id FROM ${PREFIX}Reactions WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = {getAll, getForPost, get, add, update, remove, search}