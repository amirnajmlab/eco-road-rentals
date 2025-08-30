import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['1-800-RENTCAR', '(800) 736-8227'],
      description: '24/7 Customer Support'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@rentcar.com', 'support@rentcar.com'],
      description: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['123 Main Street', 'Downtown, ST 12345'],
      description: 'Visit our main location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 6:00 AM - 10:00 PM', 'Sat-Sun: 8:00 AM - 8:00 PM'],
      description: 'Extended weekend hours'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-car-green to-car-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? Need assistance? We're here to help you 24/7. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth group">
                <CardContent className="p-6">
                  <div className="bg-car-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-car-green group-hover:scale-110 transition-smooth">
                    <info.icon className="h-8 w-8 text-car-green group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-car-gray mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-car-gray font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-car-gray-light">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="glass-strong shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-car-gray">Send Us a Message</CardTitle>
                  <p className="text-car-gray-light">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-car-gray-light">
                        Thank you for contacting us. We'll respond within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 focus:ring-car-green"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 focus:ring-car-green"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 focus:ring-car-green"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 min-h-[120px] focus:ring-car-green"
                          placeholder="How can we help you today?"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      
                      <p className="text-xs text-center text-car-gray-light">
                        * Required fields. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-car-green/10 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-car-green mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-car-gray mb-2">Interactive Map</h3>
                      <p className="text-car-gray-light">Visit our main location at</p>
                      <p className="text-car-gray font-medium">123 Main Street, Downtown</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-car-gray">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-700">Emergency Roadside</p>
                      <p className="text-sm text-green-600">1-800-HELP-NOW</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-700">Live Chat Support</p>
                      <p className="text-sm text-blue-600">Available 24/7 on our website</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-700">Booking Modifications</p>
                      <p className="text-sm text-purple-600">Manage your reservations online</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-car-gray mb-2">Frequently Asked Questions</h3>
                  <p className="text-car-gray-light mb-4">
                    Find quick answers to common questions about our services.
                  </p>
                  <Button variant="outline" className="w-full">
                    View FAQ Section
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-car-gray mb-4">Our Locations</h2>
            <p className="text-lg text-car-gray-light">Find a RentCar location near you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Downtown Branch',
                address: '123 Main Street',
                city: 'Downtown, ST 12345',
                phone: '(555) 123-4567',
                hours: 'Mon-Sun: 6:00 AM - 10:00 PM'
              },
              {
                name: 'Airport Terminal',
                address: '456 Airport Blvd',
                city: 'Terminal 1, ST 12346',
                phone: '(555) 234-5678',
                hours: 'Mon-Sun: 24 Hours'
              },
              {
                name: 'North Station',
                address: '789 North Ave',
                city: 'Northside, ST 12347',
                phone: '(555) 345-6789',
                hours: 'Mon-Fri: 7:00 AM - 9:00 PM'
              }
            ].map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-car-gray mb-3">{location.name}</h3>
                  <div className="space-y-2 text-sm text-car-gray-light">
                    <p>📍 {location.address}</p>
                    <p>{location.city}</p>
                    <p>📞 {location.phone}</p>
                    <p>🕒 {location.hours}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;