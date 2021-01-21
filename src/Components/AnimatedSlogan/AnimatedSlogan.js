import React from 'react';
import { textCarousel } from '../../Utils';
import './AnimatedSlogan.scss';

const AnimatedSloganComponent = () => {
    window.onload = textCarousel();
    return (
        <div className='AnimatedSloganComponent'>
            <h1>You are more than
                <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ " a job.", " a mom.", " a business woman.", " a wife."]'>
                </span>
            </h1>
            <h4>You are more than your "label".</h4>
            <p>Your planner should be too.</p>
        </div>
    );
};

export default AnimatedSloganComponent;
