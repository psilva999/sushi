import React from 'react'
import { Link } from 'react-scroll'

import Logo from '../assets/imgs/0-logo.png'
import Moon from '../assets/svg/2-moon.svg'

import { handleMenu, handleMenuList } from '../Events/handleMenu'
import { darkWhiteMode } from '../Events/handleDarkWhiteMode'

const Header = () => {
  let provide,
      recently

  window.addEventListener('load', handleScroll)
  window.addEventListener('resize', handleScroll)

  function handleScroll() {
    window.matchMedia("(max-width:800px)").matches? provide = -120 : null

    window.matchMedia("(max-width:1320px)").matches && window.matchMedia("(min-width:801px)").matches? provide = 20 : null

    window.matchMedia("(min-width:1321px)").matches? provide = 0 : null
  }

  return (
    <header>
      <div>
        <img src={ Logo } alt="logo"/>
        <h1 className='logo'>Sushi</h1>
      </div>

      <nav>
        <ul id='menu'>
          <Link activeClass="active"
          to='enjoy'
          spy={ true }
          smooth={ true }
          offset={ -90 }
          duration={ 600 }
          className='link-scroll'>
            <li className='active' onClick={ handleMenuList }>home</li> 
          </Link>

          <Link activeClass="active"
          to='provide'
          spy={ true }
          smooth={ true }
          offset={ provide }
          duration={ 600 }
          className='link-scroll'>
            <li onClick={ handleMenuList }>about us</li>
          </Link>

          <Link activeClass="active"
          to='popular'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
            <li onClick={ handleMenuList }>popular</li>
          </Link>

          <Link activeClass="active"
          to='recently'
          spy={ true }
          smooth={ true }
          offset={ window.matchMedia("(min-width:1321px)").matches? -120 : 0 }
          duration={ 600 }
          className='link-scroll'>
            <li onClick={ handleMenuList }>recently</li>
          </Link>
        </ul>

        <img src={ Moon } alt='dark-mode' className='toggle-background' onClick={ darkWhiteMode }/>

        <button onClick={ handleMenu } id='toggle-menu'></button>

      </nav>
    </header>

  )
}

export default Header
