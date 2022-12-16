import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import FooterComponent from '../Footer/Footer';
import InstagramFeedComponent from '../InstagramFeed/InstagramFeed';
import HeaderComponent from "../Header/Header";
import ArticlesPageComponent from "../../ArticlesPage/ArticlesPage";
import ArticlePageComponent from "../../ArticlePage/ArticlePage";

const AppComponent = () => {
  return (
      <Router>
          <section className="AppComponent">
              <HeaderComponent/>
              <Routes>
                  <Route path="articles" element={<ArticlesPageComponent />} />
                  <Route path="articles/:articleSlug" element={<ArticlePageComponent />} />
              </Routes>
              <FooterComponent/>
          </section>
      </Router>
  );
};

export default AppComponent;
