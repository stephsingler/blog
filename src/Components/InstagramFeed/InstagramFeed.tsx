import React from 'react';
import './InstagramFeed.scss';
import { Instagram } from "../../Constants";
import InstagramPhotoComponent from "../InstagramPhoto/InstagramPhoto";

const InstagramFeedComponent = () => {
    return (
        <section className='InstagramFeedComponent'>
            <div className='instagram-link'>
                <div>
                    <p>Let's</p>
                    <p>Be Friends.</p>
                </div>
                <button>
                    <a href='https://www.instagram.com/stephaniemdoolin/' target='_blank' rel='noreferrer'>
                        @STEPHANIEMDOOLIN
                    </a>
                </button>
            </div>
            <div className='instagram-photos'>
                { Instagram.map((photo) => {
                 return <InstagramPhotoComponent photo={photo} />
                })}
            </div>
        </section>
    );
};

export default InstagramFeedComponent;
