import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="page-container">
      <section className="error-page section">
        <div className="error-container">
          <h1 className="error-heading">page does not exist</h1>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Error
