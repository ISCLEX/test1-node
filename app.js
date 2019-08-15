const argv = require ('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let opciones =  argv._[0];

switch (opciones){

    case 'crear':
        let cre = porHacer.crear( argv.descripcion );
        console.log(cre);
        //console.log('crear por hacer');
        break;
    case 'actualizar':
        let act = porHacer.actualizar( argv.descripcion , argv.completado );
        console.log(act);
       // console.log('actualziar tarea');
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let lista of listado){
            console.log('========Por Hacer========'.green);
            console.log('Tarea:',lista.descripcion);
            console.log('Estado:', lista.completado);
            console.log('========================='.green);

        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("no se reconoce el comando");
}
