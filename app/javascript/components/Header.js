import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bulma-components";
import '../../assets/stylesheets/header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-header" role="navigation" aria-label="main navigation">
                <div class="navbar-brand logo">
                    <Link to="/"><a className="navbar-item is-size-3-desktop is-size-3-tablet is-size-4-mobile">CookAlong</a></Link>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start"></div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field has-addons">
                                <div class="control has-icons-left">
                                    <input class="input input-search" type="text" placeholder="Search for recipes..."/>
                                    <span class="icon is-left">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                                <div class="control">
                                    <Link to="/search"><Button class="button search-button" type="submit" color="light">Search</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

