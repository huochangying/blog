import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MyLoadable from '../utils/loadable'

const Home = MyLoadable({ loader: () => import( /* webpackChunkName: "home" */ '../pages/home') })
const FontEnd = MyLoadable({ loader: () => import( /* webpackChunkName: "fontEnd" */ '../pages/fontEnd') })
const TittleTattle = MyLoadable({ loader: () => import( /* webpackChunkName: "tittleTattle" */ '../pages/tittleTattle') })

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/fontEnd" component={FontEnd} />
                <Route path="/tittleTattle" component={TittleTattle} />
            </Switch>
        )
    }
}
export default RouterIndex