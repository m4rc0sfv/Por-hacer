const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descricpión de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea, este pendiente o no', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}