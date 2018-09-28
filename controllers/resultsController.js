const express = require('express');

function plus(req, res, next){
  let x = parseInt(req.params.n1);
  let y = parseInt(req.params.n2);
  let z = x + y;
  res.json({"resultado" : z});
};

function multiply(req, res, next){
  let x = parseInt(req.body.n1);
  let y = parseInt(req.body.n2);
  let z = x * y;
  res.json({"resultado" : z});
};

function divide(req, res, next){
  let x = parseInt(req.params.n1);
  let y = parseInt(req.params.n2);
  let z = x / y;
  res.json({"resultado" : z});
};

function minus(req, res, next){
  let x = parseInt(req.params.n1);
  let y = parseInt(req.params.n2);
  let z = x - y;
  res.json({"resultado" : z});
};

module.exports = {
  plus,
  minus,
  multiply,
  divide
};
