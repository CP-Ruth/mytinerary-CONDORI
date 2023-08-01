import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
          <p>My Tinerary</p>
          <nav>
            <a href="#">Home</a>
            <a href="#">Cities</a>
            <a href="#" class="login">Login</a>
          </nav>
      </header>
      <main>
          <div class="findDestination">
            <h2>Find the perfect destination</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatibus vitae ipsum esse, minus magni quam quis sit nostrum voluptates sapiente, praesentium saepe at cumque doloribus qui, nulla mollitia. Dolore.</p>
            <button>View More</button>
          </div>
          <img src="src\assets\img.png" alt="img" />
      </main>
      <footer>
          <p>Ruth</p>
      </footer>
    </>
  )
}

export default App
