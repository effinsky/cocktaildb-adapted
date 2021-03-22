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
          click all the buttons you find until you find a drink you like.
        </p>
        <p>
          This was prepared mainly for fun and for job interviews. Both will
          have me evolve this mini project into where we get stuff other than
          cocktail info, maybe music artist info instead, from my own backend.
          This text will then come from that backend as well. We will have forms
          to submit artist info and have that sent over to the back end thru
          REST and persisted in... probably MongoDB.
        </p>
        <article className="about-btn-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/adiforka/cocktaildb-adapted"
            className="btn-primary">
            source code
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://thecocktaildb.com"
            className="btn-primary">
            the real cocktailDB
          </a>
        </article>
      </section>
    </div>
  )
}

export default About
