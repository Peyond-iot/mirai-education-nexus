import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Users, Award, Globe, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Anita Sharma",
      text: "Mirai Education Center made my dream of studying in Japan a reality. Their guidance was exceptional and I'm now pursuing my master's degree in Tokyo!",
      course: "JLPT N3 Graduate, Tokyo University"
    },
    {
      name: "Rajesh Tamang", 
      text: "The team's support throughout my SSW visa process was outstanding. Now I'm working as a skilled worker in Osaka with excellent opportunities!",
      course: "SSW Visa Success, Manufacturing Sector"
    },
    {
      name: "Priya Gurung",
      text: "Professional guidance and excellent language training. The cultural orientation helped me adapt quickly to Japanese society. Highly recommended!",
      course: "Student Visa Graduate, Language School"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "95%", label: "Success Rate" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6bf7752a-b647-4c92-9ba9-7a53124aaa68.png" 
                alt="Mirai Education Center Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mirai Education Center</h1>
                <p className="text-sm text-gray-600">Pvt. Ltd.</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 hidden md:block">
                Apply Now
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-2 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 mx-4">
                  Apply Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300 opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              For Abroad Study & Career Development
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in">
              Your Gateway to Educational Excellence and Career Success in Japan
            </p>
            <p className="text-lg mb-10 text-blue-50 max-w-2xl mx-auto animate-fade-in">
              Professional consultation, language training, and comprehensive support for students aspiring to study and work in Japan. Join 500+ successful graduates who achieved their dreams with our expert guidance.
            </p>
            
            <div className="flex justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +977-9765220766
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Mirai Education Center</h3>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of Kathmandu at Putalisadak, Mirai Education Center Pvt. Ltd. has been guiding students towards their dreams of studying and working in Japan since our establishment in 2081.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With our experienced team of JLPT-certified professionals and comprehensive support services, we ensure your journey to Japan is smooth and successful. Our chairman, Balram Thing, is a Tokyo graduate with JLPT N2 certification, bringing authentic Japanese experience to our guidance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">JLPT Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Japan Experience</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="animate-scale-in">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Our Mission</h4>
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed mb-6">
                    "To bridge the gap between Nepalese students and Japanese education opportunities, providing comprehensive support and guidance for a successful international career."
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Chairman's Message</h5>
                    <p className="text-sm text-gray-600 italic">
                      "Having studied in Tokyo myself, I understand the challenges students face. Our mission is to make your Japanese dream achievable through expert guidance and unwavering support."
                    </p>
                    <p className="text-xs text-blue-600 mt-2 font-medium">- Balram Thing, Chairman</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h3>
            <p className="text-xl text-gray-600">Success stories from our graduates living their dreams in Japan</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-white border-0 shadow-xl animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="text-6xl text-blue-600 mb-4">"</div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[currentTestimonial].course}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step towards your future in Japan. Our office is open Sunday through Friday.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <div className="font-medium text-lg">Phone</div>
                <div className="text-blue-200 text-sm mt-1">+977-1-45919578</div>
                <div className="text-blue-200 text-sm">+977-9765220766</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <div className="font-medium text-lg">Email</div>
                <div className="text-blue-200 text-sm mt-1 break-all">
                  miraieducationcenter1@gmail.com
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <div className="font-medium text-lg">Office Hours</div>
                <div className="text-blue-200 text-sm mt-1">Sunday - Friday</div>
                <div className="text-blue-200 text-sm">07:00 AM - 06:00 PM</div>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
            Get Free Consultation Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/6bf7752a-b647-4c92-9ba9-7a53124aaa68.png" 
                  alt="Mirai Education Center Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner for Japanese education and career opportunities. Located in Putalisadak, Kathmandu, we've been guiding students to success since 2081.
              </p>
              <p className="text-gray-500 text-sm">
                Issue Date: 2081-06-13 | Reg. Office: Kathmandu-30, Putalisadak
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">Kathmandu-30, Putalisadak, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <div className="text-sm">
                    <div>+977-1-45919578</div>
                    <div>+977-9765220766</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm break-all">miraieducationcenter1@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors text-sm">Our Services</a>
                <a href="#team" className="block text-gray-400 hover:text-white transition-colors text-sm">Our Team</a>
                <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors text-sm">Gallery</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2024 Mirai Education Center Pvt. Ltd. All rights reserved. | Designed for Japanese Education Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
