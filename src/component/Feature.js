import React from 'react'
import styled from 'styled-components'

const Feature = () => {
    const data = [
        {
            icon: 'fa-sharp fa-solid fa-user-group',
            title: 'Invite your Friends',
            para: 'Share the link tutedude.com with your friends'

        },
        {
            icon: 'fa-sharp fa-solid fa-pen',
            title: 'Friend purchases any course',
            para: 'Using your REFERRAL CODE in the payments page'

        },
        {
            icon: 'fa-sharp fa-solid fa-indian-rupee-sign',
            title: 'You get ₹ 200 as referral money',
            para: 'On total purchase the friend makes, into your walletOn total purchase the friend makes, into your wallet'

        },
        {
            icon: 'fa-sharp fa-solid fa-percent',
            title: 'Your Friend gets ₹ 200 Off ',
            para: 'On his overall fee on successful purchase using your referral code'

        },
        {
            icon: 'fa-sharp fa-solid fa-wallet',
            title: 'Transfer money from wallet',
            para: 'When the wallet balance reaches ₹200 or more, you can withdraw it'

        },

    ]
    return (
        <Section>
            <p className='title-heading'>How does it work ?</p>
            <div className="features-box">
                {

                    data.map((elem,i) => {
                        return (<>
                            <div className="feature" key={i}>
                                <div className="icon">
                                <i className={elem.icon}></i>'
                                </div>
                                <div className="r-data">
                                    <p className='title'>{elem.title}</p>
                                    <p className='data'>{elem.para}</p>
                                </div>

                            </div>
                        </>)
                    })
                }
                
            </div>

        </Section>
    )
}

const Section = styled.section`
padding-top:2rem;

.title-heading{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */


color: #800080;
}


.features-box{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    column-gap: 1rem;

    .feature{
        /* min-width: 25rem; */
        max-width: 25rem;
        height: 65px;
        margin:auto;
        margin-bottom: 2rem;
        /* border: 1px solid black; */
        display: flex;
        gap: 10px;
        .icon{
            width: 80px;
            height: 65px;   
            background: rgba(217, 217, 217, 0.25);
            color: linear-gradient(270deg, #800080 0%, #FF864C 100%);
            border-radius: 50%;
            display: flex;
            
            align-items: center;
            justify-content: center;
            i{
                color: #eb347a;
                font-size: 1.2rem;
            }
            
        }
        .title{
            margin: 0;
            padding: 0;
            
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #000000;
        }
        .data{
            margin: 2px;
            font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #4D4D4D;
            
        }
    }
    
}

/* media query */

@media (max-width:750px)
{
    .features-box{
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
}
`

export default Feature