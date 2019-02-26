import * as React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './home'
import {A, B} from './page'


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/a">a</Link></li>
            <li><Link to="/b">b</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/a" component={A}/>
          <Route path="/b" component={B}/>
        </div>
      </Router>
    )
  }
}

export default App
