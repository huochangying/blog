import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MyLoadable from '../utils/loadable'

const Home = MyLoadable({ loader: () => import( /* webpackChunkName: "App" */ '../pages/home/home') })
const List = MyLoadable({ loader: () => import( /* webpackChunkName: "App" */ '../pages/list/list') })

class RouterIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <List />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={List} />
                </Switch>
            </React.Fragment>
        )
    }
}
export default RouterIndex