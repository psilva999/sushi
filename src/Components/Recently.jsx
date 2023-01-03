import React from 'react'

import Eight from '../assets/imgs/8.png'

const Recently = () => {
  return (

    <section className='recently' id='recently'> 
      <article> <span>Recently Added</span>

        <h1>Sushi Samurai Salmón Cheese</h1>
        <p>
          Take a look at what's new. And do not deprive yourself of a good meal, enjoy and be happy.
        </p>

        <button className='order'>Order Now</button>
      </article>

      <img src={ Eight } alt="samurai-sushi" className='enjoy-sushi'/>
    </section>

  )
}

export default Recently
