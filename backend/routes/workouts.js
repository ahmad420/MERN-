const express = require('express')

const {createworkout,getWorkout,getWorkouts, updateworkout, deleteworkout} = require("../controllers/workoutcontroller")


const router = express.Router()

router.get('/' , getWorkouts)

router.get('/:id' ,getWorkout)

router.post('/' , createworkout)

router.delete('/:id' ,deleteworkout)

router.patch('/:id' , updateworkout)


module.exports = router