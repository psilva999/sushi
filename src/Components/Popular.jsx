import React from 'react'

import Five from '../assets/imgs/5.png'
import Six from '../assets/imgs/6.png'
import Seven from '../assets/imgs/7.png'

const Popular = () => {
  return (

    <section className='popular' id='popular'>
      <div> <span>The Best Food</span>
        <h1>Popular Dishes</h1>
      </div>

      <article>
        <div> <img src={ Five }/>

          <h2>Origini</h2>
          <p>Japanese Dish</p>

          <li>$10.99</li>
        </div>

        <div> <img src={ Six }/>

          <h2>Spring Rolls</h2>
          <p>Japanese Dish</p>
          
          <li>$15.99</li>
        </div>

        <div> <img src={ Seven }/>

          <h2>Sushi Rolls</h2>
          <p>Japanese Dish</p>
          
          <li>$19.99</li>
        </div>

      </article>
    </section>

  )
}

export default Popular
