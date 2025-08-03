// const express = require('express')
// const app = express()
// require('dotenv').config()

// //const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/twitter', ( req, res)=>{
//     res.send('welcome to twitter server');
// })

// app.get('/login', (req, res)=> {
//     res.send('<h1>welcome to chai aur code </h1>')
// })

// app.get('/youtube', (req, res)=> {
//     res.send('<h2> welcome to  youtube')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })

import express from 'express'
import dotenv from 'dotenv'

const app = express()

const port = process.env.PORT || 4000;

app.get('/', (req,res)=> {
  res.send('Server is ready')
})


//get a list of a 5 jokes and render it in a frontend
app.get('/api/jokes', (req, res)=>{
  const jokes = [
    {
      id: 1,
      title:'A joke',
      content: 'This is a joke'
    },
    {
      id: 2,
      title:'Another joke',
      content: 'This is a second joke'
    },
    {
      id: 3,
      title:'A  third joke',
      content: 'This is a third joke'
    },
    {
      id: 4,
      title:'A fourth joke',
      content: 'This is a fourth joke'
    },
    {
      id: 5,
      title:'A fifth joke',
      content: 'This is a fifth joke'
    }
  ];

  res.send(jokes);//send an array of jokes from backend
})



app.listen(port, ()=>{
  console.log(`serve at http://localhost:${port}`);
})
