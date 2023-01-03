const { json } = require('express');
const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById , deleteUserById} = require('../services/CRUDService')


const getHomepage = async (req, res, next) => {
    let results = await getAllUsers()
    return res.render('home', { listUsers: results })
}

const newsPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    )
    res.send("Create new user")
}

const getCreatePage = (req, res) => {
    return res.render('create')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    return res.render('edit', { userEdit: await getUserById(userId) })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let Id = req.body.userId
    await updateUserById(email, name, city, Id)
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    return res.render('delete', { userEdit: await getUserById(userId) })
}

const postHandleRemoveUser = async (req, res) => {
    let Id = req.body.userId
    await deleteUserById(Id)
    res.redirect('/')
}


module.exports = {
    getHomepage,
    newsPage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
}