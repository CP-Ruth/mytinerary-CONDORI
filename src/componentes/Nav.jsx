import React from 'react'
import Anchor from './Anchor'

export default function Nav() {
  let data =[
    {href:'home.jsx' , text: 'Home'},
    {href:'city.jsx' , text: 'City'},
    {href:'login.jsx' , text: 'Login'},
  ]

  // traer el componente Anchor y relacionarlo
  return (
    <nav>
      {data.map((each, key) => <Anchor key={key} href={each.href} title={each.text} />)}
    </nav>
  )
}
