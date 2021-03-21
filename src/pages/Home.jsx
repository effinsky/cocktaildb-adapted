import React from "react"
import CocktailList from "../components/CocktailList.jsx"
import SearchForm from "../components/SearchForm.jsx"

const Home = () => {
  return (
    <main className="home-container">
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
