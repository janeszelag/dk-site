import styled from "styled-components"

const Heading = styled.p(({ open }) => ({
  'font-family': "TheMoonlight",
  'color': open ? '#ff9900' : "#ffffff",
  'font-size': "3.5rem",
  'margin': 0,
  'padding-left': '1.75rem',
  '&:hover': {
    'color': '#ff9900'
  },
  '@media (max-width: 768px)': {
    'font-size': '2.5rem',
    'padding': '1rem',
  }
}))

export default Heading