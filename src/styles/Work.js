import styled from "styled-components"

export const OuterDiv = styled.div`
display: flex;
flex-direction: column;
padding-top: 3rem;
height: 100%;
width: 100%;
`

export const InnerDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
@media (max-width: 800px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1500px) {
  justify-content: space-evenly;
}

`

export const VideoDiv = styled.div`
margin: 1rem;
`

