import { Vehicle, Service, Destination, Driver, Review, BlogPost, FAQItem, BookingDetails } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'v-sedan-dzire',
    name: 'Maruti Suzuki Dzire / Etios',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 11,
    baseFare: 1200,
    seats: 4,
    bags: 2,
    fuelType: 'Diesel',
    ac: true,
    features: ['Clean Interiors', 'Bluetooth Music', 'Air Conditioning', 'Luggage Carrier', 'Phone Charger'],
    popular: true,
    description: 'Perfect economical sedan for small families and single travelers. Ideal for local city travel and budget outstation trips.',
    rating: 4.8
  },
  {
    id: 'v-suv-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 14,
    baseFare: 1600,
    seats: 6,
    bags: 3,
    fuelType: 'CNG',
    ac: true,
    features: ['Spacious 6-Seater', 'Rear AC Vents', 'Ample Boot Space', 'Smooth Suspension', 'USB Ports'],
    popular: true,
    description: 'Comfortable multi-utility vehicle for group travel, family vacations, and airport pickup/drop with high boot capacity.',
    rating: 4.9
  },
  {
    id: 'v-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Innova Crysta',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 18,
    baseFare: 2200,
    seats: 7,
    bags: 4,
    fuelType: 'Diesel',
    ac: true,
    features: ['Captain Seats', 'Dual Climate Control', 'Push Button Start', 'Premium Leather Seats', 'Ambient Lighting'],
    popular: true,
    description: 'India’s favorite luxury MPV. Unrivaled long-distance highway comfort with supreme legroom and plush seating.',
    rating: 4.95
  },
  {
    id: 'v-lux-bmw',
    name: 'BMW 5 Series / Audi A6',
    category: 'Luxury Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 45,
    baseFare: 5500,
    seats: 4,
    bags: 3,
    fuelType: 'Petrol',
    ac: true,
    features: ['VIP Executive Interior', 'Bowers & Wilkins Audio', 'Sunroof', 'Chauffeur Driven', 'Chilled Water & Snacks'],
    popular: false,
    description: 'Ultra-luxury executive sedan for corporate VIP travel, weddings, red carpet arrivals, and elite outstation road trips.',
    rating: 5.0
  },
  {
    id: 'v-lux-fortuner',
    name: 'Toyota Fortuner 4x4',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 35,
    baseFare: 4500,
    seats: 7,
    bags: 5,
    fuelType: 'Diesel',
    ac: true,
    features: ['High Ground Clearance', 'Commanding Road Presence', 'JBL Sound System', 'Power Seats', 'All-Terrain Capability'],
    popular: true,
    description: 'Commanding luxury 7-seater SUV built for rugged terrain, hill stations like Manali/Shimla, and high-profile travel.',
    rating: 4.9
  },
  {
    id: 'v-tempo-12',
    name: 'Force Tempo Traveller (12 Seater)',
    category: 'Tempo Traveller',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 25,
    baseFare: 3500,
    seats: 12,
    bags: 8,
    fuelType: 'Diesel',
    ac: true,
    features: ['Push-back Recliner Seats', 'LED TV & Music System', 'Extra Boot Space', 'Individual AC Vents', 'First Aid Kit'],
    popular: false,
    description: 'Ideal for large group tours, corporate outings, wedding guest transportation, and pilgrimage trips across North & West India.',
    rating: 4.85
  },
  {
    id: 'v-electric-ev',
    name: 'Tata Nexon EV / BYD E6',
    category: 'Electric Taxi',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 12,
    baseFare: 1300,
    seats: 4,
    bags: 2,
    fuelType: 'EV',
    ac: true,
    features: ['Zero Emissions', 'Silent Cabin Experience', 'Fast Charging Capable', 'Touchscreen Infotainment', 'Regen Braking'],
    popular: true,
    description: 'Eco-friendly green electric taxi for conscious travelers. Quiet, smooth city commuting and short outstation trips.',
    rating: 4.9
  }
];

