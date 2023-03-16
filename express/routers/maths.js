const express = require('express');

const routermath = express.Router();

const  app = require('../app');

const {matematicas} = require('../data/cursos').infocursos;

//math courses
routermath.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const results = matematicas.filter((curso => curso.nombre === tema)); 
    if (results.length === 0) {
        return res
            .status(404)
            .send(`No se encontro el curso de ${tema}`);
    }

    app.ordenarPorVisitas(req);

    
    res.send(JSON.stringify(results));    
});

module.exports = routermath;