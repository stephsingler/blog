import { Topic } from './Topic';
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
    tempContent: string = '';
    title: string = '';
    topicsCollection: {
        items: Topic[]
    };
    url: string = '';

    constructor(obj?: Partial<Article>) {
        Object.assign(this, {
            ...obj,
        });
    }
}
