const axios = require('axios');

async function consultaPorQuantidade (req, res) {
    let inicio = req.query.inicio;
    let quantidade = req.query.quantidade;

    if (!inicio) { inicio = 0; }
    if (!quantidade) { quantidade = 3; }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);

    res.json({ pokemons: response.data.results });
}


async function consultaPorIdOuNome (req, res) {
    const idOuNome = req.params.idOuNome;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

    res.json({
        id: response.data.id,
        nome: response.data.name,
        peso: response.data.height,
        experiencia: response.data.base_experience,
        forma: response.data.forms,
        habilidades: response.data.abilities,
        especie: response.data.species
    })
}

module.exports = { consultaPorQuantidade, consultaPorIdOuNome }