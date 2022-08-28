import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

function App() {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <Card /> */}
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
