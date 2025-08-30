import chevySparkImg from '@/assets/chevy-spark.jpg';
import hyundaiAccentImg from '@/assets/hyundai-accent.jpg';
import hyundaiElantraImg from '@/assets/hyundai-elantra.jpg';
import nissanAltimaImg from '@/assets/nissan-altima.jpg';
import hyundaiTucsonImg from '@/assets/hyundai-tucson.jpg';

export interface Car {
  id: string;
  name: string;
  category: string;
  image: string;
  seats: number;
  transmission: string;
  mpg: string;
  ageRequirement: string;
  price: number;
  description: string;
  fullDescription: string;
  relatedCars: string[];
  faqs: { question: string; answer: string; }[];
}

export const cars: Car[] = [
  {
    id: 'economy-spark',
    name: 'Chevy Spark or Similar',
    category: 'Economy Car',
    image: chevySparkImg,
    seats: 4,
    transmission: 'Automatic',
    mpg: '27-35',
    ageRequirement: '21+ years',
    price: 25,
    description: 'Zip through the city with our compact and fuel-efficient Chevy Spark.',
    fullDescription: 'Zip through the city with our Chevy Spark — a compact and fuel-efficient car perfect for urban adventures. With nimble handling, modern features, and surprising interior space, this small but mighty hatchback makes every drive easy and fun. Whether you need a quick commute or a budget-friendly rental, the Spark has you covered.',
    relatedCars: ['compact-accent', 'midsize-elantra'],
    faqs: [
      {
        question: 'What is an economy car?',
        answer: 'A compact, fuel-efficient vehicle perfect for city driving and budget-conscious travelers.'
      },
      {
        question: 'Easy to drive in busy cities?',
        answer: 'Yes—compact size makes it easy to navigate traffic and find parking spots.'
      },
      {
        question: 'Can I upgrade?',
        answer: 'Yes—upgrade to midsize or SUV based on availability at pickup.'
      },
      {
        question: 'Can I drive outside the city?',
        answer: 'Absolutely allowed; check for any minor restrictions in your rental agreement.'
      },
      {
        question: 'What\'s the fuel efficiency?',
        answer: '30–40 MPG average, making it very economical for longer trips.'
      },
      {
        question: 'What transmission type?',
        answer: 'Automatic transmission only for easy, comfortable driving.'
      }
    ]
  },
  {
    id: 'compact-accent',
    name: 'Hyundai Accent or Similar',
    category: 'Compact Car',
    image: hyundaiAccentImg,
    seats: 5,
    transmission: 'Automatic',
    mpg: '27-35',
    ageRequirement: '21+ years',
    price: 30,
    description: 'Drive with ease and efficiency in our Hyundai Accent — perfect for city and highway.',
    fullDescription: 'Drive with ease and efficiency in our Hyundai Accent — the perfect compact car for both city streets and longer drives. Sleek design, fuel efficiency, and a comfortable interior without compromising space.',
    relatedCars: ['economy-spark', 'midsize-elantra'],
    faqs: [
      {
        question: 'What\'s the difference vs economy?',
        answer: 'More interior space and comfort while maintaining excellent fuel efficiency.'
      },
      {
        question: 'Good for long trips?',
        answer: 'Yes—designed for both city driving and highway comfort.'
      },
      {
        question: 'How many passengers?',
        answer: '5 passengers can travel comfortably.'
      },
      {
        question: 'What\'s the MPG?',
        answer: '27–35 MPG depending on driving conditions.'
      },
      {
        question: 'Age requirement?',
        answer: '21+ years old with valid driver\'s license.'
      },
      {
        question: 'Transmission type?',
        answer: 'Automatic transmission only for smooth driving experience.'
      }
    ]
  },
  {
    id: 'midsize-elantra',
    name: 'Hyundai Elantra or Similar',
    category: 'Midsize Car',
    image: hyundaiElantraImg,
    seats: 5,
    transmission: 'Automatic',
    mpg: '33-43',
    ageRequirement: '21+ years',
    price: 35,
    description: 'Drive in style and efficiency with our sleek Hyundai Elantra sedan.',
    fullDescription: 'Drive in style and efficiency with our Hyundai Elantra — a sleek sedan designed for comfort and fuel savings. Spacious interior, smooth handling, and advanced tech for commutes or getaways.',
    relatedCars: ['compact-accent', 'fullsize-altima'],
    faqs: [
      {
        question: 'What\'s the MPG?',
        answer: '33–43 MPG, excellent for both city and highway driving.'
      },
      {
        question: 'How many passengers?',
        answer: '5 passengers with ample legroom and comfort.'
      },
      {
        question: 'Good for business trips?',
        answer: 'Ideal—modern features and professional appearance.'
      },
      {
        question: 'Suitable for out-of-town trips?',
        answer: 'Great choice for long drives with comfort and efficiency.'
      },
      {
        question: 'Age requirement?',
        answer: '21+ years old with valid driver\'s license.'
      },
      {
        question: 'Transmission type?',
        answer: 'Automatic transmission only for easy operation.'
      }
    ]
  },
  {
    id: 'fullsize-altima',
    name: 'Nissan Altima or Similar',
    category: 'Fullsize Car',
    image: nissanAltimaImg,
    seats: 5,
    transmission: 'Automatic',
    mpg: '28-39',
    ageRequirement: '25+ years',
    price: 45,
    description: 'Enjoy a smooth and efficient ride with our stylish Nissan Altima sedan.',
    fullDescription: 'Enjoy a smooth and efficient ride with our Nissan Altima — a stylish sedan built for comfort, performance, and reliability. Spacious interior, advanced safety, responsive handling.',
    relatedCars: ['midsize-elantra', 'suv-tucson'],
    faqs: [
      {
        question: 'How does it compare vs midsize?',
        answer: 'More space, comfort, and performance features for a premium experience.'
      },
      {
        question: 'What\'s the minimum age?',
        answer: '25+ years old with valid driver\'s license.'
      },
      {
        question: 'What\'s the MPG?',
        answer: '28–39 MPG, balancing performance with efficiency.'
      },
      {
        question: 'Good for families?',
        answer: 'Seats 5 comfortably with plenty of trunk space.'
      },
      {
        question: 'Suitable for road trips?',
        answer: 'Excellent choice with comfort and reliability for long distances.'
      },
      {
        question: 'Transmission type?',
        answer: 'Automatic transmission only for smooth operation.'
      }
    ]
  },
  {
    id: 'suv-tucson',
    name: 'Hyundai Tucson or Similar',
    category: 'Midsize SUV',
    image: hyundaiTucsonImg,
    seats: 5,
    transmission: 'Automatic',
    mpg: '26-33',
    ageRequirement: '25+ years',
    price: 55,
    description: 'Drive with confidence in our versatile Hyundai Tucson SUV.',
    fullDescription: 'Drive with confidence in our Hyundai Tucson — a versatile, stylish SUV ready for any adventure. Spacious interior, advanced safety, smooth handling.',
    relatedCars: ['fullsize-altima'],
    faqs: [
      {
        question: 'How many passengers?',
        answer: '5 passengers plus extra cargo space for luggage.'
      },
      {
        question: 'What\'s the MPG?',
        answer: '26–33 MPG, efficient for an SUV.'
      },
      {
        question: 'Age requirement?',
        answer: '25+ years old with valid driver\'s license.'
      },
      {
        question: 'Good for long drives?',
        answer: 'Ideal for both urban driving and road trip adventures.'
      },
      {
        question: 'What safety features?',
        answer: 'Advanced driver-assist technology and safety systems included.'
      },
      {
        question: 'Transmission type?',
        answer: 'Automatic transmission only for effortless driving.'
      }
    ]
  }
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter(car => car.category.toLowerCase().includes(category.toLowerCase()));
};

export const getRelatedCars = (carId: string): Car[] => {
  const car = getCarById(carId);
  if (!car) return [];
  
  return car.relatedCars
    .map(id => getCarById(id))
    .filter((car): car is Car => car !== undefined);
};