import styled from "styled-components"

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 6em;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
  }
`

export const HeadShot = styled.img`
width: 700px;
height: 455px;
@media (max-width: 1000px) {
  width: 440px;
  height: 300px;
  margin-top: 1rem;
}
@media (max-width: 800px) {
  width: 300px;
  height: 200px;
  margin-top: 1rem;
}
`
export const BioDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 2rem;
@media (max-width: 1000px) {
padding: 0;
}
`
export const IconsDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding-top: 1rem;
`

export const Paragraph = styled.p`
font-family: FranklinGothic;
color: #ffffff;
font-size: 1.5rem;
margin: 0;
@media (max-width: 800px) {
  font-size: 1.2rem;
}
`
export const InfoDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-right: 1rem;
`
export const Info = styled.p`
font-family: FranklinGothic;
color: #ff9900;
font-size: 1.5rem;
margin: 0;
@media (max-width: 800px) {
  font-size: 1.2rem;
}
`