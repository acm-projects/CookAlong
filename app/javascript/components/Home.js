import React from "react";
import { Link } from "react-router-dom"
import { Button } from "react-bulma-components"

export default function Home() {
    return (
      <section className="hero is-dark is-fullheight hero-parent">
        <div className="bg"></div>
        <div className="hero-body mx-0 my-0 px-0 py-0">
            <div className="container columns is-fluid is-centered is-multiline mx-0 my-0 px-0 py-0 ">
                <div className="column is-full has-text-justified mx-0 my-0 px-0 py-0">
                    <p className="title-home">CookAlong</p>
                </div>
                <div className="column is-full field has-addons has-addons-centered">
                <input class="input is-rounded" type="text" placeholder="Search for a recipe"></input>
                </div>
                <div className="column is-full field has-addons has-addons-centered">
                    <Link to="/search"><Button className="home-button" color="light">Search</Button></Link>
                    <button className="home-button button is-light is-normal">Random Recipe</button>
                </div>
            </div>
        </div>
    </section>
    );
  }