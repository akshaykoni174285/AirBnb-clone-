/* eslint-disable no-unused-vars */
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Card 
        img="src/assets/katie-zaferes.png"
        rating={6}
        country="USA"
        title="life lessons with katie zaferes"
        rate ={136}
        />

        <Card 
        img="src/assets/katie-zaferes.png"
        rating={6}
        country="USA"
        title="life lessons with katie zaferes"
        rate ={136}
        />
          <Card 
        img="src/assets/katie-zaferes.png"
        rating={6}
        country="USA"
        title="life lessons with katie zaferes"
        rate ={136}
        />
        <Card 
        img="src/assets/katie-zaferes.png"
        rating={6}
        country="USA"
        title="life lessons with katie zaferes"
        rate ={136}
        />

      </div>
    </>
  )
}

export default App
