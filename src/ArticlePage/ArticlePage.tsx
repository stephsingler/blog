import React, {useEffect, useState} from 'react';
import { GetArticle } from "../Utils/GetArticle";


const ArticlePageComponent = () => {
    // const [article, setArticle] = useState({});
    //
    // useEffect(() => {
    //     (async () => {
    //         const { article } = await GetArticle({ slug: 'test-article' });
    //         setArticle(article);
    //     })();
    //
    //     return () => {};
    // }, []);
    //
    return (
        <section className="ArticlePageComponent">
           <p>Hello World!</p>
        </section>
    );
};

export default ArticlePageComponent;
