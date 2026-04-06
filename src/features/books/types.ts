export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image_url: string;
  description?: string;
  stock?: number;
  createdAt?: string;
}
