import React from "react"

const About = () => {
  return (
    <div className="page-container">
      <section className="section about-section">
        <h1 className="section-title">about this fiasco</h1>
        <p>
          Prepared under the pressure of time as part of a ReactJS tutorial from
          a John Smilga. Thank you, John. Oddly enough, the CocktailDB is a real
          API you can use to get some potentially true info on drinks so you can
          get your drink on sooner so if that sounds interesting make sure you
          click that subscribe button and the notification bell so you don't
          miss any of my future videos ok one more youtube video and I'll freak
          for real.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://thecocktaildb.com"
          className="btn-primary">
          the real cocktailDB
        </a>
      </section>
    </div>
  )
}

export default About
