import React from 'react'
import { connect } from 'react-redux'

import { withProps } from 'recompose'
// import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'
import {
  Route,
  Switch
} from 'react-router-dom'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// <CSSTransitionGroup
//   transitionName="fade"
//   transitionEnterTimeout={600}
//   transitionLeaveTimeout={600} >
// </CSSTransitionGroup>

import NotFound from 'components/404.jsx'
import routes from '../../routes'
import Header from '../header'
// import * as actions from '../actions'

// import './app.css'
const App = () => {
  return (
    <div>
      <Header />
      <div className="container g-container">
        <Switch>
          {
            routes.map((route, i) => (
              <Route exact key={i} path={route.path} render={(routeProps) => {
                const mapStateToProps = route.mapStateToProps ? route.mapStateToProps(routeProps) : null
                const mapDispatchToProps = route.mapDispatchToProps ? route.mapDispatchToProps(routeProps) : null
                const Connector = connect(mapStateToProps, mapDispatchToProps)(route.component)
                return <Connector />
              }} />
            ))
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

export default App
// export default connect(state => ({ authToken: state.authToken }))(App)