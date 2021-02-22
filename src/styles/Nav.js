import styled from "styled-components"
import { Link } from "react-router-dom"

export const Href = styled.a`
  width: 36px;
  height: 36px;
  padding-left: 1.75rem;
  @media (max-width: 1000px) {
    padding-left: 0;
    padding-right: 1rem;
    }
`

export const Heading = styled.p(({ open }) => ({
  'font-family': "TheMoonlight",
  'color': open ? '#ff9900' : "#ffffff",
  'font-size': "3rem",
  'margin': 0,
  'padding-left': '1.75rem',
  '&:hover': {
    'color': '#ff9900'
  },
  '@media (max-width: 768px)': {
    'font-size': '2rem',
    'padding': '1rem',
  },
  '@media (max-width: 400px)': {
    'font-size': '2rem',
    'padding': '1rem',
  }
}))

export const Icon = styled.svg(({
  width: '36px',
  height: '36px',
  fill: '#ffffff',
  '&:hover': {
    'fill': '#ff9900'
  },
  '@media (max-width: 768px)': {
    width: '28px',
    height: '28px',
  },
}))

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`