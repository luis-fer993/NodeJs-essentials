//promesas


//se define como un objeto que representa la terminación o el fracaso eventual de una operación asíncrona

//promise = promesa

//se usa en conexiones a bases de datos, peticiones a APIs, servidor web, etc

//su estado puede ser: pending   PENDIENTE(al iniciar ),=>(al prosesar los datos) fulfilled(CUMPLIDA), rejected(RECHAZADA)

//se crea con new Promise() y se le pasa una funcion con dos parametros: resolve y reject  

//SE ASOCIA CON EL CALLBACK., QUE ES UNA FUNCION QUE SE EJECUTA CUANDO SE TERMINA UNA OPERACION ASINCRONA
//la funcion callback se pasa a otra funcion como parametro y luego se ejcuta dentro de la funcion que la recibe

//se ejecuta con estos metodos .then() y .catch()
const promesaCumplida = true;

const promesa = new Promise((resolve, reject) => {
    //resolve y reject son funciones que se ejecutan cuando la promesa se cumple o no
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('se cumplio la promesa');//describe el resultado de la promesa exitosa
        } else {
            reject('no se cumplio la promesa.. Rechazada');//describe el resultado de la promesa fallida
        }
    }, 2000);//espera 2 segundos para ejecutar la promesa
});  

//formas de definir la promesa;

const manejopromesaCumplida = (resultado) => {
    console.log(resultado);
}  

const manejopromesarechazada = (error) => {
    console.log(error);
}
//forma 1 
promesa.then(manejopromesaCumplida).catch(manejopromesarechazada);

//forma 2
promesa.then(manejopromesaCumplida,manejopromesarechazada)

//forma 3
promesa.then((resultado) => {
    //se ejecuta cuando la promesa se cumple
    //resultado es el parametro que se le pasa a resolve
    console.log(resultado);
});

promesa.catch((error) => {
    //se ejecuta cuando la promesa no se cumple
    //error es el parametro que se le pasa a reject
    console.log(error);
});

