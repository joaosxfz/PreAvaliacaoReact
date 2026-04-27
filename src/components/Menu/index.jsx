import { Link } from 'react-router-dom'
import './style.css'

function Menu() {
  return (
    <header>
      <h1>Exercícios React</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/exercicios">Exercícios</Link>
      </nav>
    </header>
  )
}

export default Menu