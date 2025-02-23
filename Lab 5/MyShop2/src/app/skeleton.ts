export class Goods {
    id: string;
    name: string;
    description: string;
    price: string;
    imageLink: string;
    rating: number;
    productLink: string;
    category: string;
    likes: number=0;
    constructor(id: string, name: string, description: string, price: string, imageLink: string, rating: number, productLink: string, category:string, likes: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageLink = imageLink;
      this.rating = rating;
      this.productLink = productLink;
      this.category=category;
      this.likes=likes;
    }
}