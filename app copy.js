
const fs = require('fs');
const {copiarData} = require('./multiplicar/Multiplicar.js');
const  argv = require('yargs').argv;


let argv2 = process.argv;

//console.log(argv);
console.log(argv2);

/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
*/
// console.log(xx);
/*
copiarData(base)
.then(res => {console.log(res)})
.catch(err => {console.log(err)});*/