import { useMediaQuery } from 'react-responsive'
import { OuterDiv, InnerDiv, VideoDiv } from '../../styles/Work'


const Iframe = ({ url, isMobile }) => {
  return (
    <VideoDiv>
      < iframe
        title="example"
        src={url}
        width={isMobile ? "400" : "600"}
        height={isMobile ? "225" : "338"}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen />
    </VideoDiv>
  )
}

const Row = ({ url1, url2, isMobile }) => {
  return (
    <InnerDiv>
    <Iframe isMobile={isMobile} url={url1} />
    <Iframe isMobile={isMobile} url={url2} />
  </InnerDiv>
  )
}

const urls = [
  "https://player.vimeo.com/video/515009941?byline=0&portrait=0",
  "https://player.vimeo.com/video/514991990?byline=0&portrait=0",
  "https://player.vimeo.com/video/515002315?byline=0&portrait=0",
  "https://player.vimeo.com/video/515351799?byline=0&portrait=0",
  "https://player.vimeo.com/video/514991927?byline=0&portrait=0",
  "https://player.vimeo.com/video/515002250?byline=0&portrait=0",
  "https://player.vimeo.com/video/515000012?byline=0&portrait=0",
  "https://player.vimeo.com/video/514991786?byline=0&portrait=0",
  "https://player.vimeo.com/video/514991892?byline=0&portrait=0",
  "https://player.vimeo.com/video/515000229?byline=0&portrait=0",
  "https://player.vimeo.com/video/515000848?byline=0&portrait=0",
  "https://player.vimeo.com/video/514991677?byline=0&portrait=0",
]



const Work = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
  return (
    <OuterDiv>
      <Row
        url1={urls[0]}
        url2={urls[1]}
        isMobile={isMobile}
      />
      <Row
        url1={urls[7]}
        url2={urls[3]}
        isMobile={isMobile}
      />
        <Row
        url1={urls[10]}
        url2={urls[5]}
        isMobile={isMobile}
      />
      <Row
        url1={urls[6]}
        url2={urls[2]}
        isMobile={isMobile}
      />
        <Row
        url1={urls[8]}
        url2={urls[9]}
        isMobile={isMobile}
      />
         <Row
        url1={urls[4]}
        url2={urls[11]}
        isMobile={isMobile}
      />
    </OuterDiv>
  )
}

export default Work


