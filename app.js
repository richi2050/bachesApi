const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


// end pint list
app.get('', (req, res)=>{

});

// end pint id
app.get('', (req, res)=>{

});


// end pint post
app.get('', (req, res)=>{

});


app.listen(3000, ()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});
