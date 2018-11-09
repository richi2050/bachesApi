const express = require('express');
const bodyParser = require('body-parser');
const {Bache} = require('../basedatos/mongoController');
<<<<<<< HEAD
=======
var cors = require('cors');
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
const app = express();


const port = process.env.PORT || 3001;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.get('/', (request, response)=>{
=======
app.get('/',  cors(),(request, response)=>{
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
    response.status(200).send('Estamos en la !! ....');
});

// end pint post
<<<<<<< HEAD
app.post('/api/v1/bache/', (req, res)=>{
=======
app.post('/api/v1/bache/', cors(), (req, res)=>{
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
  const {latitud,longitud,comentario} =  req.body;
  const bacheNuevo = Bache({
        latitud: latitud,
        longitud: longitud,
        comentario: comentario
    });
    // Pedir a la base de datos que guarde el nuevo objeto en su respectiva colección
    bacheNuevo.save( (error, nuevoBache)=>{
        if (error) {
            res.status(400).send(error.message);
        } else {
            res.status(201).send(nuevoBache);
          }
        });
});

// end pint list
<<<<<<< HEAD
app.get('/api/v1/bache/', (req, res)=>{
=======
app.get('/api/v1/bache/',  cors(),(req, res)=>{
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
    Bache
    .find()
    .populate('Baches')
    .exec()
    .then(listaBaches =>{
        res.status(200).send(listaBaches);
    })
    .catch ( error => res.status(400).send(error));
});
//
// // end pint id
<<<<<<< HEAD
app.get('/api/v1/bache/:id', (req, res)=>{
=======
app.get('/api/v1/bache/:id',  cors(),(req, res)=>{
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
  const {id} = req.params;
  Bache.findById(id)
       .exec()
       .then(bache => res.status(200).send(bache))
       .catch(error => {
           error.name === 'CastError'
           ? res.status(404).send({
               "mensaje_servidor": "no fue posible hallar el bache con el id especificado",
               "mensaje_mongodb":error
           })
           : res.status(404).send(error)
       });

});

//  // endpoint delete
<<<<<<< HEAD
app.delete('/api/v1/bache/:id', (req, res)=> {
=======
app.delete('/api/v1/bache/:id',  cors(),(req, res)=> {
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
    Bache
    .findByIdAndDelete(req.params.id)
    .exec()
    .then( () => res.status(204).send({"mensaje": "Registro de Bache eliminado exitosamente"}))
    .catch( error => res.status(404).send(error));
});

// // endpoint update

<<<<<<< HEAD
app.put('/api/v1/bache/:id', (req, res)=> {
=======
app.put('/api/v1/bache/:id',  cors(),(req, res)=> {
>>>>>>> d54ab9c3413f8f350f5a435060e2ab8b5357f304
    const {id} = req.params;
           Bache
           .findByIdAndUpdate( id, {$set: req.body}, {new: true})
           .populate('baches')
           .exec()
           .then( bacheActualizado => res.status(200).send (bacheActualizado))
           .catch( error => res.status(400).send(error));

});


app.listen(port, ()=>{
    console.log("El servidor esta escuchando en el puerto 3001");
});
