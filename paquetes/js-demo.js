const jsondata = require('./example.json');
//console.log(jsondata);

let data = {
    "tittle": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": 1954,
    "pages": 1170,
    "publisher": "Allen & Unwin",
    "language": "English",
    "ISBN": "0-04-823293-3",
    "public": true,
    "tags": [
        "fantasy",
        "adventure",
        "epic"
    ]
}

// de JSON a String (JSON.stringify)
//objeto -> string
let dataJSON = JSON.stringify(data);
console.log(dataJSON);
typeof dataJSON; //string


// de String a JSON (JSON.parse)
//string -> objeto
let dataobjetc = JSON.parse(dataJSON);
console.log(dataobjetc);
typeof dataobjetc; //object