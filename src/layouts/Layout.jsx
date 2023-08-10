import React from 'react'
import Footer from '../componentes/Footer/Footer'
import Header  from '../componentes/Header/Header'

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <div>
        {children}
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout