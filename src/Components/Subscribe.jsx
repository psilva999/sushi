import React from 'react'

import Nine from '../assets/imgs/9.png'
import Send from '../assets/svg/8-send.svg'
import BranchSubscribe from '../assets/svg/9-branch-subscribe.svg'

const Subscribe = () => {
  return (

    <section className='subscribe' id ='subscribe'>
      <img src={ Nine } className='offer'/>

      <article> <span>Newsletter</span>
        <h1>Subscribe for Offer Updates</h1>

        <div>
          <input type="email" id='email' placeholder='Best E-mail'/>

          <button disabled>
            <img src={ Send } alt='send'/>
          </button>
        </div>

      </article>

      <img src={ BranchSubscribe } className='branch sub'/>
    </section>

  )
}

export default Subscribe
