const nombre = {
    demand: true,
    alias: 'n'
}
const id = {
    demand: true,
    alias: 'i'
}
const correo = {
    demand: true,
    alias: 'c'
}
const telefono = {
    demand: true,
    alias: 't'
}
const tipo = {
    default: 'aspirante',
    alias: 'p'
}
const creacion = {
    nombre,
    id,
    correo,
    telefono,
    tipo
}
const registrados = {

}
const actualizardatos = {
    nombre,
    id,
    correo,
    telefono
}
const actualizartipo = {
    id,
    tipo
}
const argv = require('yargs')
    .command('registrar', 'Crear lista de usuarios', creacion)
    .command('registrados', 'Mostrar los cursos disponibles')
    .command('actualizardatos', 'Actualiza los datos del usuario', actualizardatos)
    .command('actualizartipo', 'Actualiza el tipo de usuario', actualizartipo)
    .argv

module.exports = {
    argv
};
