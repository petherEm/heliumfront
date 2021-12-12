import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const Ul = styled.ul`
    list-style: none;
    display: none;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }
    @media only screen and (max-width: 400px) {
            display: flex;
            flex-flow: column nowrap;
            background-color: black;
            opacity: 0.9;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            top: -20px;
            right: 0;
            height: 100vh;
            width: 300px;
            font-size: 22px;
            font-weight: 300;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
            position: absolute;
            z-index: 888;

            li {
                color: #fff;
            }
    }

`

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Link href="/#heliumintro">
                <li>Helium</li>
            </Link>
            <Link href="/#news">
                <li>News</li>
            </Link>
            <Link href="/cryptocurrencies">
                <li>Crypto </li>
            </Link>
            <Link href="/map">
                <li>Map <span style={{color: 'red', fontSize: '12px'}}>under construction</span></li>
            </Link>
            <Link href="#">
                <li>FAQ <span style={{color: 'red', fontSize: '12px'}}>under construction</span></li>
            </Link>
            <Link href="#">
                <li>Contact <span style={{color: 'red', fontSize: '12px'}}>under construction</span></li>
            </Link>
            
        </Ul>
    )
}

export default RightNav
