import * as React from 'react'
import {Suspense} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './home'

const A = React.lazy(() => import('./a'));
const B = React.lazy(() => import('./b'));

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/a">a</Link></li>
        <li><Link to="/b">b</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/a" render={() => <A />}/>
          <Route path="/b" render={() => <B />}/>
        </Switch>
      </Suspense>
    </div>
  </Router>
)
