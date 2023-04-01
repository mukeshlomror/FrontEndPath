import React from 'react'
import logo from '../assets/react-logo.png';
const Header = () => {
  return (
    <nav>
        <img src={logo} />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Header