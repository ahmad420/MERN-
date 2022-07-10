import React, { useEffect, useState } from 'react'
import { WorkoutDetalis } from '../components/WorkoutDetalis'
import WorkoutForm from '../components/WorkoutForm'

export const Home = () => {

const [workouts,setWorkouts]= useState(null)

useEffect(()=>{
    const fetchWorkouts = async () => {

    const response = await fetch('/api/workouts')
    const json = await response.json()
    
        if(response.ok){
            setWorkouts(json)    
        }
    }
    fetchWorkouts()
},[])

  return (
    <div className='home'>
        <div className='workouts'>
        {workouts && workouts.map( (workout) => (
            <WorkoutDetalis key={workout._id} workout={workout}/>
        ))}
        </div>
       <WorkoutForm/>
    </div>
  )
}
