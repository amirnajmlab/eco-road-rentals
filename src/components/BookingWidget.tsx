import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Car, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

const BookingWidget = () => {
  const [bookingData, setBookingData] = useState({
    vehicleType: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const vehicleTypes = [
    { value: 'economy', label: 'Economy Car', price: 25 },
    { value: 'compact', label: 'Compact Car', price: 30 },
    { value: 'midsize', label: 'Midsize Car', price: 35 },
    { value: 'fullsize', label: 'Fullsize Car', price: 45 },
    { value: 'suv', label: 'SUV', price: 55 },
  ];

  const locations = [
    'Downtown Branch',
    'Airport Terminal',
    'North Station',
    'Mall Location',
    'Hotel Pickup',
  ];

  const calculatePrice = (vehicleType: string, days: number = 1) => {
    const vehicle = vehicleTypes.find(v => v.value === vehicleType);
    return vehicle ? vehicle.price * days : 0;
  };

  const handleSearch = () => {
    console.log('Searching for vehicles...', bookingData);
    // Here you would typically redirect to search results or open a modal
  };

  return (
    <div className="glass-strong rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Vehicle Type */}
        <div className="space-y-2">
          <Label htmlFor="vehicle-type" className="text-sm font-semibold text-car-gray flex items-center gap-2">
            <Car className="h-4 w-4 text-car-green" />
            Vehicle Type
          </Label>
          <Select
            value={bookingData.vehicleType}
            onValueChange={(value) => {
              setBookingData({ ...bookingData, vehicleType: value });
              setEstimatedPrice(calculatePrice(value));
            }}
          >
            <SelectTrigger className="bg-white/90 border-white/20 focus:ring-car-green">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              {vehicleTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pickup Location */}
        <div className="space-y-2">
          <Label htmlFor="pickup-location" className="text-sm font-semibold text-car-gray flex items-center gap-2">
            <MapPin className="h-4 w-4 text-car-green" />
            Pickup Location
          </Label>
          <Select
            value={bookingData.pickupLocation}
            onValueChange={(value) => setBookingData({ ...bookingData, pickupLocation: value })}
          >
            <SelectTrigger className="bg-white/90 border-white/20 focus:ring-car-green">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pickup Date */}
        <div className="space-y-2">
          <Label htmlFor="pickup-date" className="text-sm font-semibold text-car-gray flex items-center gap-2">
            <Calendar className="h-4 w-4 text-car-green" />
            Pickup Date
          </Label>
          <Input
            type="date"
            value={bookingData.pickupDate}
            onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
            className="bg-white/90 border-white/20 focus:ring-car-green"
          />
        </div>

        {/* Return Date */}
        <div className="space-y-2">
          <Label htmlFor="return-date" className="text-sm font-semibold text-car-gray flex items-center gap-2">
            <Calendar className="h-4 w-4 text-car-green" />
            Return Date
          </Label>
          <Input
            type="date"
            value={bookingData.returnDate}
            onChange={(e) => setBookingData({ ...bookingData, returnDate: e.target.value })}
            className="bg-white/90 border-white/20 focus:ring-car-green"
          />
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <Button
            variant="hero"
            size="xl"
            onClick={handleSearch}
            className="w-full rounded-xl"
          >
            Search & Book
          </Button>
        </div>
      </div>

      {/* Estimated Price */}
      {estimatedPrice > 0 && (
        <div className="mt-4 p-3 bg-car-green/10 rounded-lg border border-car-green/20 animate-scale-in">
          <div className="flex items-center justify-center gap-2 text-car-green font-semibold">
            <DollarSign className="h-4 w-4" />
            Estimated Price: ${estimatedPrice}/day
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingWidget;