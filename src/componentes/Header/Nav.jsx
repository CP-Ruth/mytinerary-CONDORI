import React from 'react'
//import Anchor from './Anchor'
import { CiUser } from "react-icons/ci";
import './styles.css'

//Saque el Anchor
/*
  let data =[
    {href:'home.jsx' , text: 'Home'},
    {href:'city.jsx' , text: 'City'},
    {href:'login.jsx' , text: 'Login', class:'login'},
  ]

  return (
    <nav>
      {data.map((each, key) => <Anchor key={key} href={each.href} title={each.text} className={each.class} />)}
    </nav>
  ) */


export default function Nav() {
return(
  <>
  <nav>
  <a href="">Home</a>
  <a href="">City</a>
  <a href="" className='login'><CiUser />Login</a>
  </nav>
  </>
)

}

