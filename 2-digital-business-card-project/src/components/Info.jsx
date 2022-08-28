import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Profile from "/src/assets/johan-2.png"

function Info() {
  return (
    <div className="info--section">
      <img src={Profile} alt="johan" />
      <h1>Johan van Meeuwen</h1>
      <h3>Support Engineer</h3>
      <p>johan-van-meeuwen.herokuapp.com</p>
      <div className="contact-buttons">
        <a href="https://google.com" className='email-button'><FontAwesomeIcon icon={faEnvelope} /> Email</a>
        <a href="https://google.com" className='linkedin-button'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
      </div>
    </div>
  )
}

export default Info
