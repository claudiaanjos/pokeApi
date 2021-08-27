const express = require('express');
const pokemons = require('./controladores/pokemons');

const rota = express();

rota.get("/pokemon", pokemons.consultaPorQuantidade);
rota.get("/pokemon/:idOuNome", pokemons.consultaPorIdOuNome);

module.exports = rota;