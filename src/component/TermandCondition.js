import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const TermandCondition = () => {

  return (
    <Section>
    <Link to="/" className='footer-link'>Terms & Conditions</Link>
    </Section>
  )
}

const Section = styled.section`
padding-top: 2rem;
`

export default TermandCondition