
//importamos modulos propios de nodejs
const http = require('http')
const fs = require('fs')
const os = require('os')


//module process
console.log(process) 
//objeto global de nodejs que contiene informacion del proceso actual de nodejs 

console.log('argumentos: ',process.argv[2])
//argv es un array que contiene los argumentos que se le pasan al proceso de nodejs

//[node , app.js, 1, 2, 3, 4, 5]
// 0       1       2  3  4  5  6   
//posiciones del array argv


console.log('Memoria en uso: ',process.memoryUsage())

console.log('Tipo de sistema: ',os.type()) 
//tipo de sistema operativo

/*
os.cpus() //devuelve un array con la informacion de los cores de la cpu

os.homeDir() //devuelve la ruta del directorio home del usuario

os.hostname() //devuelve el nombre del host

os.networkInterfaces() //devuelve un array con la informacion de las interfaces de red

os.platform() //devuelve el tipo de plataforma

os.release() //devuelve la version del sistema operativo

os.upTime() //devuelve el tiempo de actividad del sistema operativo

os.userInfo() //devuelve un objeto con la informacion del usuario
*/

console.log(os.release())//algunos metodos del modulo 
console.log(os.freemem())


//funcion asyncrona 
fs.writeFile('./text.txt', 'content lin1',function(err){ //node espera a que cada tarea finalize y continua con el codigo de afuera
    if(err){//si error
        console.log(err)
    }
    console.log('Archivo creado')
})

console.log('Ultima linea de codigo');

fs.readFile('./text.txt', 'utf-8', function(err, data){
    if(err){
        throw err //detiene la ejecucion del programa y muestra el error en consola 
        //console.log(err)
    }
    console.log('datos archivos: ', data.toString())
})

/*
Asincronas por defecto

fs.rename('./text.txt', './text2.txt', function(err){ 
    if(err){
        console.log(err)
    }
    console.log('Archivo renombrado')
}) 
//renombrar archivos 

fs.unlink( './text2.txt', function(err){
    if(err){
        console.log(err)
    }   
    console.log('Archivo eliminado')
})
//eliminar archivos 

fs.mkdir() //crear directorios

fs.rmdir() //eliminar directorios

fs.appendFile() //agregar contenido a un archivo

fs.readFile() //leer contenido de un archivo

fs.writeFile() //escribir contenido en un archivo

fs.watchFile() //observar cambios en un archivo

fs.unwatchFile() //dejar de observar cambios en un archivo

fs.renameSync() //renombrar archivos de forma sincrona (Sync)


*/

//trabajando con http

console.log('\nSever\n')

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1> Hola desde el server resp</h1>')
    res.end()
}
const server = http.createServer(handleServer)
server.listen(3000, function(){
    console.log('Server running in port 3000')
})

//localhost:3000


//module timers

//setTimeOut(function, miliseconds, params)

//funcion que se ejecuta una sola vez despues de un tiempo determinado en milisegundos 

//higer order programming
//funcion que recibe como parametro otra funcion
function saludar($name){
    console.log(`Hola ${$name}`)
}
setTimeout(saludar, 3000, 'Juan')


//setInterval(function, miliseconds, params)

//funcion que se ejecuta cada cierto tiempo determinado en milisegundos 

setInterval(saludar, 1000, 'Juan');

//setInmediate(function, miliseconds, params)

//ejecuta la funcion inmediatamente despues de que se ejecute el codigo de afuera de la funcion 

setImmediate(($arg) => {
    console.log('setImmediate -> arg:',$arg)
}, 'Juan');



