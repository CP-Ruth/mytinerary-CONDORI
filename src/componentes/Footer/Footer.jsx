import React from 'react'
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram} from "react-icons/io5";
import "../Footer/styles.css"

function Footer() {
  return (
    <footer>
      <div className='socialmedia'>
      <a href="https://web.whatsapp.com"><IoLogoWhatsapp/></a>
      <a href="https://www.instagram.com"><IoLogoInstagram/></a>
      <a href="https://github.com/listo-dale/mytinerary-CONDORI"><IoLogoGithub/></a>
      <a href="https://ar.linkedin.com"><IoLogoLinkedin/></a>
      </div>

      <h3>MindHub - Ruth Condorí</h3>
    </footer>
  )
}

export default Footer