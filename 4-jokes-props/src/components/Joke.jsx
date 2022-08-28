import React from "react"

export default function Joke(props) {
  return (
    <section>
      {props.setup && <h5>Setup: {props.setup}</h5>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </section>
  )
}
