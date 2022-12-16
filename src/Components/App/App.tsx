import React, { useEffect, useState } from 'react';
import './App.scss';
import FooterComponent from '../Footer/Footer';
import InstagramFeedComponent from '../InstagramFeed/InstagramFeed';
import HeaderComponent from "../Header/Header";
import { GetArticle } from "../../Utils/GetArticle";
import ArticlesPageComponent from "../../ArticlesPage/ArticlesPage";

type Props = {
    children: React.ReactNode;
}


const AppComponent = ({ children }) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        (async () => {
            const { article } = await GetArticle({ slug: 'test-article' });
            setArticle(article);
        })();

        return () => {};
    }, []);

  return (
      <section className="AppComponent">
         <HeaderComponent/>
         {children}
         <FooterComponent/>
      </section>
  );
};

export default AppComponent;
