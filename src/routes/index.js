const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');

function route(app) {
    // app.get("/", function (req, res) {
    //     res.render('home');
    // });
    app.use('/news' , newsRouter);
    app.use('/product' , productRouter);
    // app.use('/search', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;