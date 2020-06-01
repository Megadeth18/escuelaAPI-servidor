const db = require ('../models/database/db');

//busca cursos
async function findAll(){
	let cursos = await db.Curso.findAll();
	return cursos;
}

// //busca cursos por CLAVE
async function findByClave(clave){
	let curso = await db.Curso.findAll({
		where:
			{
				clave: clave
			}
	});
	return curso;
}

// //borra curso por CLAVE
async function eraseClave(clave) {
    let curso = await db.Curso.destroy({
        where: {
            clave: clave
        }
    });
    return curso;
};


async function addCurso (body){
	let curso = await db.Curso.create(
	{
		
		nombre: body.nombre,
		clave: body.clave,
		creditos:body.creditos
	});
	return curso;

}

async function putCurso (body){

    console.log(body.curso);

    let curso= await db.Curso.update({

       
        
		nombre: body.nombre,
		clave: body.clave,
		creditos:body.creditos
        
        },
        { where:
                {
                
                    clave: body.clave

                   
                }
        });
    
    return curso;
}

async function savePatch (body){

    if(body.nombre!=undefined)
    {
         curso=await db.Curso.update(
            {
                nombre: body.nombre
            },
            { where:
                    {
                        clave: body.clave
                    }
            });
    }

    if(body.creditos!=undefined)
    {
         cursoe=await db.Curso.update(
            {
                creditos: body.creditos
            },
            { where:
                    {
                        clave: body.clave
                    }
            });
    }

  
    
    return curso;
}
//busca estudiantes en curso
async function findAllCurso(clave){
    let curso = await db.EstudianteCursos.findAll({
		where:
			{
				clave: clave
			}
	});
    return curso;
   
}





//exporta los métodos
exports.findAll = findAll;
exports.findByClave = findByClave;
exports.eraseClave = eraseClave;
exports.addCurso=addCurso;
exports.putCurso=putCurso;
exports.savePatch=savePatch;
exports.findAllCurso = findAllCurso;
