import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  // search term initial state to a to have sth to display when the app loads
  const [searchTerm, setSearchTerm] = useState("a")
  const [cocktails, setCocktails] = useState([])

  // wrap fetch fn in a callback to call if only if the search term changes
  const fetchDrinks = useCallback(async () => {
    // every time we start fetching, we want to display loading,
    // with every change we make to the input value field
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data

      if (drinks) {
        const newCocktails = drinks.map(d => {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass
          } = d
          return { id, name, image, info, glass }
        })
        setCocktails(newCocktails)
      }
      // but maybe the search term is such that fetch returns null for a result, even though
      // the fetch has executed--we deal with this in the TRY block, NOT the CATCH, by setting
      // the cocktails state to an empty array and displaying a msg to the user
      else {
        setCocktails([])
      }
      // once we get sth back or if there's an error, we set loading back to false
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [searchTerm])
  // we can only add fetchDrinks to the dependency array here
  // because we wrapped that fn in a useCallback (look up)
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm, fetchDrinks }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { useGlobalContext, AppContext, AppProvider }
