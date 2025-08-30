import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Gauge, Calendar, Fuel } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
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
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  category,
  image,
  seats,
  transmission,
  mpg,
  ageRequirement,
  price,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-smooth hover:scale-105 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="default" className="bg-car-green text-white">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-car-yellow text-car-gray font-semibold">
            ${price}/day
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-car-gray mb-2">{name}</h3>
        <p className="text-car-gray-light text-sm mb-4 line-clamp-2">{description}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-car-gray-light">
            <Users className="h-4 w-4 text-car-green" />
            {seats} seats
          </div>
          <div className="flex items-center gap-2 text-sm text-car-gray-light">
            <Gauge className="h-4 w-4 text-car-green" />
            {transmission}
          </div>
          <div className="flex items-center gap-2 text-sm text-car-gray-light">
            <Fuel className="h-4 w-4 text-car-green" />
            {mpg} mpg
          </div>
          <div className="flex items-center gap-2 text-sm text-car-gray-light">
            <Calendar className="h-4 w-4 text-car-green" />
            {ageRequirement}
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/car/${id}`}>
          <Button variant="default" className="w-full hover:bg-car-green-light">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;