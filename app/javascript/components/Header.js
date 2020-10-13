import React from 'react';
import "../../assets/stylesheets/header.scss"
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-header" role="navigation" aria-label="main navigation">
            <div className="navbar-brand logo">
                <Link to="/"><a className="navbar-item is-size-3-desktop is-size-3-tablet is-size-4-mobile">CookAlong</a></Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="control has-icons-left">
                        <input className="input input-search" type="text" placeholder="Search for recipes..."></input>
                        <span className="icon is-left">
                            <i className="fas fa-search"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;