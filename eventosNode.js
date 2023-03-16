const EventEmitter = require('events');

const emisorProducts = new EventEmitter();


//se denomina a la funcion que se va a ejecutar cuando se emita el evento
//eventhandler
emisorProducts.on('newProduct', (data, data2) => { 
    //evento asociado a la emisión de un nuevo producto
    console.log('New product arrived!');
    console.log(data);
    console.log(data2);
});

emisorProducts.emit('newProduct', { name: 'TV', price: 3000 }, 'param2');
//emitir un evento
//emisión de un nuevo producto

