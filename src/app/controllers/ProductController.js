const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ProductController {
    //[GET] /home
    show(req, res, next) {
        res.send('product');
    }
}

module.exports = new ProductController;