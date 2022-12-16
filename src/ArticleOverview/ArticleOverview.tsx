// @ts-ignore
import React from 'react';
import './ArticleOverview.scss';
import { Article } from "../Models/Article";

type Props = {
    article: Article
}

const ArticleOverviewComponent = ({ article }: Props) => {
    const { image, title, topicsCollection: { items } } = article;
    return (
        <section className="ArticleOverviewComponent">
            <img src={image.url} alt="article" />
            {!!items.length && (
                <p>{items[0].name}</p>
            )}
            <h2>{title}</h2>
        </section>
    );
};

export default ArticleOverviewComponent;
