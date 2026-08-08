import { Vehicle, Service, Destination, Driver, Review, BlogPost, FAQItem, BookingDetails } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'v-sedan-dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    image: 'https://images.openai.com/static-rsc-4/0_1ptPhxbGbwuuAnjOxNl53xSleFJFsqEBzLryz9LWER9A35l8xxVfFkLHzyFcyToFhuk9zP_Z3Ge8nuY6L8YjP7u5TzRCD1UABPCLV0pJ3v86EOodevr6TFOGz6QuoX2ab3al7BigjRoMpK_g7F46WCVzNI5reTf4V47lNtspWgzLgJ4WJx8yzsn2h_gIXX?purpose=fullsize',
    pricePerKm: 12,
    baseFare: 999,
    seats: 4,
    bags: 2,
    fuelType: 'Diesel / CNG',
    ac: true,
    features: ['Clean Interiors', 'Bluetooth Music', 'Dual AC', 'Comfortable Rear Seat', 'Spacious Boot', 'Fuel Efficient'],
    popular: true,
    description: 'A reliable and fuel-efficient sedan, ideal for airport transfers, city rides, and outstation travel. Offers excellent comfort, smooth driving, and ample luggage space.',
    rating: 4.8
  },
  {
    id: 'v-sedan-aura',
    name: 'Hyundai Aura',
    category: 'Sedan',
    image: 'https://images.openai.com/static-rsc-4/YSBx-ezU366-vW6IHDr6VosK5dnRtJwQcMgMGGyopP4tFXBLfWCjBwdVp3VTyc6Dh9mN27kQJkkwCjiI3DE3sbD12Tr-goWF3Oc0kquTmTtwNXa0YtMJ0Oz_9DDh24NVbXqMn4G4bgAqW0dEu01g3vV9LsEdGBoIYw5BqXxpE-0B3bIYaMy166hAgU7KLyp9?purpose=fullsize',
    pricePerKm: 11,
    baseFare: 1099,
    seats: 4,
    bags: 2,
    fuelType: 'CNG / Petrol',
    ac: true,
    features: ['Premium Interior', 'Bluetooth Music', 'Air Conditioning', 'Rear AC Vents', 'Excellent Mileage', 'Smooth Ride'],
    popular: true,
    description: 'A stylish compact sedan with a comfortable cabin and excellent mileage. Suitable for city commutes, business travel, and short outstation trips.',
    rating: 4.7
  },
  {
    id: 'v-sedan-amaze',
    name: 'Honda Amaze',
    category: 'Sedan',
    image: 'https://images.openai.com/static-rsc-4/casdyHn9w3gpqphzt0M2v6aaEQxSzoYABBJxMhByf8oyHJituLw7aajrcxPIejwZo8u1AeI8jIu1alpker8fR82nG9SOfAjsxKFvaQkgky9UjtqtaJf0brK4GPGNBVZeLgPHMuAm6T65hjFQrleoLJ_ZSHvEPwUfn_uuVzk2FTHs9dbdUNPSXLA5paRobK7c?purpose=fullsize',
    pricePerKm: 12,
    baseFare: 1299,
    seats: 4,
    bags: 2,
    fuelType: 'Petrol',
    ac: true,
    features: ['Spacious Cabin', 'Auto Climate Control', 'Silent Engine', 'Large Boot Space', 'Premium Comfort', 'Smooth Highway Ride'],
    popular: true,
    description: 'A premium compact sedan with a spacious cabin, refined performance, and smooth ride quality. A great option for long-distance travel and executive bookings.',
    rating: 4.9
  },
  {
    id: 'v-suv-creta',
    name: 'Hyundai Creta',
    category: 'SUV',
    image: 'https://images.openai.com/static-rsc-4/9Acjst8vyzIlOzzT-zANJkqLDA1-3ltVvaGsPH0FLdFpheRiY9yDLoHxUzskNkLVrxShxK1RQ-VQ--rdL3HHpxDTgP5SY3qbyfrt43Qbmmd9YYF_iCVnsFtbKmKEmlHUxetIaT4gM240GeY-VfuTqbGc18A5F9r4KAJ2kLdV6-KpsUVXj28KjKgG7Ti13F3d?purpose=fullsize',
    pricePerKm: 14,
    baseFare: 1699,
    seats: 5,
    bags: 3,
    fuelType: 'Diesel / Petrol',
    ac: true,
    features: ['Panoramic Sunroof', 'Level 2 ADAS', 'Premium Interiors', 'Ventilated Seats', 'Large Boot Space', 'Wireless Android Auto & Apple CarPlay'],
    popular: true,
    description: 'A premium mid-size SUV offering a spacious cabin, refined performance, and advanced technology. Ideal for family vacations, airport transfers, business trips, and long-distance outstation travel.',
    rating: 4.9
  },
  {
    id: 'v-suv-brezza',
    name: 'Maruti Suzuki Brezza',
    category: 'SUV',
    image: 'https://images.openai.com/static-rsc-4/cUhSn6jOCCpRU2UUvzDDSIJRfWt2A5unO5aqcP9IbADoTgUAeWdCVfXFbQ0OCBCTCJ4KnetfVp_FDaVvNA1cJ9q9HV8o3tW90upbNZX7pNUeZR-ig4YCS4qUr08K1mr2xuMofGwdA0CN1Tt_tYBkLQdVXuZHYQR5ksm_WenAu3UYMxY8cVeX6_SJTzizBPM-?purpose=fullsize',
    pricePerKm: 12,
    baseFare: 1499,
    seats: 5,
    bags: 3,
    fuelType: 'Petrol / CNG',
    ac: true,
    features: ['High Ground Clearance', 'SmartPlay Infotainment', 'Auto Climate Control', 'Rear Parking Camera', 'Cruise Control', 'Spacious Cabin'],
    popular: true,
    description: 'A dependable compact SUV known for excellent fuel efficiency, comfortable seating, and low maintenance. Perfect for city travel and weekend outstation trips.',
    rating: 4.8
  },
  {
    id: 'v-suv-nexon',
    name: 'Tata Nexon',
    category: 'SUV',
    image: 'https://images.openai.com/static-rsc-4/zankN6HVoPBnh5zuT2qVUf9owTsBNDtE1QZ06BUxTMeQgZ_2PeSDp--4PkfW5HGqkEYQWZEShzdkkwBLsxCdWF14_ipR3LRTrkwumN3S2zksEwRRqh9Kd2lY7jJOx_XAZ2LTyha0VrZ3XpEs-0MV9sw663sw-8PQ4lghf6_LsmurlsSOkFjmhl4AIzzSqmla?purpose=fullsize',
    pricePerKm: 12,
    baseFare: 1499,
    seats: 5,
    bags: 3,
    fuelType: 'Petrol / Diesel / CNG',
    ac: true,
    features: ['5-Star Safety Rating', 'Harman Sound System', 'Automatic Climate Control', 'Wireless Charger', 'Cruise Control', 'Spacious Boot'],
    popular: true,
    description: 'A feature-rich SUV offering outstanding safety, modern styling, and a comfortable ride. Suitable for family travel, airport pickups, and long-distance journeys.',
    rating: 4.8
  },
  {
    id: 'v-suv-thar',
    name: 'Mahindra Thar',
    category: 'SUV',
    image: 'https://images.openai.com/static-rsc-4/f2krlmU0gWrmKQ1FEdO782xgVUgu3AFGwRBSKI7Yox-fPDrL92rNbwG5ifvzYXZFulOXwvHhmFBaxGaMPcHtoaPqLHN4vGCZuxE5U2FFKPnHZHcFbN8JHtc9r6Sq0vEjBHbuWcRDs5QqkdPXKvQZ2Q4GyyGLcjaDf710Db0427dpM5A1tCRvCFnN3sQ8R6jF?purpose=fullsize',
    pricePerKm: 16,
    baseFare: 1999,
    seats: 4,
    bags: 2,
    fuelType: 'Diesel 4x4 / Petrol',
    ac: true,
    features: ['4x4 Capability', 'Removable Roof', 'Cruise Control', 'Touchscreen Infotainment', 'Adventure Ready', 'Premium Cabin'],
    popular: true,
    description: 'The iconic off-road SUV built for adventure and rugged terrain. Perfect for mountain trips, desert safaris, wildlife tours, and premium outstation journeys.',
    rating: 4.9
  },
  {
    id: 'v-suv-gurkha',
    name: 'Force Gurkha',
    category: 'SUV',
    image: 'https://images.openai.com/static-rsc-4/vJgLRYOI1SQR2i1tOhVw7BKta2lnYFnOzyuciyVVk9CsNnpkApVL_vR99eqg7x-nx40AHM1TCpE526_Ct1eErAxreEN2dVsPJQ603nAAGeWMA4wuoVzPtGVvjUT0N9Cm0VIkhhg6FjHlG69Z4Sz0BqwN800kEbvmCiOGrMp0DDLy5XKVozZD8s0G-r-Y0PtM?purpose=fullsize',
    pricePerKm: 16,
    baseFare: 1999,
    seats: 4,
    bags: 3,
    fuelType: 'Diesel 4x4',
    ac: true,
    features: ['Factory Snorkel', 'Differential Locks', '4x4 Drive', 'High Ground Clearance', 'Rugged Chassis', 'Adventure Ready'],
    popular: false,
    description: 'A rugged off-road SUV designed for extreme terrain with exceptional water-wading capability and factory-fitted off-road equipment.',
    rating: 4.7
  },
  {
    id: 'v-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Innova Crysta',
    image: 'https://images.openai.com/static-rsc-4/D2rsRDCbOx7ST4EvEtcraTMJfIlgzTcio4HYbiRY1vhizsECggVchlZjG6_8vTfyfDkRdPgn4VAhOoxPvo3VcvRIrmexyB39Rb3VKKRwtJNvKTcJqmEKPFdgOU6to2Ex3nrGevAWSXst9r6IZNSVLHkKt7RMXygxdNM6hi-vGcPJUDc3pPNkY4If2vQ1ZSVJ?purpose=fullsize',
    pricePerKm: 20,
    baseFare: 2200,
    seats: 7,
    bags: 4,
    fuelType: 'Diesel',
    ac: true,
    features: ['Captain Seats', '5-Star Safety Features', 'Rear AC Vents', 'Large Luggage Space', 'Smooth Highway Ride', 'Premium Comfort'],
    popular: true,
    description: 'India\'s most trusted premium MPV, offering unmatched comfort, reliability, and spacious seating for families, corporate travel, airport transfers, and long-distance tours.',
    rating: 5.0
  },
  {
    id: 'v-lux-e-class',
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/RIAeOLwZEURiIi1zpES6UdC7QMhvx-7-uuCOfzMQnvaGrZyXd5SQN-tnC6K7j9ImHF05vOOjjoMy92DMsqTDDTIjHRSiXm4MFMBXMbgp80_2c6sZ7UrxQvqRlrXrK91GfrgDPhTutqypHFryuLACP9V2Z9BZTvdM2ouNFbshvXUyvsu4LNhOrooY6nb17NVK?purpose=fullsize',
    pricePerKm: 45,
    baseFare: 5500,
    seats: 4,
    bags: 3,
    fuelType: 'Diesel',
    ac: true,
    features: ['Chauffeur Package', 'VIP Rear Lounge Seating', 'Burmester Sound System', 'Ambient Lighting', 'Panoramic Sunroof', 'Wireless Charging'],
    popular: true,
    description: 'Experience first-class chauffeur-driven luxury with the Mercedes-Benz E-Class. Renowned for its executive comfort, refined ride quality, and premium cabin, it\'s perfect for VIP airport transfers, weddings, business meetings, and luxury outstation travel.',
    rating: 5.0
  },
  {
    id: 'v-lux-5-series',
    name: 'BMW 5 Series LWB',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/grdn0Img9b5bk10I2hVxKWpNdfw2sTQbP1N45uidGGjD5AsyrRxPA6ArHLRBKsgeguzLIEGxdKk9DFo5lcxc52D-twlhIBGqOqXL989CkYZe7xCYSsc2cgoz6Mcq6EujvhSsDn9mIefiAfKds-Fxs1j6ulggEFtqZbF7eeFr7ZOIiXUNJYNu-6JOXDcl3O1e?purpose=fullsize',
    pricePerKm: 45,
    baseFare: 5500,
    seats: 4,
    bags: 3,
    fuelType: 'Petrol',
    ac: true,
    features: ['Extended Wheelbase', 'Executive Rear Seats', 'Harman Kardon Audio', 'Adaptive LED Headlamps', 'Gesture Control', 'Premium Leather Interior'],
    popular: true,
    description: 'A premium executive sedan with an extended wheelbase for exceptional rear-seat comfort. Ideal for corporate executives, VIP guests, luxury city rides, and premium intercity travel.',
    rating: 4.9
  },
  {
    id: 'v-lux-es',
    name: 'Lexus ES 300h',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/VuFMri6ftuRPokfeKPZEZ2vDd7hOWTbL69EMhRCyUWg3SZOhKpYXEIl9zayEbN_FPDM1jgIXQgJwUOWyC4qS2EY_9Z2xjK2Z4nUwtinaH-q5KmqPLDpLe9-JMqNwn3Od7WSHvoORBG4CsELajUMAU2oy1PHzP8k5x-PIC9ZeCM73Ogj2lkcGu2V6vhg_5Me5?purpose=fullsize',
    pricePerKm: 40,
    baseFare: 5000,
    seats: 4,
    bags: 3,
    fuelType: 'Hybrid',
    ac: true,
    features: ['Self-Charging Hybrid', 'Mark Levinson Premium Audio', 'Ventilated Leather Seats', 'Silent Luxury Cabin', 'Lexus Safety System+', 'Wireless Apple CarPlay'],
    popular: false,
    description: 'A refined luxury hybrid sedan offering exceptional comfort, whisper-quiet performance, and outstanding fuel efficiency. Ideal for airport transfers, executive travel, and premium long-distance journeys.',
    rating: 4.9
  },
  {
    id: 'v-lux-range-rover',
    name: 'Range Rover',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 60,
    baseFare: 7500,
    seats: 5,
    bags: 4,
    fuelType: 'Petrol / Hybrid',
    ac: true,
    features: ['Peerless Cabin', 'Legendary Off-Road', 'Air Suspension', 'Chauffeur Ready'],
    popular: true,
    description: 'Best for ultimate luxury and go-anywhere capability. Offers a peerless, whisper-quiet cabin, iconic design, and legendary off-road engineering.',
    rating: 5.0
  },
  {
    id: 'v-lux-mercedes-gls',
    name: 'Mercedes-Benz GLS',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 55,
    baseFare: 6500,
    seats: 7,
    bags: 5,
    fuelType: 'Diesel',
    ac: true,
    features: ['S-Class of SUVs', '3-Row Seating', 'Air Suspension', 'Tech-Forward Cabin'],
    popular: true,
    description: 'Best for premium large family hauling. Often called the "S-Class of SUVs," featuring an incredibly spacious, tech-forward 3-row cabin.',
    rating: 4.9
  },
  {
    id: 'v-lux-bmw-x5',
    name: 'BMW X5',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 50,
    baseFare: 6000,
    seats: 5,
    bags: 4,
    fuelType: 'Petrol',
    ac: true,
    features: ['Sharp Handling', 'Driver Tech', 'Powerful Engine', 'Sporty SUV'],
    popular: false,
    description: 'Best for drivers who love to be behind the wheel. Sets the segment benchmark for sharp, car-like handling and powerful engines.',
    rating: 4.9
  },
  {
    id: 'v-tempo-standard',
    name: 'Standard AC Tempo Traveller',
    category: 'Tempo Traveller',
    image: 'https://images.openai.com/static-rsc-4/-rRasFaYHny73hoWU1wteoTQ5fFoHAusMsGDFlKh6OHpGsO8xDmSIvo4q3gz0MDONQXM-4A9EP_VNHHE28W0lycfZJLQDtnSHPIXoO0W5aYYGpETHsXXWxoBFTN-MiP6ykpnCqYCdnYUbvRMfRwmhtopiqKFsth1CEThbvTyBqJK_3Yvmr4mVmGygwW_IIUL?purpose=fullsize',
    pricePerKm: 30,
    baseFare: 3000,
    seats: 12,
    bags: 8,
    fuelType: 'Diesel',
    ac: true,
    features: ['2×1 Push-back Seats', 'Dual AC Cooling', 'Large Boot Space', 'Music System', 'Mobile Charging', 'Experienced Driver'],
    popular: true,
    description: 'Reliable and spacious 12-seater ideal for family trips, weddings, corporate tours, airport transfers, and outstation travel. Comfortable seating with ample luggage space.',
    rating: 4.6
  },
  {
    id: 'v-tempo-maharaja',
    name: 'Maharaja Edition Traveller',
    category: 'Tempo Traveller',
    image: 'https://images.openai.com/static-rsc-4/74PE6GcfRYIsZq87763OB77M1DZw8gSR1slTcN1bV3P7bl09H-imbOigKy99qOz9BPTsM3YRam9ga37rNTUwM6CDL7S2-GK4tDwHHZ8yFj6GDX4qdvwaF1ha-8Z5MrNiZ90-8wKzwC4Ztgf50iF8eX848VWAPQoUstCJIBl7pZjmmOhicgoFns6GXHbK1cEe?purpose=fullsize',
    pricePerKm: 28,
    baseFare: 4000,
    seats: 12,
    bags: 8,
    fuelType: 'Diesel',
    ac: true,
    features: ['1×1 Captain Seats', 'Plush Leather Seats', 'Individual Charging Ports', 'LED Ambient Lighting', 'LCD Entertainment Screen', 'Premium Sound System'],
    popular: true,
    description: 'Premium luxury traveller with captain seats, extra legroom, ambient lighting, and executive interiors. Perfect for VIP guests, business travel, and luxury tours.',
    rating: 4.8
  },
  {
    id: 'v-tempo-urbania',
    name: 'Force Urbania',
    category: 'Tempo Traveller',
    image: 'https://images.openai.com/static-rsc-4/0IFHdzcwXSotiUal2EN2dQ3IAToC0H2TzmIGR6x9T_wH4ra6BMGj-_X2dkapPHH8ugQW1ARg7AmEzL6YE-GOQ0dytF68vHFnqecVhKXJ8gItax-AQ_VixSnMSTU4JvLk_IJzCEk-QYxhDl5Xx_oX3jnKa9qhmoQ8LtCQyDpx84dqmcH098CysuW-bVG-7Y1B?purpose=fullsize',
    pricePerKm: 35,
    baseFare: 5000,
    seats: 17,
    bags: 10,
    fuelType: 'Diesel',
    ac: true,
    features: ['Premium European Design', 'Individual AC Vents', 'Reclining Comfortable Seats', 'ABS & Airbags', 'Large Luggage Space', 'USB Charging Ports'],
    popular: false,
    description: 'The latest premium Force Urbania offers exceptional comfort, high safety standards, and a smooth ride for corporate groups, destination weddings, and long-distance journeys.',
    rating: 5.0
  },
  {
    id: 'v-ev-tigor',
    name: 'Tata Tigor EV',
    category: 'Electric Taxi',
    image: 'https://images.openai.com/static-rsc-4/uV4Icr-26br3syul6Ax4uPUOlw4fDR9n1ANhwyEyVUQf9-RNH0grS_rQlAsShYUbT56E91XimKoxfrLfP4Zhio7xWHeoRxc1-Jp-ubvMeq9yCffIGtDR_brk3YLCkYtjJCd4rAG_3pXY7IfZuHH1hTvKHUKyEz5foHXUaJjqBonrrUAVy9YIzAe-Zj4y7iDZ?purpose=fullsize',
    pricePerKm: 12,
    baseFare: 1100,
    seats: 4,
    bags: 2,
    fuelType: 'EV',
    ac: true,
    features: ['Silent Electric Drive', 'Zero Emissions', 'Fast Charging Support', 'Comfortable Cabin', 'Low Running Cost', 'Airport Friendly'],
    popular: true,
    description: 'An affordable and eco-friendly electric sedan, perfect for city rides, airport transfers, and short outstation journeys. Offers a smooth, silent drive with zero tailpipe emissions.',
    rating: 4.8
  },
  {
    id: 'v-ev-byd-e6',
    name: 'BYD e6',
    category: 'Electric Taxi',
    image: 'https://images.openai.com/static-rsc-4/qjMXdCHkrAKq7lzrZs9JLbzqta7bUXvJraD9EMpY6XmHVNduMbRKzjjSDugrjOy20PVHUvbX9Ivukw2NYegfoGJqkl789Phg8AcadlR-vtiyFiG0j4PvPcGg2Wi-zDL8XTqm7dLJrb_7wN5ifW4rcn5ysFsmhiibBWw4p7qrwh_uAmkuFgQaC5mPKinHr67s?purpose=fullsize',
    pricePerKm: 15,
    baseFare: 1500,
    seats: 5,
    bags: 3,
    fuelType: 'EV',
    ac: true,
    features: ['500+ km Driving Range', 'Spacious Rear Legroom', 'Silent Cabin', 'Premium Comfort', 'Fast Charging', 'Business Class Experience'],
    popular: true,
    description: 'A premium long-range electric MPV designed for business travel, airport transfers, and executive rides. Known for its spacious rear cabin and exceptional driving range.',
    rating: 4.9
  },
  {
    id: 'v-ev-vinfast',
    name: 'VinFast Limo Green',
    category: 'Electric Taxi',
    image: 'https://images.openai.com/static-rsc-4/bnzTdqKqZWjtB-7qJPBsNqxBu9fYcRb9ZxT1DnL6MjZf1cHT26uiXnppV9CwaDW9os-AY1gAF-VfvUCbxa_ochdwwJJTagB59DqxPcfs5jmvTg7kTI0SWAhZHdWiqhHap2Ec1TPcSgVEh6Fzmg63pUZ8OSIU_ZRimoYCwnNK8VG8vb1HVMXOb_BCRcoiKoCj?purpose=fullsize',
    pricePerKm: 18,
    baseFare: 1800,
    seats: 7,
    bags: 4,
    fuelType: 'EV',
    ac: true,
    features: ['7-Seater Premium Cabin', 'Zero Emissions', 'Luxury Interior', 'Individual AC Vents', 'Large Luggage Capacity', 'Smooth & Quiet Ride'],
    popular: false,
    description: 'A premium electric 7-seater offering generous cabin space, luxury comfort, and zero-emission travel. Ideal for family vacations, corporate transfers, and airport pickups.',
    rating: 5.0
  }
];

