const express = require('express');
const app = express();
const {infocursos} = require('./data/cursos');

function ordenarPorVisitas(req) {
    //accedemios a los parametrosde la url como :
    //http://localhost:3000/api/cursos/Matematicas/Calculo?ordenar=visitas
    if (req.query.ordenar === 'vistas') { 
        return res
            .status(200)
            .send(JSON.stringify(results.sort(
            (a, b) => a.vistas - b.vistas //ordenamos el arreglo de menor a mayor segun el numero de vistas que tenga cada curso 
        )));
    } 
}

//routers

const routerprogramming = require('./routers/programming');
app.use('/api/cursos/programacion', routerprogramming);
//asosciar las rutas con el router de la constante routerprogramming
const routermath = require('./routers/maths');
app.use('/api/cursos/matematicas', routermath);

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infocursos));
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`);
});
    
module.exports.ordenarPorVisitas = ordenarPorVisitas;