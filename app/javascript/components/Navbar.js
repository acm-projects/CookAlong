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
           <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">CookAlong</Link>
                    <div className="search-bar">
                        <form>
                            <input type="text" name="search" placeholder="Search for recipes..."
                            className="search-input input"/>
                        </form>
                    </div>
                </div>
           </nav>
       </div>
    )
}

export default Navbar