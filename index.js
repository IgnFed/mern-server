const express = require('express');
const morgan = require('morgan');
const path = require('path')

console.log(__dirname)
//INITIALIZE
const app = express();
require('dotenv').config()
require('./database'); 
const port = process.env.PORT || 3301;


//SETTINGS
app.set('port', port);




//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//ROUTES
app.use('/api/tasks/',require('./routes/task.routes'))



//GLOBAL VARIABLES 






//LISTENING
app.listen(app.get('port'),()=>{

   // console.clear()
   console.log('Listening on port', app.get('port'))
})