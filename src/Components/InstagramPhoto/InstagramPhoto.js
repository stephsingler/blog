import React from 'react';
import './InstagramPhoto.scss';

const InstagramPhotoComponent = ({ photo }) => {
    return (
        <img className='InstagramPhotoComponent' src={photo} />
    );
};

export default InstagramPhotoComponent;
