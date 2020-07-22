// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./Por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log("Crear nota");
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("====Por hacer=====".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("==================\n".green);
        }
        break;
    case 'actualizar':
        let actulizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actulizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");

}