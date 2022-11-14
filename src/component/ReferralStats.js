import React from 'react'
import styled from 'styled-components'

const ReferralStats = () => {
    return (

        <Section className='stats-container'>
            <div className="lbox">
                <div className="box">
                    <p className='title'>Referral Earning</p>
                    <span className='data'>₹ 2,500</span>

                </div>
                <div className="box">
                    <p className='title'>Total Referrals</p>
                    <span className='data'>₹ 7</span>

                </div>
                <div className="box">
                    <p className='title'>Wallet Balance</p>
                    <span className='data'>₹ 500</span>

                </div>
                <div className="box-btn">
                    <Button>Withdraw Balance</Button>

                </div>

            </div>
            <div className="rbox">
                <p className='ref-title'>
                    Your Referral Code
                </p>
                <span className='code'>
                    EDCH54
                </span>
            </div>
        </Section>

    )
}

const Section = styled.section`
padding-top:2rem;
display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(2,1fr);

.lbox{
    max-width: 486px;
height: 188px;
left: 187px;
top: 179px;
padding: 1rem;
background: #FFFFFF;
box-shadow: 0px 3px 100px rgba(0, 0, 0, 0.1);
border-radius: 20px;
display: flex;
gap: 1rem;
justify-content: space-between;
/* align-items: center; */
flex-wrap: wrap;

.box{
    min-width: 115px;
    height: 80px;
    /* border: 1px solid black; */

    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */
        color: #800080;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

    }
    .data{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */


        color: #000000;


        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;

    }
}

.box-btn{
    margin: auto;
}

}

.ref-title{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */


color: #800080;
}

.code{
    border: 1px solid grey;
    padding: .5rem 2rem;
    border-radius: 10px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

letter-spacing: 1.5em;

color: #800080;
}


.rbox{
    /* max-width: fit-content; */
    margin-left: auto;
}
/* media query */
@media (max-width:750px) {
  

      grid-template-columns:1fr;
      .lbox{
        margin: auto;
      }
      .rbox{
        margin:auto
      }


  
}

`

const Button = styled.button`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 20px;
gap: 10px;
background: #800080;
border-radius: 20px;
color: #FFFFFF;
border: none;
cursor: pointer;


/* media Query
 */



`
export default ReferralStats