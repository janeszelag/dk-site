import styled from "styled-components"

export const MainDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height: 100%;
width: 100%;
`
export const InnerDiv = styled.div`
display: flex;
flex-direction: column;
padding-top: 3rem;
height: 100%;
width: 80%;
`
export const DemoReelDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding-top: 2em;
@media (max-width: 900px) {
  padding-top: 1em;
}
`