import React, {useEffect, useState} from 'react';
import { GetArticleCollection } from "../../Utils/GetArticleCollection";
import ArticleGalleryComponent from "./ArticleGallery/ArticleGallery";

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
        <section className="ArticlesPageComponent">
            <ArticleGalleryComponent articles={articles} />
        </section>
    )

};

export default ArticlesPageComponent;
