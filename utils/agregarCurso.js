const db = require('../models/database/db');

// db.Curso.create({
// 	nombre: 'JavaScript',
// 	clave: 2125,
// 	creditos: 7
// }).then(() => {
// 	console.log('Curso creado');
// }).catch(err => {
// 	console.log(err);
// }).then(() => {
// 	console.log('Cerrando conexion');
// 	db.sequelize;
// });

db.Curso.create({
	nombre: 'Sistemas Operativos',
	clave: 12103,
	creditos: 6
}).then(() => {
	console.log('Curso creado');
}).catch(err => {
	console.log(err);
}).then(() => {
	console.log('Cerrando conexion');
	db.sequelize;
});
