import React from "react"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"

const Cocktail = ({ id, name, image, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <Link to={`/cocktail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        {/* code duplication now with two links to same route? */}
        <Link to={`/cocktail/${id}`} className="btn btn-more">
          more <FaChevronRight />
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
