import React from 'react';
import './App.scss';
import FooterComponent from '../Footer/Footer';
import InstagramFeedComponent from '../InstagramFeed/InstagramFeed';
import HeaderComponent from "../Header/Header";
import { GetArticleCollection } from "../../Utils/GetArticleCollection";
import { GetArticle } from "../../Utils/GetArticle";


type Props = {
    articles: [],
    totalCount: number
}
const AppComponent = () => {
    // const { articles, totalCount } = GetArticleCollection();
    console.log(GetArticleCollection());
    console.log(GetArticle({slug: 'test-article'}));

  return (
    <section className="AppComponent">
        <HeaderComponent/>
        {/*<InstagramFeedComponent />*/}
        <div style={{height: '700px'}}></div>
        <FooterComponent />
    </section>
  );
};

export default AppComponent;
