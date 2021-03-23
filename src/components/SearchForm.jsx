import React, { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm, cocktails } = useGlobalContext()
  const searchInput = useRef("")
  
  // makes it so that when the app renders, the focus is set to the input
  useEffect(() => {
    searchInput.current.focus()
  })

  const searchCocktail = () => void setSearchTerm(searchInput.current.value)

  const handleSubmit = e => e.preventDefault()

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* rendering the label conditionally, depending on whethere there are
          cocktails in the globalContext to render */}
          {cocktails.length > 0 ? (
            <label htmlFor="name">cocktails</label>
          ) : (
            <br />
          )}
          <input
            type="text"
            id="name"
            // grabbing search input with ref so we can make the page automatically
            // focus on input element on load
            ref={searchInput}
            placeholder="get your drink on now..."
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
