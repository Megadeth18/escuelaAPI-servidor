//app.js (SERVIDOR)
const express = require('express');//como servidor de nuestra API
const app = express(); //express en una variable
const port = 4000; //puerto por donde escucha
const morgan = require('morgan');//Indica tipo de error
const cors = require('cors'); // cuando se hacen peticiones con axios y vue

// Configuraciones
app.set('port' , process.env.PORT || 4000 );
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));// funciona con middleware pasa entre capas para poder hacer peticiones de tipo post (cuerpo de la peticion y poder tratarlos en node.js)
app.use(express.json());//admite peticiones en formato json
app.use(express.json());
app.use( require( './routes/index.js' ) );
app.listen(port, ()=> {
    console.log(`Servidor escuchando por http://localhost:${port}`);
}).on("error", err => {
    console.log("Error al inicar el servidor", err);
});

module.exports = app;

