const server = require('http')
const {infocursos} = require('./cursos');
//desestructuración de objetos en JS 
//const {infocursos} = require('./cursos');

function routeGET(url, req, res) {
    if (url === '/api/cursos') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(infocursos));
    } else if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // escribir en la cabezera de la respuesta
        res.end('Bienvenido al sitio web de cursos');
    } else if (url === '/api/cursos/programacion') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(infocursos.programacion));
    }
    res.statusCode = 404;
    res.end('Not found');
}

function routePOST(url,req, res){
    if (url === '/api/cursos') {

        let body = '';
        req.on('data', chunk => {
            //chunk es un pedazo de la información que se está enviando
            body += chunk.toString(); //lo convierte a string y lo concatena
        });
        req.on('end', () => { 
            console.log(body);
            //body = JSON.parse(body);//convierte el string a un objeto de JS
            //console.log(body);
            //console.log(body.nombre); //acceder a las propiedades del objeto
            const {nombre, duracion, valor} = JSON.parse(body);
            infocursos.programacion.push({nombre, duracion, valor});
            res.statusCode = 201;
            //res.end('Curso creado');
            res.end(JSON.stringify(infocursos.programacion));
        });

        //res.end('POST /cursos');
    } else {    
        res.statusCode = 404;
        res.end('Not found');
    }
}

const PORT = 3000;

server.createServer((req, res) => {
    const {method, url} = req;
    switch (method) {
        case 'GET':
            return routeGET(url,req, res);
        case 'POST':
            return routePOST(url,req, res);
        default:
            res.statusCode = 501;
            res.end('Method not implemented');
    }

}).listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
} );


