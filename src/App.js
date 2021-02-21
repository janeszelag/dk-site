import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import NavBar from "./components/NavBar"
import { MainDiv, InnerDiv } from "./styles/App"
import Work from './components/Work'
import Reel from './components/Reel'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <MainDiv>
        <InnerDiv>
          <NavBar />
          <Switch>
            <Route path='/reel'>
              <Reel />
            </Route>
            <Route path='/work'>
              <Work />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Redirect to='/reel' />
            </Route>
          </Switch>
        </InnerDiv>
      </MainDiv>
    </Router>
  )
}

export default App
