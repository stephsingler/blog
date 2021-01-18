import React from 'react';
import './Overview.scss';
import HomepageHeader from '../../Images/homepage-header2.png';

const OverviewComponent = () => {
    return (
        <div className='OverviewComponent'>
           <img src={HomepageHeader} />
        </div>
    );
};

export default OverviewComponent;
