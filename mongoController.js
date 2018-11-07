const mongoose = require('mongoose');

const URI_DB = 'mongodb://admin:abc123@ds155213.mlab.com:55213/bachapi';

mongoose.connect(URI_DB,
    { useNewUrlParser: true },
    () => {
    console.log("Conexión exitosa con la BDD");
});


// Shortcuts por comodiddad
const Schema =  mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;


// Esquemas (moldes) para crear colecciones en la bdd

const bacheSchema = Schema({
    bache: ObjectId,
    latitud: {type:String},
    longitud: {type:String},
    comentario: {type:String}

});
