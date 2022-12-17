import React from 'react'

import Logo from '../assets/imgs/0-logo.png'
import Face from '../assets/svg/11-face.svg'

import Insta from '../assets/svg/12-insta.svg'
import Tw from '../assets/svg/13-tw.svg'

import Visa from '../assets/imgs/10-visa.png'
import Master from '../assets/imgs/11-master.png'
import Pay from '../assets/imgs/12-pay.png'
import Discover from '../assets/imgs/13-discover.png'

const Footer = () => {
  return (

    <footer>
      <section>

        <article>
          <div>
            <img src={ Logo } alt="logo"/>
            <h2 className='logo-rodape'>Sushi</h2>
          </div>

          <p>
            Food fo the body is not enough. There must be food for the soul.
          </p>
        </article>

        <article className='links'> <h2>Main Menu</h2>
          <ul>
            <li>About</li>
            <li>Menus</li>
            <li>Offer</li>
            <li>Events</li>
          </ul>
        </article>

        <article className='links'> <h2>Information</h2>
          <ul>
            <li>Contact</li>
            <li>Order & Returns</li>
            <li>Videos</li>
            <li>Reservation</li>
          </ul>
        </article>

        <article> <h2>Adress</h2>
          <ul>
            <li>North Atlantic, 1942</li>
            <li>Bismarck 124</li>
          </ul>
        </article>

        <article> <h2>Social Media</h2>
          <div className='social'>
            <img src={ Face } alt="face"/>
            <img src={ Insta } alt="insta"/>
            <img src={ Tw } alt="twitter"/>
          </div>
        </article>
      </section>

      <article className='copy'>
        <p>&copy; Copyright Sushi, all rights reserved.</p>

        <div>
          <img src={ Visa } alt="visa"/>
          <img src={ Master } alt="mastercard"/>
          <img src={ Pay } alt="paypal"/>
          <img src={ Discover } alt="discover"/>
        </div>

      </article>
    </footer>
    
  )
}

export default Footer
