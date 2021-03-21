import React from "react"
import Cocktail from "./Cocktail.jsx"
import Loading from "./Loading.jsx"
import { useGlobalContext } from "../context"

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">no such cocktail</h2>
  }

  return (
    <section className="section">
      <div className="section-cocktail-container">
        {cocktails.map(c => {
          return <Cocktail key={c.id} {...c} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
