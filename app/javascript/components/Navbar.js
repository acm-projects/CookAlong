import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "./Home"
import Search from "./Search"
import "../../assets/stylesheets/navbar.css"

function Navbar() {
    return (
       <div>
           <nav className="navbar-top navbar">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-logo">CookAlong</Link>
                </div>
                <div className="navbar-menu">
                    <div className="search-bar navbar-end">
                            <form>
                                <input type="text" name="search" placeholder="Search for recipes..."
                                className="search-input input" style={{width: "30vw"}}/>
                            </form>
                    </div>
                </div>
           </nav>
       </div>
    )
}

export default Navbar