const express = require('express')
const mongoose = require('mongoose')
const Patient = require('./Models/Patientdetails')
const app = express()


mongoose.connect('mongodb+srv://otengnanayaw354:Kangaroo5030@cluster0.whomgig.mongodb.net/Hospital').then(()=>{
    console.log('connected to database').catch(()=>{
        console.log('Database disconnected')
    })

    app.listen(1717, ()=>{
        console.log("Server is running at port 1717")
    })
})

