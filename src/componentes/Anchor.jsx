import React from 'react'

function Anchor( {href, title }) {
  return (
    <a href={href}>{ title }</a>
  )
}

export default Anchor