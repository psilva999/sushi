import React from 'react'
import { Link } from 'react-scroll'

import Header from './Components/Header'
import Enjoy from './Components/Enjoy'

import Provide from './Components/Provide'
import Popular from './Components/Popular'
import Recently from './Components/Recently'

import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'

import { events } from './Events/events'

function App() {
  window.addEventListener("scroll", events)
  window.addEventListener("load", events)

  return (
    <>
      <Header/>

      <main>
        <Enjoy/>

        <Provide/>
        <Popular/>

        <Recently/>
        <Subscribe/>
      </main>

      <Link activeClass="active"
          to='enjoy'
          spy={ true }
          smooth={ true }
          offset={ -90 }
          duration={ 500 }
          className='link-scroll'>
        <button className='to-top'>
        </button></Link>

      <Footer/>
    </>
  )
}

export default App
