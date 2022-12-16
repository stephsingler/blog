import React from 'react';
import './ArticleGallery.scss';
import ArticleOverviewComponent from "../ArticleOverview/ArticleOverview";
import { Article } from "../..//Models/Article";

type Props = {
    articles: Article[];
}

const ArticleGalleryComponent = ({ articles }: Props) => {
    return (
        <section className="ArticleGalleryComponent">
            {articles.map((article, i) => {
                return <ArticleOverviewComponent key={i} article={article} />
            })}
        </section>
    );
};

export default ArticleGalleryComponent;
