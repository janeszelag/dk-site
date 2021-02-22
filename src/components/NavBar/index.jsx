import { useMediaQuery } from 'react-responsive'
import Reel from './Reel'
import Work from './Work'
import Contact from './Contact'
import Name from './Name'
import Vimeo from "./Vimeo";
import LinkedIn from "./LinkedIn";
import { OuterDiv, StyledLink, NavDiv } from '../../styles/Nav'


const NavBar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })

  return (
    <OuterDiv>
      <StyledLink to="/">
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
        {!isMobile && <Vimeo />}
        {!isMobile && <LinkedIn />}
      </NavDiv>
    </OuterDiv>

  )
}

export default NavBar

