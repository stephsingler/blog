export class Ingredient {
    name: string = '';
    description: string = '';
    lookFor: string = '';
    ewg: string = '';
    sources: {
        title: string;
        content: {
            json: any;
        }
    };
    constructor(obj?: Partial<Ingredient>) {
        Object.assign(this, {
            ...obj,
        });
    }
}
