import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Breadcrum = () => {
  return (
    <H3> <Link>UI/UX</Link> / <Link to="/">Refer & Earn</Link> / <Link to="/friends-referred">Friends Referred</Link> </H3>
  )
}

const H3 = styled.h3`
font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;


`

export default Breadcrum