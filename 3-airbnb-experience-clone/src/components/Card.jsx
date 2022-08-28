import React from "react"

export default function Card() {
  return (
    <section>
      <div className="card">
        <img src="/src/assets/katie.png" alt="katie" />
        <div className="card--rating">
          <img src="/src/assets/star.png" alt="" />
          <p>5.0 <span>(6) • USA</span></p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
      </div>
    </section>
  )
}
