import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Article } from "../../Models/Article";

import './ArticlePage.scss';
import { GetArticle } from "../../Utils/GetArticle";


const ArticlePageComponent = () => {
    const { articleSlug } = useParams();
    const [article, setArticle] = useState(new Article);

    useEffect(() => {
        (async () => {
            const { article } = await GetArticle({ slug: articleSlug });
            setArticle(article);
        })();

        return () => {};
    }, [articleSlug]);

    const { author, image, title, tempContent, topicsCollection } = article;
    const sources = article?.sources?.content?.json?.content;

    const renderParagraphs = () => {
        const paragraphs = tempContent.split('\n');
        return paragraphs.map((p, i) => {
            return (
                <p key={i}>{p}</p>
            );
        });
    };

    const getHyperlinks = () => {
        return sources.map(el => {
            return el.content.map(nodeType => {
                return Object.values(nodeType)[1]
            });
        })
    };

    const getSources = () => {
        return getHyperlinks().map((link, i) => {
            return (
                <li key={i}>
                    <a href={link[1]?.uri}>{link[1]?.uri}</a>
                </li>
            );
        })
    };

    return (
        <section className="ArticlePageComponent">
            <div className="header">
                <p>{topicsCollection?.items[0]?.name}</p>
                <h1>{title}</h1>
            </div>
            <div className="image-container">
                <img src={image?.url} alt="main" />
            </div>
            { tempContent && (
                <div className="content">
                    {renderParagraphs()}
                </div>
            )}
            { article?.sources && (
                <div className="sources">
                    <h3>Sources</h3>
                    <ul>
                        {getSources()}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default ArticlePageComponent;
