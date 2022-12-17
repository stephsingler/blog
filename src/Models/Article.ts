import { Topic } from './Topic';
export class Article {
    articleSlug: string = '';
    author: string = '';
    content: {
        json: any;
    };
    image: {
        url: string;
    };
    publishDate: string = '';
    sources: {
        title: string;
        content: {
            json: any;
        }
    };
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
