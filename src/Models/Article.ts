export class Article {
    articleSlug: string = '';
    author: string = '';
    content: {
        json: any;
        links: any;
    };
    image: {
        url: string;
    };
    publishDate: string = '';
    title: string = '';
    topicsCollection: {
        items: []
    };
    url: string = '';

    constructor(obj?: Partial<Article>) {
        Object.assign(this, {
            ...obj,
        });
    }
}
