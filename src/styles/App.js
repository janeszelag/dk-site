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
@media (max-width: 900px) {
  width: 90%;
}
`