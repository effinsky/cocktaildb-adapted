import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SingleCocktail from "./pages/SingleCocktail.jsx"
import Error from "./pages/Error.jsx"
// import components
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cocktail/:id" component={SingleCocktail} />
          <Route exact path="/*" component={Error} />
        </Switch>
      </Router>
    </>
  )
}

export default App
