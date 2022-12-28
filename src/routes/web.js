const express = require('express')
const router = express.Router()
const { getHomepage, newsPage } = require('../controllers/homeController')

router.get('/', getHomepage)

router.get('/news', newsPage)

module.exports = router