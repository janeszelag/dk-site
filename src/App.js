import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom"
import styled from "styled-components"
import NavBar from "./components/NavBar"

const Work = () => {
  return (
    <div>
      <p>work here</p>
    </div>
  )
}

const Reel = () => {
  return (
    <div>
      <p>this is where the reel will go</p>
    </div>
  )
}
const Contact = () => {
  return (
    <div>
      <p>this is where contact and bio will go</p>
    </div>
  )
}

const MainDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height: 100%;
width: 100%;
`
const InnerDiv = styled.div`
display: flex;
flex-direction: column;
padding-top: 3rem;
height: 100%;
width: 80%;
`


function App() {
  return (
    <Router>
      <MainDiv >
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
