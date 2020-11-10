import React from 'react';
import "../../assets/stylesheets/header.scss"
import {Link, Route, Router} from 'react-router-dom'
import { Button } from "react-bulma-components"

export class Header extends React.Component {
    constructor(props) {
        super(props);   
        
        this.state = {toSerach: ''}
         
        this.formSubmitted = false;

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    searchSubmit() {
        return <nav><link to="/"></link></nav>
    }

    handleSearchChange = (event) => {
        this.setState({toSerach: event.target.value})
    }

    render() {
        return (
            <nav className="navbar navbar-header" role="navigation" aria-label="main navigation">
                <div className="navbar-brand logo">
                    <Link to="/"><a className="navbar-item is-size-3-desktop is-size-3-tablet is-size-4-mobile">CookAlong</a></Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <div className="navbar-item"> 
                            <form className="searchForm" onSubmit={location.reload}>
                                <div className="field has-addons">
                                    <div className="control is-expanded has-icons-left">
                                        <input className="input input-search" type="text" placeholder="Search for recipes..." onChange={this.handleSearchChange} value={this.state.toSerach}></input>
                                        <span className="icon is-left">
                                            <i className="fas fa-search"></i>
                                        </span>   
                                    </div>
                                    <div className="control">
                                            <Link to={"/search/" + this.state.toSerach}><Button className="button home-button" color="light">Search</Button></Link>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
