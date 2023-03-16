const estatusPedido = () => {
    const status = Math.random() < 0.5;
    //console.log(status);
    return status
}

const Mipedidiopizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Tu pedido esta listo');
        } else {
            reject('Tu pedido no esta listo');
        }
    }, 2000);
});

/* const ManejarPedidoListo = (resultado) => {
    console.log(resultado);
}

const ManejarPedidoNoListo = (error) => {
    console.log(error);
}

Mipedidiopizza.then(ManejarPedidoListo, ManejarPedidoNoListo); */

Mipedidiopizza
    .then((resultado)=> {
    //se ejecuta cuando la promesa se cumple
    //resultado es el parametro que se le pasa a resolve
    console.log(resultado);
    })
    .catch((error) => { //se pude usar .then(null, (error) => { 
    //se ejecuta cuando la promesa no se cumple
    //error es el parametro que se le pasa a reject
        console.log(error);
    });