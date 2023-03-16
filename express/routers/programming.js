const express = require('express');

const routerprogramming = express.Router();

const {programacion} = require('../data/cursos').infocursos;


//middleware
//se ejecuta antes de que se ejecute la ruta y se puede usar para validar datos o hacer algo antes de que se ejecute la ruta 
routerprogramming.use(express.json());

//programing
routerprogramming.get('/:lenguaje/:nivel', (req, res) => {//:lenguaje es un parametro que se le pasa a la ruta
    const leng = req.params.lenguaje;
    const nivel = req.params.nivel;
    const results = programacion.filter((curso => curso.nombre === leng && curso.nivel === nivel)); //filtra el arreglo de cursos y retorna un arreglo con los cursos que cumplan con la condicion

    if (results.length === 0) {
        return res
            .status(404)
            .send(`No se encontro el curso de ${leng} con el nivel ${nivel}`);
    }
    res.send(JSON.stringify(results));//Muestra el resultado en formato json
});

//solicitudes GET
routerprogramming.get('/:lenguaje', (req, res) => {
    const leng = req.params.lenguaje;
    const results = programacion.filter((curso => curso.nombre === leng)); 
    if (results.length === 0) {
        return res
            .status(404)
            .send(`No se encontro el curso de ${leng} con el nivel ${nivel}`);
    }
    res.send(results);
});


//solicitudes post

routerprogramming.post('/', (req, res) => { 
    let newcurso = req.body;

    programacion.push(newcurso);
    res.send(programacion);
});

//solicitud  put
routerprogramming.put('/:id', (req, res) => { 
    const cursoActualizado = req.body;
    const id= req.params.id;
    const indice = programacion.findIndex(curso => curso.id== id);
    if (indice >= 0) {
    programacion [indice] = cursoActualizado;
    }
    res.send(programacion);
});


//solicitud  patch
routerprogramming.patch('/:id', (req, res) => { 
    const cursoActualizado = req.body;
    const id= req.params.id;
    const indice = programacion.findIndex(curso => curso.id== id);
    if (indice >= 0) {
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar, cursoActualizado);
    }
    res.send(programacion);
});

//solicitud  delete
routerprogramming.delete('/:id', (req, res) => { 
    const id= req.params.id;
    const indice = programacion.findIndex(curso => curso.id== id);
    if (indice >= 0) {
        programacion.splice(indice, 1);
    }
    res.send(programacion);
});


module.exports = routerprogramming;