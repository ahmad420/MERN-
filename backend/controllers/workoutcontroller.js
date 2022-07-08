const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')


// get all Workouts
const getWorkouts = async (req,res) =>{
   const workouts= await Workout.find({}).sort({createdAt:-1}) 
   res.status(200).json(workouts)
}

//  get single Workout
const getWorkout = async (req,res) =>{
    const {id} = req.params

    
    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).json({error:"no such workout"})

    const workout= await Workout.findById(id)

    if(!workout) 
        return res.status(404).json({error:"no such workout"})

   res.status(200).json(workout)     
 }


//create new workout
const createworkout = async (req,res) => {
    const {title,load,reps}=req.body    

    //add to db
    try{
        const workout = await Workout.create({title,load,reps}) 
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
       
    }
}

// delete workout 
const deleteworkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).json({error:"no such workout"})

    const workout= await Workout.findOneAndDelete({_id:id})

    if(!workout) 
    return res.status(400).json({error:"no such workout"})

    res.status(200).json(workout)
}


//update workout
const updateworkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).json({error:"no such workout"})

    const workout = await Workout.findOneAndUpdate({_id:id},{
      ...req.body  
    })

    if(!workout) 
    return res.status(400).json({error:"no such workout"})
    
    res.status(200).json(workout)
}


module.exports = {
    createworkout,
    getWorkout,
    getWorkouts,
    updateworkout,
    deleteworkout
}