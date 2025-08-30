import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { MapPin, Clock, Phone, Car, Star, Navigation } from 'lucide-react';

const Location = () => {
  const locations = [
    {
      id: 1,
      name: 'Downtown Branch',
      address: '123 Main Street, Downtown, ST 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Sun: 6:00 AM - 10:00 PM',
      features: ['24/7 Pickup', 'Valet Service', 'Premium Fleet'],
      vehicles: 85,
      rating: 4.9,
      description: 'Our flagship location in the heart of downtown, featuring our premium fleet and full-service amenities.',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: 'Airport Terminal',
      address: '456 Airport Boulevard, Terminal 1, ST 12346',
      phone: '(555) 234-5678',
      hours: 'Mon-Sun: 24 Hours',
      features: ['Airport Shuttle', '24/7 Service', 'Express Counter'],
      vehicles: 120,
      rating: 4.8,
      description: 'Convenient airport location with 24/7 service and complimentary shuttle to all terminals.',
      coordinates: { lat: 40.6892, lng: -74.1745 }
    },
    {
      id: 3,
      name: 'North Station',
      address: '789 North Avenue, Northside, ST 12347',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 7:00 AM - 9:00 PM, Sat-Sun: 8:00 AM - 6:00 PM',
      features: ['Train Station Pickup', 'Business Center', 'Economy Focus'],
      vehicles: 60,
      rating: 4.7,
      description: 'Perfect for business travelers with convenient train station access and extended weekday hours.',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: 4,
      name: 'Mall Location',
      address: '321 Shopping Center Drive, West Side, ST 12348',
      phone: '(555) 456-7890',
      hours: 'Mon-Thu: 10:00 AM - 8:00 PM, Fri-Sun: 10:00 AM - 9:00 PM',
      features: ['Mall Parking', 'Family Vehicles', 'Weekend Specials'],
      vehicles: 45,
      rating: 4.6,
      description: 'Family-friendly location with easy mall parking and a focus on spacious vehicles.',
      coordinates: { lat: 40.7282, lng: -74.0776 }
    },
    {
      id: 5,
      name: 'Hotel District',
      address: '654 Hotel Row, Tourism District, ST 12349',
      phone: '(555) 567-8901',
      hours: 'Mon-Sun: 7:00 AM - 11:00 PM',
      features: ['Hotel Delivery', 'Tourism Packages', 'Multilingual Staff'],
      vehicles: 70,
      rating: 4.8,
      description: 'Serving the hotel district with delivery service and tourism-focused vehicle packages.',
      coordinates: { lat: 40.7505, lng: -73.9934 }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-car-green to-car-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find a convenient RentCar location near you. With multiple branches across the city, 
              we're always within reach when you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-car-green/10 to-car-green/5 h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="bg-car-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-car-gray mb-2">Interactive Map</h3>
                  <p className="text-car-gray-light mb-4">
                    Explore all our locations on the interactive map
                  </p>
                  <Button variant="default" size="lg">
                    <Navigation className="h-4 w-4 mr-2" />
                    View Full Map
                  </Button>
                </div>
                
                {/* Map Markers */}
                <div className="absolute inset-0">
                  {locations.map((location, index) => (
                    <div
                      key={location.id}
                      className={`absolute w-6 h-6 bg-car-green rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-smooth`}
                      style={{
                        left: `${20 + index * 15}%`,
                        top: `${30 + (index % 2) * 20}%`,
                      }}
                      title={location.name}
                    >
                      <div className="w-full h-full rounded-full bg-car-green flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-car-gray mb-4">All Locations</h2>
            <p className="text-lg text-car-gray-light">
              Choose the most convenient location for your rental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="hover:shadow-xl transition-smooth group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-car-gray group-hover:text-car-green transition-smooth">
                        {location.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-car-yellow text-car-yellow" />
                        <span className="text-sm font-medium text-car-gray">{location.rating}</span>
                        <span className="text-sm text-car-gray-light">rating</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-car-green/10 text-car-green">
                      {location.vehicles} vehicles
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-car-gray-light">{location.description}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-car-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-car-gray">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-car-green flex-shrink-0" />
                      <span className="text-sm text-car-gray">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-car-green flex-shrink-0" />
                      <span className="text-sm text-car-gray">{location.hours}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-car-gray mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Car className="h-4 w-4 mr-2" />
                      Book Here
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-car-gray mb-4">Additional Services</h2>
            <p className="text-lg text-car-gray-light">
              We offer convenient services to make your rental experience even better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-smooth group">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Car className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">Vehicle Delivery</h3>
                <p className="text-car-gray-light mb-4">
                  We can deliver your rental vehicle directly to your hotel, home, or office within the city.
                </p>
                <Badge variant="secondary" className="bg-car-yellow/20 text-car-gray">
                  Available at select locations
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-smooth group">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Clock className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">Extended Hours</h3>
                <p className="text-car-gray-light mb-4">
                  Need a car outside normal business hours? Many of our locations offer extended or 24/7 service.
                </p>
                <Badge variant="secondary" className="bg-car-yellow/20 text-car-gray">
                  Airport & Downtown locations
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-smooth group">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Navigation className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">GPS & Accessories</h3>
                <p className="text-car-gray-light mb-4">
                  All vehicles come with built-in GPS navigation. Additional accessories available upon request.
                </p>
                <Badge variant="secondary" className="bg-car-yellow/20 text-car-gray">
                  Included in all rentals
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-car-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our customer service team for assistance with locations, directions, or special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call 1-800-RENTCAR
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-car-green">
              <MapPin className="h-4 w-4 mr-2" />
              Request New Location
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;