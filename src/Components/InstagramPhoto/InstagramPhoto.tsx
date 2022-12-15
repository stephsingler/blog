import React from 'react';
import './InstagramPhoto.scss';

type Props = {
    photo: string;
}

const InstagramPhotoComponent = ({ photo }: Props) => {
    return (
        <img className='InstagramPhotoComponent' src={photo} />
    );
};

export default InstagramPhotoComponent;
