import React from 'react'
import './landing-page.styles.scss'
const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="introduction">
        <h2>
          Intelligent contacts
        </h2>
        <img className="introduction-picture" src={require("./undraw_personal_email_t7nw.svg")} alt="A picture of a woman with a mobile phone full of contacts"/>
      </section>
    </div>
  )
}

export default LandingPage
