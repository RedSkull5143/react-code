import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let abc={
    fname: "om",
    lname: "shinde",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl'>Om Shinde</h1>
      
      <Card name="Om" />
      <Card name="Mitali" />
      

    </>
  )
}

export default App
