const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
   itemNum : {type: Number},
   title : {type: String, required: true},
   description: {type: String , required: true}
});

 
const task = mongoose.model('Task', TaskSchema); //(Nombre del modelo  ,   Estructura del modelo)

module.exports = task; 