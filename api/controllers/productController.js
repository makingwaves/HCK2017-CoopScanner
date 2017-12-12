var product = require('../model/product');
var fs = require('fs');
// var dict = {};
// dict['5449000136350'] = "Cappy - Orange";
// dict['5449000191380'] = "Cappy - Apple";

var array = [];
var product1 = new product(5449000136350, "Cappy - Orange", "http://www.planetsushi.hu/wp-content/uploads/w_Cappy_apple_1PET_2012.jpg");
var product2 = new product(5449000191380, "Cappy - Apple", "http://www.planetsushi.hu/wp-content/uploads/w_Cappy_orange_pulpy_1PET_2012.jpg");
array.push(product1);
array.push(product2);

exports.get_product_by_barcode = function(req, res){
    var result = array.find(x => x.code === parseInt(req.params.id));
    if(result == undefined){
        res.status(404).send("Not found");
    }
    else{
        res.setHeader('Content-Type', 'application/json');
        // res.send('Found: ' + result.code + ' ' + result.name);
        res.send(JSON.stringify(result));
    }
}