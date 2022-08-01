import React from 'react'
import Travelcard from '../components/Travelcard'
import data from '../components/data'
import './App.css'
import Navbar from '../components/Navbar'



const App = () => {
  const datas = data.map(items => 
    <Travelcard 
      key = {items.id}
      {...items}
    />
    )
  return (
    <div>
      <Navbar />
      <div className='body'>
      {datas}
      </div>
    </div>
  )
}

export default App