export const SERVICES: Service[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'On-time airport pickup and drop with professional chauffeurs, real-time flight tracking, and 24x7 availability across major airports.',
    iconName: 'Plane',
    image: 'https://images.openai.com/static-rsc-4/nnPaSEHUIPZ_GfuIJtB1M4ZJbU3CTRzX_sthz6Q2x4EzuvtiIQreZbDjOZLXf1sepTYRw5pRk0_uXl_kKbFlGLqACHojMudkMio3c-kErn7WOB9M50FennzUwKbF8MKHNwnN-chieeiUodXcIgSqqjVl17ZN4uzadB01kgnnekLf_BOyOTkgeAdcCIBZTnco?purpose=fullsize',
    badge: '⭐ Most Booked',
    buttonText: 'Book Airport Transfer'
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    description: 'Comfortable outstation cabs connecting 120+ cities with experienced drivers, transparent fares, and safe highway travel.',
    iconName: 'MapPin',
    image: 'https://images.openai.com/static-rsc-4/-yu7IE62d91r6W_joE5yJZQsAJ710Yiy-_crNJGGCtfe6_OttzoSXG6z3IiotfRUx7EQFz-20FC3YJR8RnS0_SP-DBv9wiFDjm_kDjS-SExYxuSdN65SHXzbQWSNMEny7uQ8Rdb0_WpZYveknM_mN2txpecYPMoAgSmx--AOjjPEpWKruxa9k7F120sagCQ4?purpose=fullsize',
    badge: '🚖 Best Seller',
    buttonText: 'Book Outstation Taxi'
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi',
    description: 'Pay only for your one-way journey. No return fare charges, instant confirmation, and affordable intercity rides.',
    iconName: 'ArrowRight',
    image: 'https://images.openai.com/static-rsc-4/KMDE47BKrKRlndUtH49L-URa8wT3G-NLfPyGDia6J8Av0O35UxnPDsRbM9yAY5k5SEh-X8nPl2tsD_3UUYo1PT5Y8LY4pptNW5V5Ef3aY39VVslfbSX6VaBIdHowIBWQGn-5tvIDEZ59S9Zca1NYMN7TRdbTVKWgi9vBCXd-ajxL3-uKMDVBGc_8RRL5rbwV?purpose=fullsize',
    badge: '🔥 Best Value',
    buttonText: 'Book One Way Taxi'
  },
  {
    id: 'round-trip',
    title: 'Round Trip Taxi',
    description: 'Flexible round-trip bookings with experienced drivers, ideal for holidays, business travel, and weekend getaways.',
    iconName: 'Repeat',
    image: 'https://images.openai.com/static-rsc-4/gjIGftGee7EVGCoQaTCAwMo9pKIa0AK-EU-vZItXhFDdQ_RJONVVFAJwGp9JjgiDibBUHIDqAPIArsQ7_ZkrGGr-1TE_mnyRRmJv6YRxoP-KwVnSvg59mEo5QoI_kW4mt1nGGyKXghJCEnvB74mIwCmI1oJxXkGbUBghO6GwK6xJvw7XhEoMCPLCfV8OC_no?purpose=fullsize',
    buttonText: 'Book Round Trip'
  },
  {
    id: 'hourly-rental',
    title: 'Hourly Local Rental',
    description: 'Book a cab for 4, 8, or 12 hours for shopping, meetings, sightseeing, or multiple city stops.',
    iconName: 'Clock',
    image: 'https://images.openai.com/static-rsc-4/Hw0qWd0DBgLrkqJxodN9jKlD-vq8Gt5mC1Vuj7gyMwndIRMmykouoEji3AyfzEoHQYWn1ae2ErfHHpB78JXQ1oKipNHLUxE_2LJ1Xu2BYVeuAfeL1CWzSYJaOMO_QLq1-T6NQbaIWpj4PQOlOwmH76gIe6IE_Y2LeEmxOoGdpo4fjYJ6lu56T5F0yXvPQlfF?purpose=fullsize',
    buttonText: 'Book Local Rental'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive chauffeur services for corporate travel, airport transfers, meetings, conferences, and business events.',
    iconName: 'Briefcase',
    image: 'https://images.openai.com/static-rsc-4/DXd_Fn5vJC5-YDDML-KapRPpVbcMq-mbh-wIRzyxrYNHd9LnN6l3iTIIlTF8loao5IXmnGUjPgInbrZf0_DzdA1Ri1xQV5DC8fAbxDDzG-0m5BcIiKFHnIsyK0vVOAMo_E_KDSdtzyFcBssRPtmano-UuJ0kTgmGH_FhKfKi5MYkl5ZM8vBnnpqgYGRegtZa?purpose=fullsize',
    buttonText: 'Book Corporate Travel'
  },
  {
    id: 'wedding-car',
    title: 'Wedding Car Rental',
    description: 'Luxury wedding cars including Mercedes-Benz, BMW, Audi, and Jaguar with elegant floral decorations and professional chauffeurs.',
    iconName: 'Sparkles',
    image: 'https://images.openai.com/static-rsc-4/I9hNm1tVXhy4OmIMEBQzRyKEbPuzsGV0vvx_DT2BjqQ8mObMP_cMQbLzNY-81nEzf9lzhdrhifPITO1vb3MA1-d549FRqB1CtTWtqgvJRDfEENyN2EMsg_PogY3n4se23RDfEXjWcd36MatSQ_ewP6sSPFEIbEEt3toAyQSCt4i-YboVMcejuxVSPpsO7rT0?purpose=fullsize',
    badge: '👑 Premium',
    buttonText: 'Book Wedding Car'
  },
  {
    id: 'luxury-cars',
    title: 'VIP Luxury Fleet',
    description: 'Premium chauffeur-driven luxury vehicles for VIP guests, celebrities, executives, weddings, and special occasions.',
    iconName: 'Crown',
    image: 'https://images.openai.com/static-rsc-4/eO8M7fF41RRCZByK88PvkLuEtCXFS9nt4KSDBQ1lHxvRdbpmkCo6ZI84DalPhZNG8VeOfJIMH9Xw67adE97ydcwhbs0ubgIDccznzMjnlJyyzDraPk-y78DyLVZV_TD9whgj3mxQzCEWnUKfmI2p-t0A86xTOv0r7rcING_fVaXYLD2u1mH2fQTLpH9E9U1P?purpose=fullsize',
    buttonText: 'Book Luxury Fleet'
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
    comment: 'Used LookMyHolidays for midnight IGI Airport transfer to Noida. The driver was waiting at arrivals with a name sign, assisted with heavy luggage, and the booking price was 30% cheaper than airport counters.',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    tripRoute: 'Delhi IGI Airport → Noida'
  },
  {
    id: 'r-3',
    author: 'Dr. Meenakshi Sundaram',
    location: 'Chennai',
    rating: 5,
    comment: 'Exceptional one-way cab service from Jaipur to Udaipur. Transparent pricing with no hidden toll surprise. Will definitely use LookMyHolidays for all future India trips!',
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
    content: 'Traditionally, taxi operators charged return fares even when passengers only needed travel in one direction. With LookMyHolidays’ transparent one-way network, you pay exclusively for the distance covered from pickup to destination...',
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
    question: 'How do I book a taxi with LookMyHolidays?',
    answer: 'You can easily book online using our instant search widget above, select your preferred vehicle (Sedan, SUV, Innova Crysta, etc.), enter passenger details, and confirm. You can also call our 24/7 hotline at +91 95291 55562 or message us on WhatsApp.'
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
    question: 'What is LookMyHolidays cancellation policy?',
    answer: 'We offer FREE cancellation up to 24 hours before your scheduled pickup time with 100% refund. Cancellations made within 24 hours of pickup incur nominal processing fees.'
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
    question: 'How does LookMyHolidays guarantee passenger safety?',
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
