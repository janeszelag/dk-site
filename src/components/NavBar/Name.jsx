import React from "react"
import styled from "styled-components"

const Heading = styled.p(({
  'font-family': "TheMoonlight",
  'color': '#ff9900',
  'font-size': "5rem",
  'margin': 0,
  '&:hover': {
    'color': '#ffffff'
  },
  '@media (max-width: 768px)': {
    'font-size': '4.5rem'
  },
  '@media (max-width: 400px)': {
    'font-size': '4rem'
  }
}))

const Reel = () => {

  return (
    <Heading >
      Dakota Areseneault
    </Heading>
  )
}

export default Reel


