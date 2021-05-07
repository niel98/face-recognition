import React from 'react'
import './Logo.css'
import brain from './brain.png'
import Tilt from 'react-parallax-tilt'

const Logo = () => {
    return (
        <div>
            <Tilt>
      <div style={{ height: '100px', width: '100px' }}>
        <img src={brain} alt='logo' />
      </div>
    </Tilt>
        </div>
    )
}

export default Logo