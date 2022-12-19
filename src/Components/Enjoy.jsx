import React from 'react'

import One from '../assets/imgs/1.png'
import Two from '../assets/imgs/2.png'
import BranchRight from '../assets/svg/4-branch-right.svg'

const Enjoy = () => {
  return (

    <section id='enjoy' className='enjoy'>
      <article> 
        <h1>Enjoy Delicious</h1>
        
        <div>
          <img src={ Two }/>
          <h1>Sushi Food</h1>
        </div>

        <p>
          Enjoy a good dinner with the best dishes in the restaurant and improve your day.
        </p>

        <button className='order'>Order Now</button>
      </article>

      <img src={ One } alt="enjoy-sushi" className='enjoy-sushi'/>
      <img src={ BranchRight } className='branch right'/>
    </section>
  )
}

export default Enjoy
