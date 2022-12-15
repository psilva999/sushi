import React from 'react'

import Logo from '../assets/imgs/0-logo.png'
import Moon from '../assets/svg/2-moon.svg'

const Header = () => {
  return (
    <header>
      <div>
        <img src={ Logo } alt="logo"/>
        <h1 className='logo'>Sushi</h1>
      </div>

      <nav>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>popular</li>
          <li>recently</li>
        </ul>

        <img src={ Moon } alt='dark-mode' className='toggle-background'/>
      </nav>
    </header>
  )
}

export default Header

  // &::-webkit-scrollbar {
  //   width:.43rem;
  // }

  // &::-webkit-scrollbar-track {
  //   background:$normal-black;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background:$main-white;
  //   background:$main-white;
  //   border:.375rem solid $main-white;
  // }
