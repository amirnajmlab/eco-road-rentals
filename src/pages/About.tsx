import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Users, Award, Clock, MapPin, CheckCircle, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '500+', label: 'Vehicles Available', icon: Award },
    { number: '24/7', label: 'Customer Support', icon: Clock },
    { number: '15+', label: 'Locations', icon: MapPin },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide reliable, affordable, and convenient car rental services that enable our customers to explore the world with confidence and freedom.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in transparency, exceptional customer service, and maintaining the highest standards of vehicle safety and cleanliness.'
    },
    {
      icon: CheckCircle,
      title: 'Our Promise',
      description: 'Every vehicle in our fleet is thoroughly inspected and maintained to ensure your journey is safe, comfortable, and memorable.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-car-green to-car-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RentCar</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in automotive freedom. For over a decade, we've been connecting 
              travelers with reliable vehicles and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth group">
                <CardContent className="p-6">
                  <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                    <stat.icon className="h-8 w-8 text-car-green group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-car-green mb-2">{stat.number}</h3>
                  <p className="text-car-gray-light">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-car-gray mb-6">Our Story</h2>
              <div className="space-y-4 text-car-gray-light text-lg">
                <p>
                  Founded in 2013, RentCar began as a small family business with a simple vision: 
                  to make car rentals accessible, affordable, and hassle-free for everyone.
                </p>
                <p>
                  What started with just five vehicles has grown into a fleet of over 500 cars, 
                  serving thousands of customers across multiple locations. Our commitment to 
                  quality and customer satisfaction has remained unwavering throughout our journey.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted car rental companies in the region, 
                  known for our transparent pricing, well-maintained vehicles, and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-car-green/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-car-green rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-car-gray mb-2">Industry Leader</h3>
                  <p className="text-car-gray-light">
                    Recognized for excellence in customer service and fleet management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-car-gray mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-car-gray-light max-w-2xl mx-auto">
              Our core values shape every interaction and decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth group">
                <CardContent className="p-8">
                  <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                    <value.icon className="h-8 w-8 text-car-green group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-car-gray mb-4">{value.title}</h3>
                  <p className="text-car-gray-light leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-car-gray mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-car-gray-light max-w-2xl mx-auto">
              Dedicated professionals committed to making your rental experience exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                description: 'Leading RentCar with vision and passion for customer excellence.',
              },
              {
                name: 'Michael Chen',
                role: 'Fleet Manager',
                description: 'Ensuring every vehicle meets our high standards of quality and safety.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Success',
                description: 'Dedicated to providing exceptional support and service to our customers.',
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <div className="bg-car-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-car-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-car-gray mb-2">{member.name}</h3>
                  <p className="text-car-green font-medium mb-3">{member.role}</p>
                  <p className="text-car-gray-light">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-car-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers who trust RentCar for their travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/fleet" className="bg-car-yellow text-car-gray px-8 py-3 rounded-lg font-semibold hover:bg-car-yellow-light transition-smooth">
              Browse Our Fleet
            </a>
            <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-car-green transition-smooth">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;