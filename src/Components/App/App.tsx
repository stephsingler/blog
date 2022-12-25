import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import FooterComponent from '../Footer/Footer';
import HeaderComponent from "../Header/Header";
import ArticlesPageComponent from "../ArticlesPage/ArticlesPage";
import ArticlePageComponent from "../ArticlePage/ArticlePage";
import IngredientEducationComponent from "../IngredientEducation/IngredientEducation";
import SafeSwapsPageComponent from "../SafeSwapsPage/SafeSwapsPage";
import HomepageComponent from "../Homepage/Homepage";

const AppComponent = () => {
  return (
      <Router>
          <section className="AppComponent">
              <HeaderComponent/>
              <Routes>
                  <Route path="/" element={<HomepageComponent />} />
                  <Route path="articles" element={<ArticlesPageComponent />} />
                  <Route path="articles/:articleSlug" element={<ArticlePageComponent />} />
                  <Route path="ingredient-education" element={<IngredientEducationComponent />} />
                  <Route path="safe-swaps" element={<SafeSwapsPageComponent />} />
              </Routes>
              <FooterComponent/>
          </section>
      </Router>
  );
};

export default AppComponent;
