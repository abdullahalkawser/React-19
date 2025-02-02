import React, { useState } from 'react'
import Search from './componenst/search'



const App = () => {
  const [link,setLink]=useState('')
  return (
    <main>
      <div className='pattern'>
        <div className='warapper'>
      <header>
      <img src="./hero.png" alt="hero.png"/>
      <h1 className='text-gradient'>Find Your Best in Your Whole Lifelife in Your Whole Life</h1>
      </header>
      <Search link= {link} setLink={setLink}/>
      <h1>{link}</h1>

        </div>

      </div>

    </main>
  )
}

export default App
