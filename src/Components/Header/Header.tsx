import React from 'react';
import { FaAmazon, FaRegEnvelope, FaInstagram } from 'react-icons/fa';
import './Header.scss';
import NavComponent from "./Nav/Nav";

const HeaderComponent = () => {
    return (
        <section className='HeaderComponent'>
            <h3>Stephanie Doolin</h3>
            <NavComponent/>
            <ul>
                <li>
                    <a href='https://www.instagram.com/stephaniemdoolin/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={26}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.amazon.com/hz/wishlist/ls/10DBHRJ29QC26?ref_=wl_share' target='_blank' rel='noopener noreferrer'>
                        <FaAmazon size={26}/>
                    </a>
                </li>
                <li>
                    <a href='mailto:stephaniemdoolin@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FaRegEnvelope size={26}/>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default HeaderComponent;
