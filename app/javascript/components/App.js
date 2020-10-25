import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Search from './Search'
import StepsPage from './StepsPage'
import RecipePage from './RecipePage'

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
                    <Route exact path="/" exact component={Home}>
                    </Route>
                    <Route exact path="/search/:recipe" name="Search" exact component={Search}>
                    </Route>
                    <Route exact path="/recipe/:id" exact component={RecipePage}>
                    </Route>
                    <Route path="/steps/:id" exact component={StepsPage}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App