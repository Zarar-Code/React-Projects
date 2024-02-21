import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCounter]= useState(10)
  
  const addValue= ()=>{
    if(counter < 20){
      setCounter(counter+1)
    }

  }
  const decValue= ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Code with Zarar</h1>
    <h3>Count: {counter} </h3>

    <button
    onClick={addValue}
    >Add Value {counter}
    </button>

    <button
     onClick={decValue}
    >Dec Value {counter}</button>
    </>
  )
}

export default App