export const SERVICES: Service[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'Punctual 24/7 airport pickup and drop services with live flight tracking and zero wait time delays.',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    description: 'Reliable one-way and round-trip outstation cabs connecting 120+ cities with experienced highway drivers.',
    iconName: 'MapPin',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600',
    badge: 'Top Choice'
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi',
    description: 'Pay only for the distance traveled one way. No return fare charges on all major intercity routes.',
    iconName: 'ArrowRight',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=600',
    badge: 'Save 50%'
  },
  {
    id: 'round-trip',
    title: 'Round Trip Outstation',
    description: 'Flexible multi-day round trips with driver allowance included. Ideal for weekend getaways and vacations.',
    iconName: 'Repeat',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hourly-rental',
    title: 'Hourly Local Rental',
    description: 'Rent a cab with driver for 4 Hours / 40 KM, 8 Hours / 80 KM, or 12 Hours for hassle-free city shopping & meetings.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Customized fleet management solutions for corporate clients with automated invoicing and GST billing.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'wedding-car',
    title: 'Wedding Car Rental',
    description: 'Decorated luxury vehicles (BMW, Audi, Mercedes, Jaguar) for weddings and special celebratory events.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    badge: 'Luxury'
  },
  {
    id: 'luxury-cars',
    title: 'VIP Luxury Fleet',
    description: 'High-end SUVs and luxury saloons accompanied by uniformed, multi-lingual executive chauffeurs.',
    iconName: 'Crown',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'The Royal Pink City',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Delhi to Jaipur', 'Agra to Jaipur', 'Udaipur to Jaipur'],
    startingPrice: 2800,
    distanceKm: 280,
    highlights: ['Hawa Mahal', 'Amer Fort', 'City Palace', 'Chokhi Dhani']
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    tagline: 'Heart of the Nation & Airport Hub',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Jaipur to Delhi', 'Chandigarh to Delhi', 'Agra to Delhi'],
    startingPrice: 2400,
    distanceKm: 250,
    highlights: ['IGI Airport', 'India Gate', 'Red Fort', 'Qutub Minar']
  },
  {
    id: 'agra',
    name: 'Agra',
    tagline: 'Home of the Iconic Taj Mahal',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Delhi to Agra Expressway', 'Jaipur to Agra'],
    startingPrice: 2200,
    distanceKm: 210,
    highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh', 'Fatehpur Sikri']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of Lakes & Venetian Romance',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Jaipur to Udaipur', 'Ahmedabad to Udaipur', 'Jodhpur to Udaipur'],
    startingPrice: 4200,
    distanceKm: 395,
    highlights: ['Lake Pichola', 'City Palace Udaipur', 'Jag Mandir', 'Fateh Sagar']
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    tagline: 'The Blue City & Mehrangarh Citadel',
    image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Jaipur to Jodhpur', 'Udaipur to Jodhpur', 'Bikaner to Jodhpur'],
    startingPrice: 3800,
    distanceKm: 330,
    highlights: ['Mehrangarh Fort', 'Umaid Bhawan', 'Jaswant Thada', 'Clock Tower']
  },
  {
    id: 'shimla',
    name: 'Shimla & Manali',
    tagline: 'Queen of Hills & Himalayan Valleys',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    popularRoutes: ['Delhi to Shimla', 'Chandigarh to Manali', 'Delhi to Manali'],
    startingPrice: 5500,
    distanceKm: 530,
    highlights: ['Mall Road', 'Solang Valley', 'Atal Tunnel', 'Jakhoo Temple']
  }
];

