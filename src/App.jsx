import React from "react"
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
    <div>
      {/* app wrapped in router */}
      <Router>
        {/* navbar shown on all pages */}
        <Navbar />
        {/* routes wrapped in switch */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route exact path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
