import React, {useEffect, useState} from 'react';
import { GetArticleCollection } from "../Utils/GetArticleCollection";
import ArticleGalleryComponent from "./ArticleGallery/ArticleGallery";
import HeaderComponent from "../Components/Header/Header";
import FooterComponent from "../Components/Footer/Footer";

const ArticlesPageComponent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const { articles } = await GetArticleCollection();
            setArticles(articles);
        })();

        return () => {};
    }, []);

    return (
        <>
            <HeaderComponent />
            <section className="ArticlesPageComponent">
                <ArticleGalleryComponent articles={articles} />
            </section>
            <FooterComponent />
        </>
    )

};

export default ArticlesPageComponent;
