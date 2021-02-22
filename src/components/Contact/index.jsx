import { useMediaQuery } from 'react-responsive'
import { OuterDiv, HeadShot, BioDiv, Paragraph, Info, InfoDiv, IconsDiv } from '../../styles/Contact'
import Vimeo from '../NavBar/Vimeo'
import LinkedIn from "../NavBar/LinkedIn"

const Contact = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
  return (
    <OuterDiv>

      <HeadShot
        src={`${process.env.PUBLIC_URL}/head-shot.png`}
        alt="logo" />
      {isMobile && (
        <IconsDiv>
          <Vimeo />
          <LinkedIn />
        </IconsDiv>
      )}
      <BioDiv>
        <Paragraph>Toronto-based video editor and motion artist with over 5 years of agency experience, my work has been displayed on Television, Web and various Social Media platforms.
        Extensive background in the commercial world having collaborated with some of the top clients in the country including McDonald’s, Google, Pizza Pizza, Koodo, SickKids and more.
        <br />
        <br />
        My surreal and off-beat film projects film projects have been featured in many reputable film festivals including the Boston Underground Film Festival,
        the Calgary Underground Film Festival and the LA Film Forum. I am graduate of the Sheridan Media Arts/ Film & Television program.
        </Paragraph>
        <InfoDiv>
          <Info>dkneault@gmail.com</Info>
          <Info>(289)-242-7878</Info>
        </InfoDiv>

      </BioDiv>


    </OuterDiv>

  )
}

export default Contact