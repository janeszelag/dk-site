import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom"
import Reel from './Reel'
import Work from './Work'
import Contact from './Contact'
import Name from './Name'



export const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`


export default function NavBar() {
  return (
    <OuterDiv>
      <StyledLink to="/reel">
        <Name />
      </StyledLink>
      <NavDiv>
      <StyledLink to="/reel">
        <Reel />
      </StyledLink>
      <StyledLink to="/work">
        <Work />
      </StyledLink>
      <StyledLink to="/contact">
        <Contact />
      </StyledLink>
    </NavDiv>
    </OuterDiv>

  )
}


