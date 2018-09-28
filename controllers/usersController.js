const express = require('express');

function create(req, res, next){
  console.log(req.body);
  express.json();
  console.log(req.body);
  res.send(`Crea un Usuario con nombre ${req.body.name}`);
};

function list(req, res, next){
  res.render("users/list", {name: req.params.name});
};

function index(req, res, next){
  res.send(`Lista un usuario con un ${req.params.id} específico`);
};

function update(req, res, next){
  res.send("Edita un usuario con un id específico");
};

function destroy(req, res, next){
  res.send("Borra un usuario con un id específico");
};

// Para que el archivo de rutas pueda usar esas funciones sin problema
module.exports = {
  create,
  list,
  index,
  update,
  destroy
};
