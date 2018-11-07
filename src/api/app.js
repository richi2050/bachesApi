const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response)=>{
    response.status(200).send('Estamos en la !! ....');
});

// end pint list
app.get('', (req, res)=>{

});

// end pint id
app.get('', (req, res)=>{

});


// end pint post
app.post('', (req, res)=>{

});


app.listen(3001, ()=>{
    console.log("El servidor esta escuchando en el puerto 3001");
});
