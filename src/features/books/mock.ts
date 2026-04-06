export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
}

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 150000,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    description: "A story of wealth and obsession."
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    price: 120000,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    description: "A dystopian future of surveillance."
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 135000,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    description: "A powerful tale of racial injustice."
  },
  {
    id: "4",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 180000,
    image: "https://images.unsplash.com/photo-1621350238376-ec301a2e5491?auto=format&fit=crop&q=80&w=400",
    description: "An epic high-fantasy adventure."
  },
  {
    id: "5",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 165000,
    image: "https://images.unsplash.com/photo-1610466024868-903c59990414?auto=format&fit=crop&q=80&w=400",
    description: "The start of a magical journey."
  },
  {
      id: "6",
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 250000,
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=400",
      description: "Handbook of Agile Software Craftsmanship."
  }
];
