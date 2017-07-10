var mysql = require('mysql');
var config = require('../config');
var $sql = require('./SqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 向前台返回JSON方法的简单封装
var jsonwrite = function (res,err, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: 1,
            msg: err.message
        });
        // next();
    } else {
        res.json({
            code: 0,
            value: ret
        });
    }
};

module.exports = {
    jsonWrite: jsonwrite,
    pool: pool
};