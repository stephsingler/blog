import React from 'react';
import './InstagramFeed.scss';
import { Instagram } from "../../Constants";
import InstagramPhotoComponent from "../InstagramPhoto/InstagramPhoto";

const InstagramFeedComponent = () => {
    return (
        <div className='InstagramFeedComponent'>
            <div className='instagram-link'>
                <div>
                    <p>Let's</p>
                    <p>Be Friends.</p>
                </div>
                <button>
                    <a href='https://www.instagram.com/stephsingler/' target='_blank' rel='noreferrer'>
                        @STEPHSINGLER
                    </a>
                </button>
            </div>
            <div className='instagram-photos'>
                { Instagram.map((photo) => {
                 return <InstagramPhotoComponent photo={photo} />
                })}
            </div>
        </div>
    );
};

export default InstagramFeedComponent;
