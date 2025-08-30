import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import BookingWidget from '@/components/BookingWidget';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';
import { Shield, Clock, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
import heroBackgroundImg from '@/assets/hero-background.jpg';

const Index = () => {
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Journey
              <span className="block text-car-yellow">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Discover the freedom of the road with our premium fleet of vehicles. 
              From economy to luxury, we have the perfect car for every adventure.
            </p>
          </div>
          
          {/* Booking Widget */}
          <div className="animate-slide-up">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-car-gray mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-car-gray-light max-w-2xl mx-auto">
              Choose from our handpicked selection of reliable, comfortable, and efficient vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/fleet">
              <Button variant="default" size="lg" className="group">
                View All Vehicles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-car-gray mb-4">
              Why Choose RentCar?
            </h2>
            <p className="text-lg text-car-gray-light max-w-2xl mx-auto">
              We're committed to providing you with the best car rental experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-smooth group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Shield className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">Safe & Secure</h3>
                <p className="text-car-gray-light">All vehicles undergo rigorous safety inspections and maintenance</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-smooth group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Clock className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">24/7 Support</h3>
                <p className="text-car-gray-light">Round-the-clock customer service for your peace of mind</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-smooth group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <MapPin className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">Multiple Locations</h3>
                <p className="text-car-gray-light">Convenient pickup and drop-off points across the city</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-smooth group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                  <Star className="h-8 w-8 text-car-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-car-gray mb-3">Top Rated</h3>
                <p className="text-car-gray-light">Consistently rated 5 stars by our satisfied customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-car-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your perfect vehicle today and experience the freedom of the open road
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fleet">
              <Button variant="secondary" size="lg" className="group">
                Browse Fleet
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-car-green">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-car-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RentCar</h3>
              <p className="text-gray-300">Your trusted partner for car rentals. Reliable, affordable, and always ready for your next adventure.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/fleet" className="block text-gray-300 hover:text-car-yellow transition-smooth">Our Fleet</Link>
                <Link to="/about" className="block text-gray-300 hover:text-car-yellow transition-smooth">About Us</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-car-yellow transition-smooth">Contact</Link>
                <Link to="/location" className="block text-gray-300 hover:text-car-yellow transition-smooth">Locations</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-car-yellow transition-smooth">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-car-yellow transition-smooth">Terms of Service</a>
                <a href="#" className="block text-gray-300 hover:text-car-yellow transition-smooth">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-car-yellow transition-smooth">Insurance</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 1-800-RENTCAR</p>
                <p>✉️ info@rentcar.com</p>
                <p>📍 123 Main St, City, State</p>
                <p>🕒 24/7 Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 RentCar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
