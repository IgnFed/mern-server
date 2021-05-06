const express = require('express');
const { db } = require('../models/tasks');
const router = express.Router();
const Task = require('../models/tasks')

router.get('/',async (req,res)=>{

   const tasks = await Task.find();

   console.log(tasks)
   

   res.json(tasks)
})

router.post('/', async (req,res)=>{

  try {
   console.log(req.body)
   const {itemNum, title, description} = req.body;
   const task = new Task({itemNum, title, description  })
   await task.save();
   console.log(task)
   res.json( task )
   } catch (error) {
   
      console.log(error)
   }

})

router.put('/:id', async(req,res)=>{

   const {itemNum, title, description} = req.body;
   const newTask = {itemNum, title, description};
   const modifyedTask = await Task.findByIdAndUpdate(req.params.id, newTask) //(ENCUENTRA POR EL ID, ACTUALIZA CON LOS NUEVOS VALORES)
   console.log(modifyedTask)
   
   res.json({status: 'Updated'})

})

router.delete('/:id', async (req,res)=>{

   await Task.findByIdAndDelete(req.params.id)
   res.json({
      status: 'deleted'
   })
   

})

router.delete('/', async(req,res)=>{

   await Task.deleteMany({})
   res.json({
      status: 'All The document has been deleted'
   })

})

module.exports = router;