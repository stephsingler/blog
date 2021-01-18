import React from 'react';
import './App.scss';
import OverviewComponent from "../Overview/Overview";
import FooterComponent from "../Footer/Footer";
import InstagramFeedComponent from "../InstagramFeed/InstagramFeed";

const AppComponent = () => {
  return (
    <div className="AppComponent">
      <OverviewComponent />
      <InstagramFeedComponent />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
