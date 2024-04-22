
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffes = useLoaderData()  
  
  const [coffees, setCoffees ] = useState(loadedCoffes)     

  return (
    <>
      
      <h1 className=' text-6xl text-orange-500'>Hot Hot Coffees: {loadedCoffes.length}</h1>
     <div className=' grid md:grid-cols-2 gap-5'>
     {
        loadedCoffes.map(coffee =>
           <CoffeeCard key={coffee._id}
           coffees={coffees}
           setCoffees={setCoffees}
           coffee={coffee}
           > </CoffeeCard>)
      }
     </div>
    </>
  )
}

export default App
