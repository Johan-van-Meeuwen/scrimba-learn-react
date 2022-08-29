import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.card.imageUrl} alt={props.card.location} className="card--image"/>
      <div className="card--info">
        <div className="card--location">
          <img src="/src/assets/location_pin.png" alt="location" className="card--location--pin"/>
          <h3 className="card--country">{props.card.location}</h3>
          <a href={props.card.googleMapsUrl} className="card--google--maps" target="_blank">View on Google Maps</a>
        </div>
        <h1 className="card--destination">{props.card.title}</h1>
        <p className="card--date"><strong>{props.card.startDate} - {props.card.endDate}</strong></p>
        <p className="card--description">{props.card.description}</p>
      </div>
    </div>
  )
}
