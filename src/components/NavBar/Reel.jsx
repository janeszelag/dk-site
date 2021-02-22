import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Heading } from '../../styles/Nav'



const Reel = () => {

  const [isOpen, setIsOpen] = useState(false)
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/reel') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }

  }, [location.pathname])

  return (
    <Heading open={isOpen}>
      Demo Reel
    </Heading>
  )

}

export default Reel