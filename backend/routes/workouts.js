const express = require('express')

const router = express.Router()

router.get('/' , (req,res) => {
    res.json({mssg:'GET ALL'})})

router.get('/:id' , (req,res) => {
    res.json({mssg:'GET SINGLE'})
})

router.post('/' , (req,res) => {    
    res.json({mssg:'Post'})
})

router.delete('/:id' , (req,res) => {    
    res.json({mssg:'Delete '})
})

router.patch('/:id' , (req,res) => {    
    res.json({mssg:'UPDATE'})
})


module.exports = router