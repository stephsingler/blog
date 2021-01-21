import React from 'react';
import './App.scss';
import OverviewComponent from '../Overview/Overview';
import FooterComponent from '../Footer/Footer';
import InstagramFeedComponent from '../InstagramFeed/InstagramFeed';
import AnimatedSloganComponent from '../AnimatedSlogan/AnimatedSlogan';

const AppComponent = () => {
  return (
    <div className="AppComponent">
      <OverviewComponent />
      <AnimatedSloganComponent />
      <InstagramFeedComponent />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
