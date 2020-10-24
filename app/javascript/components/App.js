import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Search from './Search'
import StepsPage from './StepsPage'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                         <Home />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/steps">
                        <StepsPage />
                    </Route>
                </Switch>              
            </Router>
        )
    }
}

export default App