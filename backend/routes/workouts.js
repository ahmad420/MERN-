const express = require('express')

const {createworkout,getWorkout,getWorkouts} = require("../controllers/workoutcontroller")


const router = express.Router()

router.get('/' , getWorkouts)

router.get('/:id' ,getWorkout)

router.post('/' , createworkout)

router.delete('/:id' , (req,res) => {    
    res.json({mssg:'Delete '})
})

router.patch('/:id' , (req,res) => {    
    res.json({mssg:'UPDATE'})
})


module.exports = router