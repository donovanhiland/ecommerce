var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Product = require('./Products.js');

var app = express();
var port = 8000;

mongoose.connect('mongodb://localhost/api/products');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/products', function(req, res, next) {
  Product.find({}, function(err, dbRes) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(dbRes);
    }
  });
});

app.get('/api/products/:id', function(req, res, next) {
  var objId = req.params.id;
  Product.findById(objId, function(err, dbRes) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send(dbRes);
    }
  });
});

app.post('/api/products', function(req, res, next) {
  Product.create(req.body, function(error, dbRes) {
    if(error) {
      res.status(500).send(error);
    }
    else {
      res.send(dbRes);
    }
  });
  // var product = new Product(req.body);
  // product.save(function(error, s) {
  //   if(error) {
  //     res.status(500).send(error);
  //   }
  //   else {
  //     res.send(s);
  //   }
  // });
});

app.put('/api/products/:id', function(req, res, next) {
  console.log(req.body);
  var objId = req.params.id;
  Product.findByIdAndUpdate(objId, req.body, function(error, dbRes) {
    if(error) {
      res.status(500).send(error);
    }
    else {
      res.send(dbRes);
    }
  });
});

app.delete('/api/products/:id', function(req, res, next) {
  var objId = req.params.id;
  Product.findByIdAndRemove(objId, function(error, dbRes) {
    if(error) {
      res.status(500).send(error);
    }
    else {
      res.send('Successfully Deleted');
    }
  });
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
