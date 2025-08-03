import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [jokes, setJokes] = useState([])
  
  useEffect(()=>{
    axios.get('/api/jokes')//iske liye proxy use karenge /api k liye http://localhost:4000/api.jokes
    .then((response)=> {
      setJokes(response.data)//with the help of axios we do not want to convert the reponse into json it automatically coneverts promise response into json
      //now store this response ka data in joke state of useState by using setJokes
    })
    .catch((error)=> {
      console.log(error)
    })
  })
  return (
    <>
     <h1>chai aur code</h1>
     <p>JOKES:{jokes.length}</p>

     {
      jokes.map((joke)=> (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
