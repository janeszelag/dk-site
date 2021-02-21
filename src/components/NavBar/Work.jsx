import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heading from '../Shared/Heading'


const Work = () => {

  const [isOpen, setIsOpen] = useState(false)
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/work') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }

  }, [location.pathname])

  return (
    <Heading open={isOpen}>
      Work
    </Heading>
  )

}

export default Work