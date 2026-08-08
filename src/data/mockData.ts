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
    popular: false,
    description: 'A reliable and fuel-efficient sedan, ideal for airport transfers, city rides, and outstation travel. Offers excellent comfort, smooth driving, and ample luggage space.',
    rating: 4.8
  },
  {
    id: 'v-sedan-etios',
    name: 'Toyota Etios',
    category: 'Sedan',
    image: 'https://images.openai.com/static-rsc-4/fIgCz3FxF7GYoaX_jR4vOnF0aNc9Sh-5RxbFeRKmv7vZ-giV5ra2QvbtcSWX3Ml4eImjA4cVAw28b_NBeAA6wMo_8kt8Cs2M1_wu4xmt2EpaO9rYdzVpmC4wAOX6x0uD6Tub46b6l5Hg5awuPrK-VewqsA5O48x2pYb42L1ECzlBXqPPZEPJrsTutPA7x450?purpose=fullsize',
    pricePerKm: 11,
    baseFare: 1099,
    seats: 4,
    bags: 2,
    fuelType: 'Petrol',
    ac: true,
    features: ['AC', 'Comfortable', 'Economical'],
    popular: true,
    description: 'Comfortable and reliable sedan for airport transfers, local travel and outstation journeys.',
    rating: 4.9
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
    popular: false,
    description: 'A premium compact sedan with a spacious cabin, refined performance, and smooth ride quality. A great option for long-distance travel and executive bookings.',
    rating: 4.9
  },
  {
    id: 'v-suv-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'SUV/MUV',
    image: 'https://images.openai.com/static-rsc-4/_0aBg-oGqTCSct6FjY0rdAia5JfVPxWisgj4JapOlq49m1KgnuvdCVKXEmelD9BXlI_V-vCcGKaO49uXKNyQQuWkeNj8oFsbGr06vV-TjyQOBQNdtCxPsQ6BDzhur1B5twn60DP6SE8TMVS_jALq24i6adA7vsUZ6RJffgeHElNCAMZprk2wtqgIuLJxS67a?purpose=fullsize',
    pricePerKm: 14,
    baseFare: 1499,
    seats: '6–7',
    bags: 3,
    fuelType: 'Petrol',
    ac: true,
    features: ['Family & airport trips', 'Spacious', 'Comfortable'],
    popular: false,
    description: 'Family & airport trips',
    rating: 4.8
  },
  {
    id: 'v-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'SUV/MUV',
    image: 'https://images.openai.com/static-rsc-4/gIHxGh5De9IfR2_ubgGvmgx3cxAg4RJrwkWTAk-PX_miTBn-cqIvasKPu4lff3zFlX-Iga2z3YFSrug2GpJ1_jz4wRkkupWkDipy-r0T4xMS7uYudvvnSZ5kEDVFmXi2XyQQwjeFVh_n--BUC2bnT5sTWBLvzn04Tw9ZPyiV_gk3VGQWZnhJzXa3WIOWS_f-?purpose=fullsize',
    pricePerKm: 20,
    baseFare: 2200,
    seats: '7–8',
    bags: 4,
    fuelType: 'Diesel',
    ac: true,
    features: ['Premium outstation', 'Comfortable', 'Reliable'],
    popular: false,
    description: 'Premium outstation MPV for maximum comfort and reliability.',
    rating: 4.9
  },
  {
    id: 'v-suv-bolero',
    name: 'Mahindra Bolero Neo',
    category: 'SUV/MUV',
    image: 'https://images.openai.com/static-rsc-4/sd6Yr8HCpKo4AL4UFbgA4mbs8AdZKrVRU7a8rhNcFE3Khvb9z41pD3oPMFl-4rl8asEkkB5evpjwdn5Rh9fh34ggSAYprJz6YJWLJG-BDBeGK65PXz_HvaVwpIy4188CbPcK13qodJRkqde9A1x4Gwxewy2WbhkaLMSej67v9VDkb5ZqFERzrzN-oZk_h8PZ?purpose=fullsize',
    pricePerKm: 15,
    baseFare: 1699,
    seats: 7,
    bags: 3,
    fuelType: 'Diesel',
    ac: true,
    features: ['Rough roads', 'Group travel', 'Sturdy'],
    popular: false,
    description: 'Rough roads & group travel',
    rating: 4.6
  },
  {
    id: 'v-lux-e-class',
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/Bf3M-TC91-f3mCry6fUjya-fMzqu2as7rpStBve2WKe8DDHUo5sl_-dsRRXvMUwSLES6Vr57aZjKcn1V4quonAYRPF4icZejhHnTtUaIPENFwMXjL9BZT0GWgXQe2XIlfyi4NnKDCD-HJ683hFOTnxgoBVgfGz-4Rs7PI9oa5RrIhHU3DXIgVBqreedEC9Wg?purpose=fullsize',
    pricePerKm: 45,
    baseFare: 5500,
    seats: 4,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Chauffeur', 'AC'],
    popular: true,
    description: 'Chauffeur-driven luxury sedan with spacious rear seating, premium interiors and a smooth ride for business and outstation travel.',
    rating: 4.9
  },
  {
    id: 'v-lux-5-series',
    name: 'BMW 5 Series LWB',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/V_s5ZGw7kG-BjS6gUx8F6K9JGUrVbPhreRm-QkSWaD6LbZkMH25e-W20DGZ3IGlvRN0Sd3Fw5m01OcmZS2E0GAn0nk-3dsJd5UeFtjD3cRwNFLIOPwJFYOedHEVR5ShJJlgvVZW5xrZzCIpnSrDzH5xDhOEz7KFu1bUW_FvSEz-71TzbMfVlZOnQFA4oIvSb?purpose=fullsize',
    pricePerKm: 45,
    baseFare: 5500,
    seats: 4,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Chauffeur', 'AC'],
    popular: false,
    description: 'Long-wheelbase executive sedan offering spacious rear-seat comfort for business travel, airport transfers and premium journeys.',
    rating: 4.9
  },
  {
    id: 'v-lux-es',
    name: 'Lexus ES 300h',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/nqNeq0dkibf-KFMupxAiW1dBs6qj8rzZ61SvPlEId_AcZQdJQO4UM7Y1t7O6C8T8qkeTWD9WdiyGDk-PPGnLytcjchG2kyENd5mcKaqN7Xc9OxF8Uf2UxFmhAg0LnOuX_o6XJvfNTbt7PKxe_0bDDCAvEMIxyiKxpTK0RY3mGYdowzedsdtfZvdX2CqOeuwS?purpose=fullsize',
    pricePerKm: 40,
    baseFare: 5000,
    seats: 4,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Chauffeur', 'AC'],
    popular: false,
    description: 'Refined hybrid luxury sedan designed for quiet, comfortable and effortless long-distance travel.',
    rating: 4.8
  },
  {
    id: 'v-lux-superb',
    name: 'Škoda Superb',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/8qJpcF_QNMi18sVyRubUIMxiYE2N7_7FJBgZLtY07LR27_F3RhpIhIweDJTY5CQzCw-f0NG3JQ3r-vcSsUu-ahw30STKARnB7U8Jkdh5Btbs3Y-28nxe5xNm4ybmterow34l3w80kfLPzAUASqEA61CejEiKa2-9MlS_87ktdmNXR4V5Od9Lb4yBxUWo8No_?purpose=fullsize',
    pricePerKm: 35,
    baseFare: 4000,
    seats: 4,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Chauffeur', 'AC'],
    popular: false,
    description: 'Premium executive sedan offering class-leading legroom, advanced features and exceptional comfort for family and business trips.',
    rating: 4.8
  },
  {
    id: 'v-lux-camry',
    name: 'Toyota Camry',
    category: 'Luxury Sedan',
    image: 'https://images.openai.com/static-rsc-4/CS1ue-jdWoD-XUs_klC2LhiTeJWHXlHH65AfvPyme8Szo0X_NxNNa_fyX8Lhq2Ahuhlm3i3JkUCvz5LN5CtU8HwIZOQ5hj_Y8vw6G0MAkggjTQc7twumzWtc4nI0rQ55mOfCswbNuo-2XH4nXwyRG7lgejp-Xd7q6_F3wfkSJJGlW_UNUSG4NBNcAlqzz1AY?purpose=fullsize',
    pricePerKm: 30,
    baseFare: 3500,
    seats: 4,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Chauffeur', 'AC'],
    popular: false,
    description: 'Reliable premium hybrid sedan combining luxury, efficiency, and comfort for seamless airport and executive travel.',
    rating: 4.8
  },
  {
    id: 'v-lux-fortuner',
    name: 'Toyota Fortuner',
    category: 'Luxury SUV',
    image: 'https://images.openai.com/static-rsc-4/ubdSGnawTlSf89-E7Rl_sswu-5g7HKgpXrN_jGxoKhcVro9a6VhMeRaSInAxJ1VI9pO9hpDZSTn78VT1fijyAM1JcXOSZ3KR2DX5_7XV7nB8iJgLHfbLdKt0k67oam62lkbQl9djrBh99FEsDXtIUB5wl8sIo4lfunRynuEdagRCi1bZkny8Fie84Q1Zx5uu?purpose=fullsize',
    pricePerKm: 25,
    baseFare: 3000,
    seats: 7,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Comfortable', 'Chauffeur'],
    popular: true,
    description: 'Best for: Family & premium outstation travel',
    rating: 4.8
  },
  {
    id: 'v-lux-glc',
    name: 'Mercedes-Benz GLC',
    category: 'Luxury SUV',
    image: 'https://images.openai.com/static-rsc-4/L7kq--B0b8sBRlwb6MdweLhI8I4djyLxBZ0P4rsNOZnHTA1aR-JlkSluqy5RyI0aZL4Jq1scxmjooF55oGAPVHa-Jg9fh26gLUw2EMCzpOsFQAs-oV5VAp3GBv0rgMQv2-x4JhX6bP7rcyyCLcBIhcDOvriiyhqMlIEiD5FfRjLv_a0JlFZKqeiupYuuHEGY?purpose=fullsize',
    pricePerKm: 35,
    baseFare: 4000,
    seats: 5,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Comfortable', 'Chauffeur'],
    popular: false,
    description: 'Best for: Executive & VIP travel',
    rating: 4.9
  },
  {
    id: 'v-lux-bmw-x5',
    name: 'BMW X5',
    category: 'Luxury SUV',
    image: 'https://images.openai.com/static-rsc-4/eHdUvomdavOX1nnPbwU8zhPkmrIXZw27LTESpozomwBShcXwpFBUBEgLejsZDJLrBaWNeNirN0nkrWxrhUlIZ1FOS8nUs90rnOJ7Dp2DCDJ-neZOEOBGHkyzkyAXGNq16H5Q0ZxqbQ1og4iK9wq018id6DKPhN7q60PtcLLIp7brPkfA70AI9CO4xxIK6pUm?purpose=fullsize',
    pricePerKm: 40,
    baseFare: 4500,
    seats: 5,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Comfortable', 'Chauffeur'],
    popular: false,
    description: 'Best for: Executive & premium journeys',
    rating: 4.9
  },
  {
    id: 'v-lux-audi-q5',
    name: 'Audi Q5',
    category: 'Luxury SUV',
    image: 'https://images.openai.com/static-rsc-4/5mL_eGy2837m4AfR7P5Mw8y7B67KytEMFqPlEZ6_kyTURu0S4E7jjCK7UmuGr96Ax0TFLcTWepyFr_1Vtpo5Qf2PF0MF5ZThYbq1CUKzYnltm-J6DwnUho8bSTOlqQAR0EHVmhFkfc3O5VNXGiEXwxEvrBCMHlgTmEB5xQLhTVeWoB3bA44Uq6irw9Y8ADV4?purpose=fullsize',
    pricePerKm: 35,
    baseFare: 4000,
    seats: 5,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Comfortable', 'Chauffeur'],
    popular: false,
    description: 'Best for: Business & family travel',
    rating: 4.8
  },
  {
    id: 'v-lux-mg-gloster',
    name: 'MG Gloster',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    pricePerKm: 30,
    baseFare: 3500,
    seats: 7,
    bags: 3,
    fuelType: 'Automatic',
    ac: true,
    features: ['Premium Interior', 'Comfortable', 'Chauffeur'],
    popular: false,
    description: 'Best for: Spacious family/group travel',
    rating: 4.8
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
    popular: false,
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
    popular: false,
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
  }
];

