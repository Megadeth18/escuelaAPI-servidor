const express = require ('express');
const router = express.Router();

const estudiantesController=require('../controllers/estudiantesController');
const cursosController=require('../controllers/cursoController');

//Rutas con acciones CRUD
router.use(express.json());
router.get('/estudiantes',estudiantesController.getAllEstudiante);//Obtiene todos los estudiantes
router.get('/estudiantes/:matricula',estudiantesController.getEstudianteMatricula);//Obtiene estudiante por MATRICULA
router.delete('/estudiantes/:matricula',estudiantesController.deleteEstudianteMatricula);//Borra estudiante por Matricula
router.post('/estudiantes',estudiantesController.createEstudiante);//Crea estudiante
router.put('/estudiantes/:matricula',estudiantesController.put);//actualiza estudiante por matricula
router.patch('/estudiantes/:matricula',estudiantesController.patch);//actualiza estudiante por matricula

router.get('/cursos',cursosController.getAllCursos);//Obtiene cursos
router.get('/cursos/:clave',cursosController.getCursoClave);//Obtiene curso por Clave
router.delete('/cursos/:clave',cursosController.deleteCursoClave);//Borra curso por clave
router.post('/cursos',cursosController.createCurso);//Crea estudiante
router.put('/cursos/:clave',cursosController.put);//actualiza estudiante por clave
router.patch('/cursos/:clave',cursosController.patch);//actualiza estudiante por clave

router.get('/estudiantes/cursos/:clave',cursosController.getAllCursosEstudiante);//Obtiene estudiantes en curso
router.post('/cursos/:clave/estudiantes/:matricula',estudiantesController.addACurso);//Inscribe un estudiante en el curso
router.delete('/cursos/:clave/estudiantes/:matricula',estudiantesController.deleteCurso);//Elimina un estudiante del curso


//exporta el express
module.exports = router;

