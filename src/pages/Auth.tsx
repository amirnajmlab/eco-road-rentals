import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { Mail, Lock, User, Eye, EyeOff, Car, CheckCircle } from 'lucide-react';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Handle login logic here
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', registerData);
    // Handle registration logic here
  };

  const benefits = [
    { icon: CheckCircle, text: 'Faster booking process' },
    { icon: CheckCircle, text: 'Save favorite vehicles' },
    { icon: CheckCircle, text: 'Exclusive member discounts' },
    { icon: CheckCircle, text: 'Booking history and receipts' },
    { icon: CheckCircle, text: 'Priority customer support' },
    { icon: CheckCircle, text: 'Special promotional offers' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-car-green to-car-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to RentCar</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers and unlock exclusive benefits with your free account.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Forms */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Column */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold text-car-gray mb-6">
                  Why Create an Account?
                </h2>
                <p className="text-lg text-car-gray-light mb-8">
                  Unlock exclusive benefits and make your car rental experience even better with a free RentCar account.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-car-green/10 rounded-full p-1">
                        <benefit.icon className="h-5 w-5 text-car-green" />
                      </div>
                      <span className="text-car-gray">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-car-green/5 rounded-xl border border-car-green/20">
                  <h3 className="text-xl font-semibold text-car-gray mb-3">
                    🎉 Special Welcome Offer
                  </h3>
                  <p className="text-car-gray-light mb-4">
                    New members get 15% off their first rental plus a free upgrade when available!
                  </p>
                  <div className="bg-car-yellow/20 rounded-lg p-3 text-center">
                    <span className="text-car-gray font-bold">Code: WELCOME15</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Forms Column */}
            <div className="order-1 lg:order-2">
              <Card className="glass-strong shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-car-gray">
                    Get Started Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger 
                        value="login" 
                        className="data-[state=active]:bg-car-green data-[state=active]:text-white"
                      >
                        Sign In
                      </TabsTrigger>
                      <TabsTrigger 
                        value="register"
                        className="data-[state=active]:bg-car-green data-[state=active]:text-white"
                      >
                        Create Account
                      </TabsTrigger>
                    </TabsList>

                    {/* Login Form */}
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                          <Label htmlFor="login-email" className="flex items-center gap-2 mb-2">
                            <Mail className="h-4 w-4 text-car-green" />
                            Email Address
                          </Label>
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            className="focus:ring-car-green"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="login-password" className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-car-green" />
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="login-password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Enter your password"
                              value={loginData.password}
                              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                              className="focus:ring-car-green pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-car-gray-light hover:text-car-green transition-smooth"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-car-green focus:ring-car-green"
                            />
                            <span className="ml-2 text-sm text-car-gray-light">Remember me</span>
                          </label>
                          <a href="#" className="text-sm text-car-green hover:text-car-green-dark">
                            Forgot password?
                          </a>
                        </div>

                        <Button type="submit" variant="hero" size="lg" className="w-full">
                          Sign In
                        </Button>

                        <div className="text-center">
                          <span className="text-sm text-car-gray-light">or continue with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" size="sm" className="w-full">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </Button>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Register Form */}
                    <TabsContent value="register">
                      <form onSubmit={handleRegister} className="space-y-6">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="first-name" className="flex items-center gap-2 mb-2">
                              <User className="h-4 w-4 text-car-green" />
                              First Name
                            </Label>
                            <Input
                              id="first-name"
                              type="text"
                              placeholder="John"
                              value={registerData.firstName}
                              onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                              className="focus:ring-car-green"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="last-name" className="mb-2 block text-sm">
                              Last Name
                            </Label>
                            <Input
                              id="last-name"
                              type="text"
                              placeholder="Doe"
                              value={registerData.lastName}
                              onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                              className="focus:ring-car-green"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="register-email" className="flex items-center gap-2 mb-2">
                            <Mail className="h-4 w-4 text-car-green" />
                            Email Address
                          </Label>
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            className="focus:ring-car-green"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="register-password" className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-car-green" />
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="register-password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Create a strong password"
                              value={registerData.password}
                              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                              className="focus:ring-car-green pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-car-gray-light hover:text-car-green transition-smooth"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="confirm-password" className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-car-green" />
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirm-password"
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder="Confirm your password"
                              value={registerData.confirmPassword}
                              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                              className="focus:ring-car-green pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-car-gray-light hover:text-car-green transition-smooth"
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="terms"
                            className="rounded border-gray-300 text-car-green focus:ring-car-green"
                            required
                          />
                          <label htmlFor="terms" className="ml-2 text-sm text-car-gray-light">
                            I agree to the{' '}
                            <a href="#" className="text-car-green hover:text-car-green-dark">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-car-green hover:text-car-green-dark">
                              Privacy Policy
                            </a>
                          </label>
                        </div>

                        <Button type="submit" variant="hero" size="lg" className="w-full">
                          Create Account
                        </Button>

                        <div className="text-center">
                          <span className="text-sm text-car-gray-light">or sign up with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" size="sm" className="w-full">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-car-gray-light mb-6">Trusted by over 50,000 customers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-car-gray">TrustPilot ★★★★★</div>
            <div className="text-2xl font-bold text-car-gray">BBB A+</div>
            <div className="text-2xl font-bold text-car-gray">AAA Approved</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;