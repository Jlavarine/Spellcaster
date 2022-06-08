import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
const Error = () => {
  return (
    <div className='error-box'>
      <p className='error-message'>That's not a spellbook...it's a mimic!</p>
      <img className='error-img' src='https://static.wixstatic.com/media/c04a56_b7b5eb877f234333913489baa27c43fe~mv2.jpg/v1/fill/w_900,h_675,al_c,q_90/c04a56_b7b5eb877f234333913489baa27c43fe~mv2.jpg' alt='A book with an eye, teeth, and tongue looking ready to attack'/>
      <Link to='/' className='error-link'>Click <span>here</span> to return to the main page</Link>
    </div>
  )
}
export default Error
