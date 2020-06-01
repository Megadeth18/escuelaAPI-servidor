const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'escolar',
	'backenduser',
	'12345678',
	{
		host: 'localhost',
		dialect: 'mysql'
	});
/*Creacion de la tabla EstudianteCurso con sus respectivos campos y tipo de variables*/
const EstudianteCursos = sequelize.define('estudianteCursos',{
	clave: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: false
	} ,
	matricula: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: false
	}

});
EstudianteCursos.sync({ force: true});
