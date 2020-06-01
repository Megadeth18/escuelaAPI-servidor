const estudiantesModel=require('../models/estudiantesModel');
const cursosModel=require('../models/cursosModel');

//Funcion que se encarga de mostrar a los estudiantes
function getAllEstudiante(req,res){
     estudiantesModel.findAll().then((estudiantes)=>{
          return res.status(200).send(estudiantes);
     }).catch(err=>{
          res.status(400).json(err);
     });
}

//Funcion que se encarga de mostrar los estudiantes por MATRICULA
function getEstudianteMatricula(req, res){
     estudiantesModel.findByMatricula(req.params.matricula).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
}

///Funcion que se encarga de borrar los estudiante por MATRICULA
function deleteEstudianteMatricula(req,res) {
     if(estudiantesModel.eraseMatricula(req.params.matricula)){
          res.status(200).json({msg:`matricula: ${req.params.matricula} deleted succesfully`})
     } else {
          res.status(500). json({error:`could not delete matricula: ${req.params.matricula}`})
     }
};

///Funcion que se encarga de crear estudiante POST
function  createEstudiante (req, res){
     console.log(req.body);//para ver cuerpo de la petición
     let r = estudiantesModel.addEstudiante(req.body);
     if (r) {
          res.status(200).json({msg:`matricula: ${req.params.matricula} creada`})
     } else {
          res.status(500).json({error: "No se pudo crear"});
     }
}

function  put (req, res){
     let r = estudiantesModel.putEstudiante(req.body);
     if (r) {
          res.send(String(r));
     } else {
          res.status(500).json({error: "No se pudo crear"});
     }
}

// //actualiza estudiante PATCH
function patch (req, res){
     console.log("Entro");//para ver si entra al código
     let r =  estudiantesModel.savePatch(req.body);
     if(r){
          res.send(String(r));
     }else{
          res.status(500).json({error: "No existe"});
     }
}

function addACurso(req,res){
     if( cursosModel.findByClave(req.params.clave) && estudiantesModel.findByMatricula(req.params.matricula)){
     if(estudiantesModel.agregarCurso(req.params.clave, req.params.matricula)){
          res.status(200).json({msg:`Estudiante inscrito con exito`});
     }else{
          res.status(400).json({error: 'Existente'});
     }
}else{
     res.status(400).json({error: 'No encontrado'});
}
}



function deleteCurso(req,res){
     if(estudiantesModel.eliminarCurso(req.params.clave, req.params.matricula)){
          res.status(200).json({msg:`Estudiante eliminado del curso exito`});
     }else{
          res.status(400).json({error: 'Error'});
     }
}

//exporta las funciones
exports.getAllEstudiante = getAllEstudiante;
//exports.getEstudianteId = getEstudianteId;
exports.getEstudianteMatricula = getEstudianteMatricula;
exports.deleteEstudianteMatricula= deleteEstudianteMatricula;
 exports.patch = patch;
 exports.createEstudiante = createEstudiante;
 exports.put= put;
exports.addACurso = addACurso;
exports.deleteCurso=deleteCurso;