export const DRIVERS: Driver[] = [
  {
    id: 'd-1',
    name: 'Rajesh Kumar Singh',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    experienceYears: 12,
    rating: 4.96,
    totalTrips: 1840,
    languages: ['Hindi', 'English', 'Rajasthani'],
    carAssigned: 'Toyota Innova Crysta',
    status: 'Available',
    verified: true
  },
  {
    id: 'd-2',
    name: 'Gurpreet Singh Dhillon',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    experienceYears: 9,
    rating: 4.92,
    totalTrips: 1420,
    languages: ['Hindi', 'Punjabi', 'English'],
    carAssigned: 'Maruti Ertiga',
    status: 'On Trip',
    verified: true
  },
  {
    id: 'd-3',
    name: 'Vikram Sharma',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    experienceYears: 15,
    rating: 4.98,
    totalTrips: 2600,
    languages: ['Hindi', 'English'],
    carAssigned: 'BMW 5 Series (VIP Chauffeur)',
    status: 'Available',
    verified: true
  },
  {
    id: 'd-4',
    name: 'Sanjay Rathore',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    experienceYears: 7,
    rating: 4.88,
    totalTrips: 980,
    languages: ['Hindi', 'English', 'Gujarati'],
    carAssigned: 'Maruti Suzuki Dzire',
    status: 'Available',
    verified: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    author: 'Ananya & Rohan Deshmukh',
    location: 'Mumbai',
    rating: 5,
    comment: 'Booked an Innova Crysta for our Golden Triangle trip (Delhi-Agra-Jaipur). Driver Rajesh was extremely polite, punctual, and knew every scenic shortcut. Car was spotless clean!',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    tripRoute: 'Delhi → Agra → Jaipur'
  },
  {
    id: 'r-2',
    author: 'Sunil Varma',
    location: 'Bangalore',
    rating: 5,
    comment: 'Used Yatra Cabs for midnight IGI Airport transfer to Noida. The driver was waiting at arrivals with a name sign, assisted with heavy luggage, and the booking price was 30% cheaper than airport counters.',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    tripRoute: 'Delhi IGI Airport → Noida'
  },
  {
    id: 'r-3',
    author: 'Dr. Meenakshi Sundaram',
    location: 'Chennai',
    rating: 5,
    comment: 'Exceptional one-way cab service from Jaipur to Udaipur. Transparent pricing with no hidden toll surprise. Will definitely use Yatra Cabs for all future India trips!',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    tripRoute: 'Jaipur → Udaipur One-Way'
  },
  {
    id: 'r-4',
    author: 'Amitabh Malhotra',
    location: 'Gurugram',
    rating: 5,
    comment: 'Corporate monthly rental booking. Highly professional VIP chauffeur service with clean receipts and flawless billing. Very impressive service standards.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    tripRoute: 'Corporate Fleet Service'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Delhi to Jaipur Road Trip Guide: Best Stops, Food Joints & Highways',
    excerpt: 'Discover the scenic NH48 expressway route, iconic dhabas in Behror, and secret historical stops for a memorable 5-hour drive.',
    content: 'Driving from Delhi to Jaipur via the NH48 is one of North India’s classic road trips. Spanning approximately 280 km, this smooth highway journey offers a blend of modern expressways, authentic Rajasthani kulhad chai, and heritage forts...',
    date: 'August 1, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    category: 'Travel Guide',
    author: 'Yatra Travel Team'
  },
  {
    id: 'b-2',
    title: 'One-Way Taxi vs Round Trip: How to Save Up to 40% on Outstation Travel',
    excerpt: 'Learn when to choose one-way cabs and how flat per-kilometer rates eliminate unfair return charges on intercity travel.',
    content: 'Traditionally, taxi operators charged return fares even when passengers only needed travel in one direction. With Yatra Cabs’ transparent one-way network, you pay exclusively for the distance covered from pickup to destination...',
    date: 'July 24, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    category: 'Money Saving Tips',
    author: 'Vikram Sharma'
  },
  {
    id: 'b-3',
    title: 'Top 7 Hill Station Destinations from Delhi for a Refreshing Weekend Getaway',
    excerpt: 'Escape the city heat with seamless taxi rides to Shimla, Mussoorie, Nainital, Kasol, and Lansdowne with expert mountain drivers.',
    content: 'The northern Himalayas are just a few hours’ comfortable drive away from the NCR region. Hiring a spacious Innova Crysta with a seasoned mountain driver ensures safety on steep turns and pin curves...',
    date: 'July 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    category: 'Destinations',
    author: 'Ankit Mehta'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f-1',
    category: 'Booking',
    question: 'How do I book a taxi with Yatra Cabs?',
    answer: 'You can easily book online using our instant search widget above, select your preferred vehicle (Sedan, SUV, Innova Crysta, etc.), enter passenger details, and confirm. You can also call our 24/7 hotline at +91 98765 43210 or message us on WhatsApp.'
  },
  {
    id: 'f-2',
    category: 'Booking',
    question: 'Are toll taxes, state taxes, and driver allowances included in the fare?',
    answer: 'Yes! We provide 100% transparent pricing. Our outstation package quotes explicitly detail base fare, toll taxes, state permit taxes, and driver allowances with zero hidden charges.'
  },
  {
    id: 'f-3',
    category: 'Cancellation',
    question: 'What is Yatra Cabs cancellation policy?',
    answer: 'We offer FREE cancellation up to 6 hours before your scheduled pickup time with 100% refund. Cancellations made within 6 hours of pickup incur nominal processing fees.'
  },
  {
    id: 'f-4',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash to Driver, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Corporate Credit Accounts.'
  },
  {
    id: 'f-5',
    category: 'Driver',
    question: 'When will I get my driver and car details?',
    answer: 'Driver details (Name, Phone Number, Vehicle License Plate, and Live GPS Tracking link) are sent via SMS & WhatsApp 2 hours before your scheduled pickup time.'
  },
  {
    id: 'f-6',
    category: 'Safety',
    question: 'How does Yatra Cabs guarantee passenger safety?',
    answer: 'All our drivers undergo police verification, background checks, and regular defensive driving training. Every car is equipped with real-time GPS tracking and SOS emergency panic buttons.'
  }
];

