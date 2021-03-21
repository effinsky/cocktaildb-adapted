import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
import logo from "../logo.svg"

const Navbar = () => {
  const { fetchDrinks, setSearchTerm } = useGlobalContext()

  const handleLogoClick = () => {
    setSearchTerm("")
    const retrievedCocktails = fetchDrinks()
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src={logo}
            alt="cocktaildb logo"
            className="main-logo"
            onClick={handleLogoClick}
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
