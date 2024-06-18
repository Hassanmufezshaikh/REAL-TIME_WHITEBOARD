import React from 'react'
import './possibility.css'
import  possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Dive into a world where creativity knows no bounds with our real-time whiteboard experience. <br /> Whether you're a student sketching out ideas for your next project or a professional collaborating with colleagues across the globe, our platform brings your ideas to life instantly. Explore the future of virtual reality, where the only limit is your imagination. Join us and embrace the power of immersive technology in revolutionizing the way we work, learn, and create together..</p>
        <h4 className='gradient__text'>Request Early Access to Get Started</h4>

      </div>
    </div>
  )
}

export default Possibility
