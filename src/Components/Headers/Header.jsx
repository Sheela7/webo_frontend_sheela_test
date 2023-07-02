import React from 'react'
import './Header.css'
import Container from '../../Common/Container'
import Navigation from './Navigation'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='header'>
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header