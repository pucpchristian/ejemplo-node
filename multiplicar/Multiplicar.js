
const fs = require('fs');
const colors = require('colors/safe');


let copiarData = (base,limite=10) => {
    let data = '';
    let res = new Promise((resolve,reject) => {
        
        if(!Number(base)){
            reject('base No es un Numero');
            return;
        }
        if(!Number(limite)){
            reject('limite No es un Numero');
            return;
        }

        let name = `cochoa-${base}.txt`;
        for (let i = 1; i <= limite; i++) {
            let valor = `${i} * ${base} = ${base * i}\n`;
            //console.log(valor);
            data += valor;
        }

        fs.writeFile(name, data, (err) => {
            if (err) reject(err);
            resolve('Archivo creado : '.red+colors.green(name));
        });        

    });
    return res;
}


let listarTabla = (base,limite=10) => {

    console.log('========================='.green);
    console.log(`===== tabla de ${base} ==`.yellow);
    console.log('========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${base * i}`);
        //console.log(valor);
        
    }

}

module.exports = {
 copiarData,
 listarTabla
}