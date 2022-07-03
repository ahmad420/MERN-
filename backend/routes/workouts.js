const express = require('express')
const Workout = require('../models/workoutmodel')

const router = express.Router()

router.get('/' , (req,res) => {
    res.json({mssg:'GET ALL'})})

router.get('/:id' , (req,res) => {
    res.json({mssg:'GET SINGLE'})
})

router.post('/' , async (req,res) => {
    const{title,load,reps}=req.body    

    try{
        const workout = await Workout.create({title,load,reps}) 
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
       
    }
    
})

router.delete('/:id' , (req,res) => {    
    res.json({mssg:'Delete '})
})

router.patch('/:id' , (req,res) => {    
    res.json({mssg:'UPDATE'})
})


module.exports = router