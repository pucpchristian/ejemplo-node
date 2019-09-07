
const fs = require('fs');
const {copiarData,listarTabla} = require('./multiplicar/Multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
let base = argv.base;
let limite = argv.limite;


let valor = argv._[0];
console.log(valor+' valores: base:'+base+' limite:'+limite);
switch(valor){
    case 'crear' : {
        console.log('creando');
        copiarData(base,limite).then(correcto => console.log(correcto)).catch(err => console.log(err));
        return;
    }
    case 'listar' : {

        console.log('listando');
        listarTabla(base,limite);
        return;
    }
     default : console.log('no se reconoce comando'); 
}


/*
copiarData(base,limite)
.then(res => {console.log(res)})
.catch(err => {console.log(err)});
*/