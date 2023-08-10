import React from 'react'
import './styles.css'


function Anchor( {href, title, clase}) {
  return (
    <a href={href} className={clase}>{title} </a>
  )
}

export default Anchor