const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'crear una tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente el estado de una tarea'

};

const argv = require('yargs')
                .command('crear','crear una tarea',{
                    descripcion 
                })
                .command('actualizar', 'actualiza los datos de una tarea',{
                    descripcion,
                    completado
                })
                .command('borrar', 'borra los datos de una tarea',{
                    descripcion,
                    completado
                })
                .help()
                .argv;

module.exports = {
    argv
}

