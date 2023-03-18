const express = require('express');
const { connection } = require('mongoose');

const app = express();














app.listen('8080',async(req,res)=>
{
    try {
        await connection
        console.log('Listening on Port', process.env.port)
    } catch (error) {
        
    }
})