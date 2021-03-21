import React, { useEffect, useState } from "react"
import Loading from "../components/Loading.jsx"
import { useParams } from "react-router-dom"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

// not using context here. setting up all functionality here
const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  // set up fetch so that when the info details are fetched every time
  // a cocktail component renders
  useEffect(() => {
    setLoading(true)
    // an iife for you to fetch a cocktail based on the id
    ;(async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions
          } = data.drinks[0]

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions
          }

          // also grab the ingredients as object keys
          const ingredients = []
          for (const key in data.drinks[0]) {
            console.log(key)
            if (key.includes("strIngredient")) {
              console.log(key)
              const value = data.drinks[0][key]
              if (value) ingredients.push(value)
            }
          }
          // add the retrieved non-nullish ingredients to the new drink obj
          newCocktail["ingredients"] = ingredients

          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (err) {
        console.error("error while fetching drink details", err)
        setLoading(false)
      }
    })()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients
  } = cocktail

  return (
    <div className="page-container">
      <section className="section cocktail-section">
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">category : </span>
              {category}
            </p>
            <p>
              <span className="drink-data">info : </span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass : </span>
              {glass}
            </p>
            <p>
              <span className="drink-data instructions">instructions : </span>
              {instructions}
            </p>
            <p>
              {/* render ingredients only if found */}
              <span className="drink-data">ingredients: </span>{" "}
              {ingredients.map((ingredient, idx) => (
                <span key={idx} style={{ fontWeight: "bold" }}>
                  {/* figure out the comma for all but after the last element */}
                  {ingredient}
                  {idx < ingredients.length - 1 ? ", " : " "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleCocktail
