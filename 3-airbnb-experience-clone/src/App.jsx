import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import airbnbData from './data.js'

function App() {
  const experiences = airbnbData.map((experience) => {
    return <Card
      key={experience.id}
      {...experience}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {experiences}
      </section>
    </div>
  )
}

export default App

const person = {
  firstName: "Johan",
  lastName: "van Meeuwen"
}

const {firstName, lastName} = person
console.log(lastName, firstName)
