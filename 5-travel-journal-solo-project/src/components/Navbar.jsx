import React from 'react'
import worldIcon from "/public/assets/world.png"

export default function Navbar() {
  return (
    <nav>
      <img src={worldIcon} alt="world-icon" />
      <p>my travel journal.</p>
    </nav>
  )
}
