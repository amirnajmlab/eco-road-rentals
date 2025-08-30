import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';
import { Filter, Search } from 'lucide-react';

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Vehicles', count: cars.length },
    { id: 'economy', name: 'Economy', count: cars.filter(car => car.category.includes('Economy')).length },
    { id: 'compact', name: 'Compact', count: cars.filter(car => car.category.includes('Compact')).length },
    { id: 'midsize', name: 'Midsize', count: cars.filter(car => car.category.includes('Midsize')).length },
    { id: 'fullsize', name: 'Fullsize', count: cars.filter(car => car.category.includes('Fullsize')).length },
    { id: 'suv', name: 'SUV', count: cars.filter(car => car.category.includes('SUV')).length },
  ];

  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'all' || 
      car.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-car-green to-car-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose from our diverse selection of well-maintained vehicles, 
              perfect for any journey or occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-car-green focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No vehicles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-car-gray">
                  {selectedCategory === 'all' ? 'All Vehicles' : 
                   categories.find(c => c.id === selectedCategory)?.name} 
                  <span className="text-car-gray-light ml-2">
                    ({filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'})
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-car-gray mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-car-gray-light mb-8">
            Our friendly team is here to help you find the perfect vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              📞 Call Us: 1-800-RENTCAR
            </Button>
            <Button variant="outline" size="lg">
              💬 Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;