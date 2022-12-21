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
        <ul>
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
          offset={ 0 }
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
          offset={ -115 }
          duration={ 600 }
          className='link-scroll'>
            <li onClick={ handleMenuList }>recently</li>
          </Link>
        </ul>

        <img src={ Moon } alt='dark-mode' className='toggle-background'/>
      </nav>
    </header>
  )
}

export default Header
