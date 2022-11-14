import React from 'react'
import styled from 'styled-components'

const EnrollCard = () => {
    return (
        <Section>

            <p className='title'>Friends who enrolled(3)</p>

            <div className="card-container">

                <div className="card">
                    <div className="namedata">
                        <span className='name'>Dhiraj Saxena</span>
                        <span className='data'>14 Sep, 2022</span>
                    </div>
                    <p className='course-enrolled'>Course Enrolled(6)</p>
                    <div className="course">
                        <span>UI/UX</span>
                        <span>Photoshpp</span>
                        <span>Illustrator</span>
                        <span>Python</span>
                        <span>MERN</span>
                        <span>Java</span>
                    </div>
                    <div className='ref-amount'>
                        <span className='amount-title'>Referral Amount </span>
                        <span className='amount'>₹185</span>
                    </div>
                </div>
                <div className="card">
                    <div className="namedata">
                        <span className='name'>Dhiraj Saxena</span>
                        <span className='data'>14 Sep, 2022</span>
                    </div>
                    <p className='course-enrolled'>Course Enrolled(6)</p>
                    <div className="course">
                        <span>UI/UX</span>
                        <span>Photoshpp</span>
                        <span>Illustrator</span>
                        <span>Python</span>
                        <span>MERN</span>
                        <span>Java</span>
                    </div>
                    <div className='ref-amount'>
                        <span className='amount-title'>Referral Amount </span>
                        <span className='amount'>₹185</span>
                    </div>
                </div>
                <div className="card">
                    <div className="namedata">
                        <span className='name'>Dhiraj Saxena</span>
                        <span className='data'>14 Sep, 2022</span>
                    </div>
                    <p className='course-enrolled'>Course Enrolled(6)</p>
                    <div className="course">
                        <span>UI/UX</span>
                        <span>Photoshpp</span>
                        <span>Illustrator</span>
                        <span>Python</span>
                        <span>MERN</span>
                        <span>Java</span>
                    </div>
                    <div className='ref-amount'>
                        <span className='amount-title'>Referral Amount </span>
                        <span className='amount'>₹185</span>
                    </div>
                </div>

            </div>
            

        </Section>
    )
}

const Section = styled.section`
padding-top: 2rem;
.title{
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #800080;

}

.card-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;

    .card{
    max-width: 330px;
    height: 200px;
    padding: 1rem;
    color: white;


/* NEW GRADIENT 2 */

    background: linear-gradient(270deg, #800080 0%, #FF864C 100%);
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    .namedata{
        display: flex;
        justify-content: space-between;
        .name{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height */
            color: #FFFFFF;

        }
        .data{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */
            color: #FFFFFF;
        }
    }

    .course-enrolled{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */
        color: #FFFFFF;
    }

    .course{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        span{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */
            color: #FFFFFF;
            padding: 5px 8px;
            border: 1px solid white;
            border-radius: 1rem;
            width: auto;

            }
        }

        .ref-amount{
            padding-top: 1rem;
            .amount-title{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                /* identical to box height */
                color: #FFFFFF;
            }
            .amount{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                /* identical to box height */
                padding: 0 8px;
                color: #FFFFFF;

            }
        }
    }
}

/* media query */

@media (max-width:950px) {

    .card-container{
    grid-template-columns: 1fr !important;
    /* text-align: center; */
    justify-content: center;
    gap: 1rem;

    .card{
        margin: auto;
    }
    }
}

`
export default EnrollCard;