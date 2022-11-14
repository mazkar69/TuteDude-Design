import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



export const Navbar = () => {
    return (
        <Nav>
            <div className='logo'>
                <img src="../image/logo.png" alt="" />
            </div>
            <div className="nav-btn">
                <NavLink to="/" className="nav-item">My Assignment</NavLink>
                <NavLink to="/" className="nav-item">Chat with Menter</NavLink>
                <div className='user'>
                    <i className="fa-solid fa-user nav-icon"></i>
                    <NavLink to="/" className="nav-item-user">ProfileName</NavLink>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

            </div>
        </Nav>
    )
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 5rem;
background: #FFFFFF;
height: 73.03px;
.logo{
    width: 160px;
    img{
        width: 100%;
    }

}

.nav-btn{
    display: flex;
    gap: 2rem;

    .nav-item{
        
        color:rgba(128, 0, 128, 0.25);
        text-decoration:none;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    }

    .user{
        .nav-icon{
            padding: .2rem;
            margin: 0 .5rem;
            background-color:rgba(128, 0, 128, 1) ;
            border-radius: 50%;
            color: white;
        }

        .nav-item-user{
        color: rgba(128, 0, 128, 1);
        text-decoration:none;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        padding-right: 8px;

        }
    }



}


/* Media query */

@media (max-width:1010px)
{
    .nav-item{
        
        display: none;

    }

    .user{
        background-color:rgba(128, 0, 128, 1);
        padding: 10px;
        border-radius: 8px;
        color: white;
        .nav-icon{
                display: none;
        }
        .nav-item-user{
        color: white !important;
        }
    }

}
@media (max-width:650px)
{
    padding: 1rem 2rem;
    background: #FFFFFF;
    height: 73.03px;
   
    .logo{
        width: 160px;
    img{
        width: 90%;
    }

}
}
@media (max-width:400px)
{
    padding: .7rem 1rem;

   
    .logo{
        width: 160px;
    img{
        width: 90%;
    }



}
}



`
