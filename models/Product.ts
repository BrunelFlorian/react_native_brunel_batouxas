export class Product {
    id: string;
    name: string;
    description: string;
    category: string;

    constructor(id: string, name: string, description: string, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }
}