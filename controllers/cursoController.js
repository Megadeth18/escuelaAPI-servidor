const cursoModel=require('../models/cursosModel');//obtiene la ruta de funciones

//Funcion que tiene como objetivon el muestrar los cursos
function  getAllCursos (req,res){
		cursoModel.findAll().then((cursos) =>{
			return res.status(200).send(cursos);
		}).catch(err =>
		{
			res.status(500).send('No se encontraron Cursos');
		});
}

//Funcion que tiene como objetivo el muestrar cursor por CLAVE
function getCursoClave(req, res){
	console.log(req.params.clave);//para ver la peticion
	cursoModel.findByClave(req.params.clave).then((curso) => {
		 res.status(200).json(curso);
	}).catch(err => {
		 res.status(500).json({error: "No encontrado"});
	});
}

//Funcion que tiene como objetivo el borrar un  curso por CLAVE
function deleteCursoClave(req,res) {
	if(cursoModel.eraseClave(req.params.clave)){
		 res.status(200).json({msg:`Clave: ${req.params.clave} deleted succesfully`})
	} else {
		 res.status(500). json({error:`could not delete matricula: ${req.params.clave}`})
	}
};

//Funcion que tiene como objetivo el crear estudiante POST
function  createCurso(req, res){
	console.log(req.body);//para ver cuerpo de la petición
	let r = cursoModel.addCurso(req.body);
	if (r) {
		 res.status(200).json({msg:`Cueso: ${req.params.curso} creada`})
	} else {
		 res.status(500).json({error: "No se pudo crear"});
	}
};

//Funcion que tiene como objetivo actualizar estudiante PUT
function  put (req, res){
	let r = cursoModel.putCurso(req.body);
	if (r) {
		 res.send(String(r));
	} else {
		 res.status(500).json({error: "No se pudo crear"});
	}
}

function patch (req, res){
	let r = cursoModel.savePatch(req.body);
	if(r){
		 res.send(String(r));
	}else{
		 res.status(500).json({error: "No existe"});
	}
}

//Metodo que tiene como funcion el mostrar cursosEstudiante
function  getAllCursosEstudiante (req,res){
		cursoModel.findAllCurso(req.params.clave).then((curso) =>{
//HEAD
			res.status(200).json(curso);
			res.status(200).json(req.body);
//c89c8e65b1e04b5b87a989b48c36cc370ec4f0b4
				}).catch(err =>
		{
			res.status(500).send('No se encontraron Cursos');
		});
}

//exporta las funciones
exports.getAllCursos = getAllCursos;
 exports.getCursoClave = getCursoClave;
 exports.deleteCursoClave= deleteCursoClave;
 exports.createCurso=createCurso;
 exports.put=put;
 exports.patch=patch;
 exports.getAllCursosEstudiante=getAllCursosEstudiante;
