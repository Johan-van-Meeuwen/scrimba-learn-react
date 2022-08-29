import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from '/src/data.js'

function App() {
  const cards = data.map((card) => {
    return <Card
      key={card.id}
      card={card}
    />
  })
  return (
    <div className='container'>
      <Navbar />
      <section className="card--list">
        {cards}
      </section>
    </div>
  )
}

export default App
