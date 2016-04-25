var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
app.use(cors());
app.use(bodyParser.json());
var port = 8000;

var db = mongojs('ecommerce', ['products']);
var productsCollection = db.collection('products');
var ObjectID = mongojs.ObjectId;

app.get('/api/products', function(req, res, next) {
  var query = req.query;
  productsCollection.find(query, function(error, response){
    if(error) {
      res.status(500).json(error);
    }
    else {
      res.json(response);
    }
  });
});

app.get('/api/products/:id', function(req, res, next) {
  var objId = {
    "_id": ObjectID(req.params.id)
  };
  productsCollection.findOne(objId, function(error, response){
    if(error) {
      return res.status(500).json(error);
    }
    else {
      return res.json(response);
    }
  });
});

app.post('/api/products', function(req, res, next) {
  productsCollection.save(req.body, function(error, response) {
    if (error) {
      return res.status(500).json(error);
    }
    else {
      return res.json(response);
    }
  });
});

app.put('/api/products/:id', function(req, res, next) {
  console.log('put works, thats it');
  console.log(req.params.id);
  if(!req.params.id) {
    console.log('no id entered');
    return res.status(400).send('id query needed');
  }
  var queryObj = {
    "_id": ObjectID(req.params.id)
  };
  productsCollection.update(queryObj, req.body, function(error, response){
    console.log('inside the update');
    if(error) {
      return res.status(500).json(error);
    }
    else {
      console.log('mission accomplished');
      return res.json(response);
    }
  });
});

app.delete('/api/products/:id', function(req, res, next) {
  if(!req.params.id) {
    console.log('no id entered');
    return res.status(400).send('id query needed');
  }
  var queryObj = {
    "_id": ObjectID(req.params.id)
  };
  productsCollection.remove(queryObj, function(error, response){
    if(error) {
      return res.status(500).json(error);
    }
    else {
      return res.json(response);
    }
  });
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
