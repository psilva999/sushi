import React from 'react'

import Three from '../assets/imgs/3.png'
import Four from '../assets/imgs/4.png'

const Provide = () => {
  return (

    <section className='provide reveal' id='provide'>
      <img src={ Three } alt="provide-image" className='enjoy-sushi'/>

      <article> <span>About Us</span>

        <div>
          <h1>We Provide</h1>
          <img src={ Four } alt="detail"/>
        </div>

        <h1>Healthy Food</h1>
        <p>
          Food comes to us from our relatives whether, they have wings or roots. This is how we consider food, it also has a culture. It has a history that passes from generation to generation.
        </p>

      </article>
    </section>

  )
}

export default Provide
