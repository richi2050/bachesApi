const express = require('express');
const bodyParser = require('body-parser');
const {Bache} = require('../basedatos/mongoController');
const app = express();


const port = process.env.PORT || 3001;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response)=>{
    response.status(200).send('Estamos en la !! ....');
});

// end pint post
app.post('/api/v1/bache/', (req, res)=>{
  const {latitud,longitud,comentario} =  req.body;
  const bacheNuevo = Bache({
        latitud: latitud,
        longitud: longitud,
        comentario: comentario
    });

    // Pedir a la base de datos que guarde el nuevo objeto en su respectiva colección
    bacheNuevo.save( (error, nuevoDirector)=>{
        if (error) {
            res.status(400).send(error.message);
        } else {
            res.status(201).send(nuevoDirector);
          }
        });
});

// end pint list
app.get('', (req, res)=>{

});
//
// // end pint id
app.get('', (req, res)=>{

});


app.listen(3001, ()=>{
    console.log("El servidor esta escuchando en el puerto 3001");
});
