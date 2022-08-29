import React from "react"

export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`/src/assets/${props.coverImg}`} alt="katie" />
      <div className="card--rating">
        <img src="/src/assets/star.png" alt="" />
        <p>{props.stats.rating} <span>({props.stats.reviewCount}) • {props.location}</span></p>
      </div>
      <p>{props.title}</p>
      <p><strong>From ${props.price}</strong> / person</p>
    </div>
  )
}
