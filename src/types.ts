export type TripType = 'one-way' | 'round-trip' | 'local';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Innova Crysta' | 'Luxury Sedan' | 'Luxury SUV' | 'Tempo Traveller' | 'Electric Taxi';
  image: string;
  pricePerKm: number;
  baseFare: number;
  seats: number;
  bags: number;
  fuelType: 'Diesel' | 'Petrol' | 'EV' | 'CNG';
  ac: boolean;
  features: string[];
  popular?: boolean;
  description: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  badge?: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  popularRoutes: string[];
  startingPrice: number;
  distanceKm: number;
  highlights: string[];
}

export interface Driver {
  id: string;
  name: string;
  photo: string;
  experienceYears: number;
  rating: number;
  totalTrips: number;
  languages: string[];
  carAssigned: string;
  status: 'Available' | 'On Trip' | 'On Duty';
  verified: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  tripRoute: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Cancellation' | 'Payment' | 'Driver' | 'Safety';
}

export interface BookingDetails {
  id?: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  tripType: TripType;
  rentalDurationHours?: number;
  passengers: number;
  vehicleId: string;
  vehicleName?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialInstructions?: string;
  status: 'Pending' | 'Confirmed' | 'Assigned' | 'Completed' | 'Cancelled';
  totalFare: number;
  estimatedKm: number;
  createdAt: string;
  assignedDriverId?: string;
}

export type ActiveTab = 'home' | 'services' | 'fleet' | 'destinations' | 'why-us' | 'testimonials' | 'faq' | 'blog' | 'contact';
