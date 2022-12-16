export class Topic {
    name: string = '';
    slug: string = '';

    constructor(obj?: Partial<Topic>) {
        Object.assign(this, {
            ...obj,
        });
    }
}
