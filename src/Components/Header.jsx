import React from 'react'
import { Link } from 'react-scroll'

import Logo from '../assets/imgs/0-logo.png'
import Moon from '../assets/svg/2-moon.svg'

import { handleMenuList } from '../Events/handleMenu'

const Header = () => {
  return (
    <header>
      <div>
        <img src={ Logo } alt="logo"/>
        <h1 className='logo'>Sushi</h1>
      </div>

      <nav>
        <ul onClick={ handleMenuList }>
          <Link activeClass="active"
          to='enjoy'
          spy={ true }
          smooth={ true }
          offset={ -90 }
          duration={ 600 }
          className='link-scroll'>
            <li>home</li> 
          </Link>

          <Link activeClass="active"
          to='provide'
          spy={ true }
          smooth={ true }
          offset={ 25 }
          duration={ 600 }
          className='link-scroll'>
            <li>about us</li>
          </Link>

          <Link activeClass="active"
          to='popular'
          spy={ true }
          smooth={ true }
          offset={ -50 }
          duration={ 600 }
          className='link-scroll'>
            <li>popular</li>
          </Link>

          <Link activeClass="active"
          to='recently'
          spy={ true }
          smooth={ true }
          offset={ -80 }
          duration={ 600 }
          className='link-scroll'>
            <li>recently</li>
          </Link>
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
