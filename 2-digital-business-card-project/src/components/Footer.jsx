import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="https://google.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://google.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://google.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://google.com"><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
    </footer>
  )
}

export default Footer
