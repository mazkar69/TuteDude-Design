import React from 'react'
import styled from 'styled-components'

const ReferalArea = () => {
    return (
        <>
            <Section>

                <div className="lbox">
                    <p className='ref-title'>
                        Your Referral Code
                    </p>
                    <span className='code'>
                        EDCH54
                    </span>
                </div>
                <div className="rbox">
                    <p className="ref-title">
                        Wallet Balance
                    </p>
                    <span>₹ 500</span>
                </div>
            </Section>

        </>
    )
}

const Section = styled.section`
padding-top: 1rem;
display: flex;
justify-content: space-between;

.ref-title{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #800080;
}

.code{
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
border: 1px solid grey;
padding: 5px;
border-radius: 8px;

letter-spacing: 0.75em;

color: #000000;
}

.rbox{
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(128, 0, 128, 0.15);
border-radius: 20px;
padding: .5rem 1rem;
span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
}
}


/* Media Query */
@media (max-width:400px)
{
    .rbox{

border-radius: 20px;
padding: .2rem .5rem;
span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
}
}



}

`

export default ReferalArea;