/* eslint-disable no-unused-vars */
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import Data from "./data"




function App() {
  var singleData = Data.map((item) => 
  <Card 
  key={item.id} 
  item={item}
  
  />)

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        {singleData}
        

        

      </div>
    </>
  )
}

export default App
