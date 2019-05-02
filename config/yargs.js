
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'crear nueva tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'listar por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}