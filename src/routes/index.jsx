import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyLoadable from '../components/loadable'

const App = MyLoadable({ loader: () => import( /* webpackChunkName: "App" */ '../App.js') })

class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        )
    }
}
export default RouterIndex