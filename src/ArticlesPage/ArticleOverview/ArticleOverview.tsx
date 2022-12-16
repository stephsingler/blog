// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleOverview.scss';
import { Article } from "../../Models/Article";

type Props = {
    article: Article
}

const ArticleOverviewComponent = ({ article }: Props) => {
    const { articleSlug, image, title, topicsCollection: { items } } = article;
    return (
        <section className="ArticleOverviewComponent">
            <Link to={articleSlug}>
                <img src={image.url} alt="article" />
                <p>{items[0]?.name}</p>
                <h2>{title}</h2>
            </Link>
        </section>
    );
};

export default ArticleOverviewComponent;
