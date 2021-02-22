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
flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 900px) {
  justify-content: center;
}
`

export const VideoDiv = styled.div`
margin: 1rem;
`
