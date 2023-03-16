function ordenarProductos(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando producto: ${producto} `);
    setTimeout(() => {
      if (producto === 'Pizza') {
        resolve('Ordenando Pizza');
      } else {
        reject('No se pudo ordenar el producto, No hay stock');
      }
    }, 2000);
  });
}

function ProcesarPedido(resp) {
    return new Promise(resolve => {
        console.log(`Procesando pedido: ${resp}`);
        setTimeout(() => {
            resolve('Pedido procesado. Gracias');
        }, 4000);
    });
}

//promesas sin async await

/*
console.log('Sin Async Await');
ordenarProductos('Pizza') //esta llamada retorna una promesa
  .then(resp => {
    console.log('Respuesta recibida');
    console.log(resp);
    return ProcesarPedido(resp); //esta llamada retorna una promesa
  })
  .then(respProsesada => { // se ejecuta cuando la promesa anterior se resuelve y le pasa el valor de la promesa anterior
    console.log(respProsesada);
  })
  .catch(error => { // se ejecuta cuando la promesa anterior se rechaza y le pasa el valor de la promesa anterior
    console.log(error);
  }); 
 
*/ 
//este proceso de encadenar promesas se conoce como promesas encadenadas o chaining promises


//output de la consola
/*
ordenando producto: Pizza
respuesta recibida
ordenando pizza
procesando pedido : ordenando pizza
pedido procesado gracias

*/


//promesas con async await
console.log('\n\nCon Async Await');

async function RealizarPedido(producto) {
  //async sirve para indicar que una funcion es asincrona y retorna una promesa implicitamente 
  try {
    const respuesta = await ordenarProductos(producto);
    //await espera a que la promesa se resuelva y retorna el valor de la promesa
    console.log('respuesta recibida');
    const respProsesada = await ProcesarPedido(respuesta);
    console.log(respProsesada);
    //se ejecuta el proceso de forma secuencial y no en paralelo como en el caso de las promesas encadenadas
    //await solo se puede usar dentro de una funcion async 
    //manipulamos la ejecucion de las promesas con await
  }catch (error) {
    console.log(error);
  }
}

//la funcion async retorna una promesa implicitamente y se puede usar el metodo then para manejar la respuesta de la promesa 

RealizarPedido('Pizzas');