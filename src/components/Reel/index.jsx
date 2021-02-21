import { useMediaQuery } from 'react-responsive'

const Reel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginTop: isMobile? '1rem' :'4rem' }}>
      <iframe src="https://player.vimeo.com/video/511744746"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: isMobile? '100%' : '80%' }}
        title='dk-reel'
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      />
    </div>
  )
}

export default Reel

