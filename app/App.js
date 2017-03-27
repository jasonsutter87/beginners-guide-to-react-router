import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'


class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            // this would make the first route a decenet of the address route 
            // <IndexRoute component={TwitterFeed} />
            
            //this adds the path localhost:8100/#/address/twitter?
            <Route path='twitter' component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='facebook' component={FacebookFeed} />
          </Route>
          <Route path='about' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/test'>Test</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => <div>
  <br />
  <Link to='/address/twitter'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>&nbsp;
  <Link to='/address/facebook'>Facebook Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const About = (props) => <div>
  <br />
  <h1>About us page goes here.</h1>
  {props.children}
</div>

const NotFound = () => <h1>404.. This page is not found!</h1>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const FacebookFeed = () => <h3>Facebook Feed</h3>

export default App