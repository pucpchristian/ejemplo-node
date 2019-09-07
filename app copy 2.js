
const fs = require('fs');
const {copiarData} = require('./multiplicar/Multiplicar.js');
const  argv = require('yargs')
            .command('listar','imprime en consola la tabla',{
                base:{
                    demand:true,
                    alias: 'b'
                },
                limite:{
                    alias: 'l',
                    default: 10
                }
            }).help()
            .argv;
//let argv2 = process.argv;
//console.log(argv);
//console.log(argv2);

let base = argv.base;
let limite = argv.limite;
copiarData(base,limite)
.then(res => {console.log(res)})
.catch(err => {console.log(err)});