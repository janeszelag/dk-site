import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Heading } from '../../styles/Nav'


const Contact = () => {

  const [isOpen, setIsOpen] = useState(false)
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/contact') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }

  }, [location.pathname])

  return (
    <Heading open={isOpen}>
      Contact
    </Heading>
  )

}

export default Contact