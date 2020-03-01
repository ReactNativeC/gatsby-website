import React from 'react'
import { Link } from 'gatsby';

const Menu =  () => (
  <div style={{
    background: '#f4f4f4',     
    paddingTop: 10        
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',                       
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Our Services</Link></li>
      <li><Link to="/about">About us</Link></li>      
    </ul>
  </div>
  )

export default Menu;