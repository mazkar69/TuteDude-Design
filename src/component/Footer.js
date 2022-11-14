import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Footer = () => {
  return (
    <Section>
        <Link to="/friends-referred" className='footer-link'>Friends Who Enrolled</Link>
        <Link to="/" className='footer-link'>Terms & Conditions</Link>
    </Section>
  )
}

const Section = styled.section`

padding-top: 3rem;
display: flex;
flex-direction: column;
gap: .5rem;

`
export default Footer