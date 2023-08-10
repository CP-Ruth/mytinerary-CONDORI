import React from 'react'
import Layout from './layouts/Layout'
import Main from './componentes/Main/Main'
import Home from './pages-vistas/Home'
import './App.css'



function App() {
  return (
    <>
      <Layout>
        <Main />
        <Home />
      </Layout>
    </>
  )
}

export default App
