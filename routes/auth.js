var config=require("../lib/config");

module.exports = function(req, res, next) {

    var path = req._parsedUrl.path;
    console.log(path);
    var paths = path.split("/");
    if(paths[1]=="login"){

    }else{

    }
    next();
};