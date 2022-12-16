import React from 'react';

type Props = {
    articles: any[]
}

const ArticleOverviewComponent = ({ articles }: Props) => {
    return (
        <section className="ArticleOverviewComponent">
            <h3>Popular Posts</h3>
            <div>
                {articles.map((article) => {
                    const { title, image } = article;
                    return (
                        <div>
                            <img src={image.url} />
                            <p>{title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ArticleOverviewComponent;
