const getHomepage = (req, res, next) => {
    res.send('Xin chào các bạn')
}

const newsPage = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomepage,
    newsPage
}