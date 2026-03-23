export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}
