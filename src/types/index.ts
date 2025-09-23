// TypeScript type definitions for the e-commerce app

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  reviews: number;
  brand: string;
  inStock: boolean;
  tags: string[];
  specifications: Record<string, string>;
  url: string;
  discount?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  avatar?: string;
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  products: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: Address;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

// TODO: AI Recommendation Engine types
export interface AIRecommendation {
  productId: string;
  score: number;
  reason: string;
}

// TODO: AI Chatbot types
export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

// TODO: MLOps/AIOps monitoring types
export interface MonitoringMetrics {
  responseTime: number;
  errorRate: number;
  userEngagement: number;
  conversionRate: number;
}
