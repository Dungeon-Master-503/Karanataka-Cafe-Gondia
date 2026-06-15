export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'south-indian' | 'pizza-italian' | 'north-indian' | 'beverages-desserts';
  description: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  specialRequest?: string;
  status: 'confirmed' | 'pending';
  timestamp: string;
}
