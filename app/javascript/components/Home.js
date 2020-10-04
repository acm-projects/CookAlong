import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
    return (<section className="hero is-dark is-fullheight hero-parent">
      <div className="bg"></div>
      <div className="hero-body">
        <div className="container columns has-text-centered is-multiline is-fluid">
          <div className="column is-full">
            <h1 className="title-home">CookAlong</h1>
            <input className="input is-rounded" type="text" placeholder="Search for a recipe"></input>
          </div>
          <div className="column is-full">
            <Link to="/search"><button className="button is-light is-normal home-button">Search</button></Link>
            <button className="button is-light is-normal home-button">Random Recipe</button>
          </div>
        </div>
      </div>
    </section>);
  }