export const SERVICES: Service[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'On-time airport pickup and drop with professional chauffeurs and real-time flight tracking.',
    iconName: 'Plane',
    image: 'https://images.openai.com/static-rsc-4/2GhFoofxwrCtOvPf0rHaRxFBMuDcWZbvopYTqo6AvnaN-uIQFQbE4mntYGtUqvqnkyZM1LifCmTEqwNdfbHNOOuuvkD0x2yzbsle081r6WvlM7sOLQd_BENkVxrZs_mvsw4Fdqn2MX7jR7G913IBWYGUotIozbgVB1BD0XsmVoC6l1OpIpgfG01-uFjgwizM?purpose=fullsize',
    badge: 'Most Booked',
    buttonText: 'Book Airport Transfer'
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    description: 'Comfortable outstation cabs across 120+ cities with verified drivers and transparent fares.',
    iconName: 'MapPin',
    image: 'https://images.openai.com/static-rsc-4/WPRgArYpV1IKYsWsHEVc1deSEPpweFvfQzcuRx0BBEqMvXaTvrqDUwc5vPkRyAZcZqGiVE4YJvI4lF_qHATSGZLSSJVVTS4rRhigDYPW43ct34iILoRev03BTEWDT9QNGlPewQ4F5V5bRKmNxAGw9TETyWp63O48Gzhp_sdWaZHlGCvGsS4ATojHdFn61NzS?purpose=fullsize',
    buttonText: 'Book Outstation Taxi'
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi',
    description: 'Pay only for your one-way journey. No return fare charges and instant confirmation.',
    iconName: 'ArrowRight',
    image: 'https://images.openai.com/static-rsc-4/KCAP1dWQau6MqCaCvMYlApiJ-CWUtTWr8fh4LGs3XrQs5QF4ZdkmCQ6KuUb_UVRHmr50xqciumF6S8lZZq1SjgDmZrPLhp03jnzi3OOsCmJ6kML7Gx1JahzktNNTF0-YEoM_xsaSsv6jxxsv9jawXLJhy0-C_G4goR9jCNbsnfieKL40xdUbUaS5hCXPNt1L?purpose=fullsize',
    badge: 'Best Value',
    buttonText: 'Book One Way Taxi'
  },
  {
    id: 'round-trip',
    title: 'Round Trip Taxi',
    description: 'Flexible round-trip bookings with experienced drivers, ideal for holidays and business travel.',
    iconName: 'Repeat',
    image: 'https://images.openai.com/static-rsc-4/SlTvJzDhJbrpDFgcjP9yYnYUZU7yg_oUvQnKrYyf97Z3HAxv042LlRtrEhEu58zcJQj-OmIL2yciUWMdZaUplvCEDyar4XvzLLo5XhLBCO7_m1zNWx_ABEhDnUvBUVwTBHoqjiZjWvSRyHPQrFJz6wfeaUH-25306E-3kp3J1M0GWdijrduL-K--Fu6R4p6I?purpose=fullsize',
    buttonText: 'Book Round Trip'
  },
  {
    id: 'hourly-rental',
    title: 'Hourly Local Rental',
    description: 'Book a cab for 4, 8, or 12 hours for shopping, meetings, sightseeing, or multiple stops.',
    iconName: 'Clock',
    image: 'https://images.openai.com/static-rsc-4/93R-yFMso5Q67s_EmELBYgoakc39FIAI4b7VxKD480d2DkC6CSj9YhhbwAYVM5Qo-pX1C4DHDEzsWBbj_nNHxWuD9dFcfOxSvTGjx3pZcFyDtY10GoHIMi0-xmN2qKXOqgzLKJ4_GTx_Mus7K-ffe5Vhp3iy0gS3aSpPY7-wVMQXUtEvx0BdHA2lYfwti9sE?purpose=fullsize',
    buttonText: 'Book Hourly Rental'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive chauffeur services for corporate travel, airport transfers, and business events.',
    iconName: 'Briefcase',
    image: 'https://images.openai.com/static-rsc-4/JZbe-xuT1gpblL2uuY-bI42zGZTkXpnc6D5sLKxaRJfpNMAY2kRgEAUMuPv33vhE7HuqKMtDS5gjwIinnX-qa2BIrHz4SXKlfAmskNCI-5IZ097BqgYSljfXqfs_dXaRJV1bvh9ihF4qoMFh-UqGoiArQKIw0E3Lwqj_XSvVXJUszZUfFVpxw_yWWUAU5pAy?purpose=fullsize',
    buttonText: 'Book Corporate Travel'
  },
  {
    id: 'wedding-car',
    title: 'Wedding Car Rental',
    description: 'Luxury wedding cars with elegant floral decorations and professional chauffeurs.',
    iconName: 'Sparkles',
    image: 'https://images.openai.com/static-rsc-4/I9hNm1tVXhy4OmIMEBQzRyKEbPuzsGV0vvx_DT2BjqQ8mObMP_cMQbLzNY-81nEzf9lzhdrhifPITO1vb3MA1-d549FRqB1CtTWtqgvJRDfEENyN2EMsg_PogY3n4se23RDfEXjWcd36MatSQ_ewP6sSPFEIbEEt3toAyQSCt4i-YboVMcejuxVSPpsO7rT0?purpose=fullsize',
    buttonText: 'Book Wedding Car'
  },
  {
    id: 'luxury-cars',
    title: 'VIP Luxury Fleet',
    description: 'Premium chauffeur-driven luxury vehicles for VIP guests, celebrities, and special occasions.',
    iconName: 'Crown',
    image: 'https://images.openai.com/static-rsc-4/eO8M7fF41RRCZByK88PvkLuEtCXFS9nt4KSDBQ1lHxvRdbpmkCo6ZI84DalPhZNG8VeOfJIMH9Xw67adE97ydcwhbs0ubgIDccznzMjnlJyyzDraPk-y78DyLVZV_TD9whgj3mxQzCEWnUKfmI2p-t0A86xTOv0r7rcING_fVaXYLD2u1mH2fQTLpH9E9U1P?purpose=fullsize',
    badge: 'Premium',
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
    author: 'Yashika Mittal',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Best tickets and hotel deals',
    date: '2 hours ago',
    avatar: 'https://ui-avatars.com/api/?name=Yashika+Mittal&background=E53935&color=fff',
    tripRoute: 'Flight & Hotel Booking'
  },
  {
    id: 'r-2',
    author: 'Rahul Bansal',
    location: 'Verified Customer',
    rating: 5,
    comment: '⭐⭐⭐⭐⭐Had a wonderful experience with the look my holidays travel team! From planning to execution, everything was handled very professionally and smoothly. They understood our family’s requirements, suggested great options, and made sure the entire trip was comfortable and hassle-free. The hotel arrangements, transfers, cruise, and overall itinerary were very well managed.',
    date: '5 days ago',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Bansal&background=E53935&color=fff',
    tripRoute: 'Family Holiday Package'
  },
  {
    id: 'r-3',
    author: 'Manjusha C',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Thank you for arranging the vehicles and coordinating everything so smoothly throughout the Jaipur BNI INC trip. The service was well-organized, punctual, professionally managed and hassle-free, which made our travel experience comfortable and enjoyable. We truly appreciate your support and responsiveness. Thank you for making our journey comfortable and memorable!',
    date: '2 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Manjusha+C&background=E53935&color=fff',
    tripRoute: 'Corporate Event Transport'
  },
  {
    id: 'r-4',
    author: 'Geeta Sharma',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Excellent services! Prompt services!',
    date: '2 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Geeta+Sharma&background=E53935&color=fff',
    tripRoute: 'Local Travel'
  },
  {
    id: 'r-5',
    author: 'Vikram Singh',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Booked an Innova for a family trip to Agra. The driver was very professional and the car was spotless. Highly recommended!',
    date: '3 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=E53935&color=fff',
    tripRoute: 'Outstation Travel'
  },
  {
    id: 'r-6',
    author: 'Priya Desai',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Seamless airport transfer experience. Driver arrived 10 minutes early and helped with all our heavy luggage. Will definitely use again.',
    date: '1 month ago',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Desai&background=E53935&color=fff',
    tripRoute: 'Airport Transfer'
  },
  {
    id: 'r-7',
    author: 'Amitabh Kumar',
    location: 'Verified Customer',
    rating: 5,
    comment: 'LookMyHolidays made our corporate offsite logistics incredibly smooth. 5 buses coordinated perfectly without a single hiccup.',
    date: '3 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Amitabh+Kumar&background=E53935&color=fff',
    tripRoute: 'Corporate Event Transport'
  },
  {
    id: 'r-8',
    author: 'Neha Verma',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Very polite driver and excellent driving skills. I felt completely safe traveling late at night. The customer support is also very responsive.',
    date: '2 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Verma&background=E53935&color=fff',
    tripRoute: 'Local Travel'
  },
  {
    id: 'r-9',
    author: 'Suresh Patel',
    location: 'Verified Customer',
    rating: 5,
    comment: 'Great value for money. The transparency in pricing with no hidden charges is exactly what you need when booking outstation cabs.',
    date: '4 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Suresh+Patel&background=E53935&color=fff',
    tripRoute: 'Outstation Travel'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Delhi to Jaipur Road Trip Guide: Best Stops, Food Joints & Highways',
    excerpt: 'Discover the scenic NH48 expressway route, iconic dhabas in Behror, and secret historical stops for a memorable 5-hour drive.',
    content: 'Discover the scenic NH48 expressway route, iconic dhabas in Behror, and secret historical stops for a memorable 5-hour drive.',
    date: 'August 1, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    category: 'TRAVEL GUIDE',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-2',
    title: 'One-Way Taxi vs Round Trip: How to Save Up to 40% on Outstation Travel',
    excerpt: 'Learn when to choose one-way cabs and how flat per-kilometer rates eliminate unfair return charges on intercity travel.',
    content: 'Learn when to choose one-way cabs and how flat per-kilometer rates eliminate unfair return charges on intercity travel.',
    date: 'July 24, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    category: 'MONEY SAVING TIPS',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-3',
    title: 'Top 7 Hill Station Destinations from Delhi for a Refreshing Weekend',
    excerpt: 'Escape the city heat with seamless taxi rides to Shimla, Mussoorie, Nainital, Kasol, and Lansdowne.',
    content: 'Escape the city heat with seamless taxi rides to Shimla, Mussoorie, Nainital, Kasol, and Lansdowne.',
    date: 'July 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    category: 'DESTINATIONS',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-4',
    title: 'Delhi to Agra Road Trip: Taj Mahal, Food Stops & Best Routes',
    excerpt: 'Plan the perfect Delhi to Agra drive with route options, highway tips, sightseeing stops, and local food recommendations.',
    content: 'Plan the perfect Delhi to Agra drive with route options, highway tips, sightseeing stops, and local food recommendations.',
    date: 'July 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80&w=800',
    category: 'ROAD TRIP',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-5',
    title: 'Jaipur to Udaipur Road Trip Guide: Routes, Stops & Travel Tips',
    excerpt: 'Explore Rajasthan\'s scenic highways, heritage towns, lakeside destinations, and the best stops between Jaipur and Udaipur.',
    content: 'Explore Rajasthan\'s scenic highways, heritage towns, lakeside destinations, and the best stops between Jaipur and Udaipur.',
    date: 'July 7, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    category: 'TRAVEL GUIDE',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-6',
    title: 'Best Places to Visit Near Jaipur for a Weekend Road Trip',
    excerpt: 'Discover beautiful weekend destinations around Jaipur including Pushkar, Ajmer, Ranthambore, Alwar, and Sariska.',
    content: 'Discover beautiful weekend destinations around Jaipur including Pushkar, Ajmer, Ranthambore, Alwar, and Sariska.',
    date: 'June 30, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800',
    category: 'DESTINATIONS',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-7',
    title: 'How to Choose the Right Taxi for Long-Distance Travel',
    excerpt: 'A practical guide to choosing the right vehicle, understanding luggage capacity, passenger comfort, and long-distance taxi pricing.',
    content: 'A practical guide to choosing the right vehicle, understanding luggage capacity, passenger comfort, and long-distance taxi pricing.',
    date: 'June 24, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    category: 'TRAVEL TIPS',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-8',
    title: 'Delhi to Manali Road Trip: Complete Route & Mountain Travel Guide',
    excerpt: 'Everything you need to know about planning a comfortable Delhi to Manali road trip, including routes, stops, weather, and mountain driving tips.',
    content: 'Everything you need to know about planning a comfortable Delhi to Manali road trip, including routes, stops, weather, and mountain driving tips.',
    date: 'June 18, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    category: 'MOUNTAIN TRAVEL',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-9',
    title: 'Jaipur to Jaisalmer Road Trip: Rajasthan\'s Ultimate Highway Journey',
    excerpt: 'Experience Rajasthan\'s desert highways, historic cities, traditional food, and unforgettable stops on the journey to Jaisalmer.',
    content: 'Experience Rajasthan\'s desert highways, historic cities, traditional food, and unforgettable stops on the journey to Jaisalmer.',
    date: 'June 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    category: 'ROAD TRIP',
    author: 'LookMyHolidays Team'
  },
  {
    id: 'b-10',
    title: 'Airport Taxi Guide: How to Book a Reliable Airport Transfer',
    excerpt: 'Learn how to choose reliable airport transfers, plan pickup times, select the right vehicle, and avoid common booking problems.',
    content: 'Learn how to choose reliable airport transfers, plan pickup times, select the right vehicle, and avoid common booking problems.',
    date: 'June 4, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=800',
    category: 'TRAVEL TIPS',
    author: 'LookMyHolidays Team'
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