export const INITIAL_BOOKINGS: BookingDetails[] = [
  {
    id: 'YATRA-9841',
    pickupLocation: 'Delhi IGI Airport Terminal 3',
    dropLocation: 'Hotel Taj Mahal, Mansingh Road, Jaipur',
    pickupDate: '2026-08-06',
    pickupTime: '09:00 AM',
    tripType: 'one-way',
    passengers: 3,
    vehicleId: 'v-innova-crysta',
    vehicleName: 'Toyota Innova Crysta',
    customerName: 'Siddharth Rao',
    customerPhone: '+91 98230 11223',
    customerEmail: 'siddharth.rao@example.com',
    specialInstructions: 'Flight arrives at 8:30 AM. Need child booster seat.',
    status: 'Confirmed',
    totalFare: 5240,
    estimatedKm: 280,
    createdAt: '2026-08-04 14:30',
    assignedDriverId: 'd-1'
  },
  {
    id: 'YATRA-9842',
    pickupLocation: 'Gurugram Cyber Hub',
    dropLocation: 'Agra Fort Expressway',
    pickupDate: '2026-08-07',
    pickupTime: '06:30 AM',
    tripType: 'round-trip',
    passengers: 4,
    vehicleId: 'v-suv-ertiga',
    vehicleName: 'Maruti Suzuki Ertiga',
    customerName: 'Pooja Agarwal',
    customerPhone: '+91 98112 44556',
    customerEmail: 'pooja.a@example.com',
    specialInstructions: 'Day trip return by 9:00 PM.',
    status: 'Pending',
    totalFare: 6160,
    estimatedKm: 440,
    createdAt: '2026-08-05 08:15'
  },
  {
    id: 'YATRA-9840',
    pickupLocation: 'Connaught Place, New Delhi',
    dropLocation: 'Noida Sector 62',
    pickupDate: '2026-08-04',
    pickupTime: '02:00 PM',
    tripType: 'one-way',
    passengers: 2,
    vehicleId: 'v-sedan-dzire',
    vehicleName: 'Maruti Suzuki Dzire',
    customerName: 'Harish Mehta',
    customerPhone: '+91 97722 33445',
    customerEmail: 'hmehta@example.com',
    status: 'Completed',
    totalFare: 1450,
    estimatedKm: 35,
    createdAt: '2026-08-04 10:00',
    assignedDriverId: 'd-4'
  }
];
