import React, { useEffect, useState } from 'react';
import './App.scss';
import ArticleGalleryComponent from "../../ArticleGallery/ArticleGallery";
import FooterComponent from '../Footer/Footer';
import InstagramFeedComponent from '../InstagramFeed/InstagramFeed';
import HeaderComponent from "../Header/Header";
import { GetArticleCollection } from "../../Utils/GetArticleCollection";
import { GetArticle } from "../../Utils/GetArticle";


const AppComponent = () => {
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});

    useEffect(() => {
        (async () => {
            const { articles } = await GetArticleCollection();
            const { article } = await GetArticle({ slug: 'test-article' });
            setArticles(articles);
            setArticle(article);
        })();

        return () => {};
    }, []);

  return (
    <section className="AppComponent">
        <HeaderComponent/>
        <ArticleGalleryComponent articles={articles} />
        {/*<InstagramFeedComponent />*/}
        <div style={{height: '700px'}}>
            Showing {articles.length} articles
        </div>
        <FooterComponent />
    </section>
  );
};

export default AppComponent;
