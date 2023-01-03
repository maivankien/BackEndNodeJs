const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users`
    )
    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users
        WHERE ID = ${userId}`
    )
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (email, name, city, Id) => {
    let [results, fields] = await connection.query(
        // Cách 1
        `UPDATE Users SET email = '${email}', name = '${name}', city = '${city}'
        WHERE id = ${Id}`
        // Cách 2
        // `UPDATE Users SET email = ?, name = ?, city = ?
        // WHERE id = ?`, [email, name, city, Id]
    )
}

const deleteUserById = async (Id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [Id]
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}