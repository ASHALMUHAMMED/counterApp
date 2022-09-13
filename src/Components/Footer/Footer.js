import React from 'react'
import './Footer.css'
import Button from 'react-bootstrap/Button';


function Footer() {
  return (
    <div className='footer-sec'>
      <Button className='button' variant="danger">- Substarct</Button>
      <Button className='button' variant="light">! Reset</Button>
      <Button className='button' variant="success">+ Add</Button>
    </div>
  )
}

export default Footer
