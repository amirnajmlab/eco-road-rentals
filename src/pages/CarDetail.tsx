import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import { getCarById, getRelatedCars } from '@/data/cars';
import { Users, Gauge, Calendar, Fuel, MapPin, DollarSign, ArrowLeft, Star } from 'lucide-react';

const CarDetail = () => {
  const { carId } = useParams<{ carId: string }>();
  const car = carId ? getCarById(carId) : null;
  const relatedCars = carId ? getRelatedCars(carId) : [];
  
  const [bookingData, setBookingData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupLocation: 'Downtown Branch',
  });

  const [estimatedDays, setEstimatedDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  React.useEffect(() => {
    if (bookingData.pickupDate && bookingData.returnDate) {
      const pickup = new Date(bookingData.pickupDate);
      const returnDate = new Date(bookingData.returnDate);
      const diffTime = Math.abs(returnDate.getTime() - pickup.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setEstimatedDays(diffDays);
      setTotalPrice((car?.price || 0) * diffDays);
    }
  }, [bookingData.pickupDate, bookingData.returnDate, car?.price]);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 text-center">
          <h1 className="text-2xl font-bold text-car-gray mb-4">Car not found</h1>
          <Link to="/fleet">
            <Button variant="default">Back to Fleet</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-car-gray-light">
            <Link to="/" className="hover:text-car-green transition-smooth">Home</Link>
            <span>/</span>
            <Link to="/fleet" className="hover:text-car-green transition-smooth">Fleet</Link>
            <span>/</span>
            <span className="text-car-gray font-medium">{car.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Car Details */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link to="/fleet" className="inline-flex items-center gap-2 text-car-green hover:text-car-green-dark mb-6 group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-smooth" />
                Back to Fleet
              </Link>

              {/* Car Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden group">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-car-green text-white">
                    {car.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-car-yellow text-car-gray font-semibold">
                    ${car.price}/day
                  </Badge>
                </div>
              </div>

              {/* Car Info */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-car-gray mb-4">{car.name}</h1>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Users className="h-6 w-6 text-car-green mx-auto mb-2" />
                    <p className="text-sm text-car-gray-light">Passengers</p>
                    <p className="font-semibold text-car-gray">{car.seats}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Gauge className="h-6 w-6 text-car-green mx-auto mb-2" />
                    <p className="text-sm text-car-gray-light">Transmission</p>
                    <p className="font-semibold text-car-gray">{car.transmission}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Fuel className="h-6 w-6 text-car-green mx-auto mb-2" />
                    <p className="text-sm text-car-gray-light">Fuel Economy</p>
                    <p className="font-semibold text-car-gray">{car.mpg} mpg</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Calendar className="h-6 w-6 text-car-green mx-auto mb-2" />
                    <p className="text-sm text-car-gray-light">Age Requirement</p>
                    <p className="font-semibold text-car-gray">{car.ageRequirement}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-car-gray mb-4">Description</h2>
                  <p className="text-car-gray-light leading-relaxed text-lg">{car.fullDescription}</p>
                </div>

                {/* Review Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-car-gray mb-4">Customer Review</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={car.image}
                          alt="Customer review"
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-car-yellow text-car-yellow" />
                            ))}
                          </div>
                          <p className="text-car-gray-light italic">
                            "Perfect choice for my city trip. Comfortable, efficient, and reliable. 
                            The booking process was smooth and the car was exactly as described."
                          </p>
                          <p className="text-sm text-car-gray-light mt-2">- Sarah Johnson, Verified Customer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-car-gray mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {car.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-car-gray-light">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Dashboard */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="glass-strong shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-center text-car-gray">Book This Vehicle</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Pickup Location */}
                    <div>
                      <Label htmlFor="pickup-location" className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-car-green" />
                        Pickup Location
                      </Label>
                      <select
                        value={bookingData.pickupLocation}
                        onChange={(e) => setBookingData({...bookingData, pickupLocation: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-green focus:border-transparent"
                      >
                        <option>Downtown Branch</option>
                        <option>Airport Terminal</option>
                        <option>North Station</option>
                        <option>Mall Location</option>
                        <option>Hotel Pickup</option>
                      </select>
                    </div>

                    {/* Pickup Date */}
                    <div>
                      <Label htmlFor="pickup-date" className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-car-green" />
                        Pickup Date
                      </Label>
                      <Input
                        type="date"
                        value={bookingData.pickupDate}
                        onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                        className="focus:ring-car-green"
                      />
                    </div>

                    {/* Return Date */}
                    <div>
                      <Label htmlFor="return-date" className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-car-green" />
                        Return Date
                      </Label>
                      <Input
                        type="date"
                        value={bookingData.returnDate}
                        onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                        className="focus:ring-car-green"
                      />
                    </div>

                    {/* Price Breakdown */}
                    {totalPrice > 0 && (
                      <div className="bg-car-green/10 p-4 rounded-lg border border-car-green/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-car-gray">Daily Rate:</span>
                          <span className="font-semibold">${car.price}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-car-gray">Duration:</span>
                          <span className="font-semibold">{estimatedDays} {estimatedDays === 1 ? 'day' : 'days'}</span>
                        </div>
                        <hr className="my-2 border-car-green/20" />
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-car-gray">Total:</span>
                          <span className="text-xl font-bold text-car-green">${totalPrice}</span>
                        </div>
                      </div>
                    )}

                    {/* Availability Status */}
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 font-medium">✅ Available for selected dates</p>
                    </div>

                    {/* Book Button */}
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={!bookingData.pickupDate || !bookingData.returnDate}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Book Now - ${totalPrice || car.price}
                    </Button>

                    <p className="text-xs text-center text-car-gray-light">
                      Free cancellation up to 24 hours before pickup
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-car-gray mb-8">Discover More Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedCars.map((relatedCar) => (
                  <CarCard key={relatedCar.id} {...relatedCar} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarDetail;