
import { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'students', label: 'Student Journey' },
    { id: 'interior', label: 'Our Office' },
    { id: 'events', label: 'Events & Achievements' }
  ];

  const images = [
    {
      id: 1,
      category: 'events',
      src: '/lovable-uploads/3d045eda-d1e5-420f-bec5-f162871ccc8c.png',
      alt: 'Mirai Education Center football team',
      title: 'Sports Team Achievement'
    },
    {
      id: 2,
      category: 'interior',
      src: '/lovable-uploads/5779f16f-170e-4fac-a748-7a0c731f3cf9.png',
      alt: 'Office interior with certificates and Japanese decorations',
      title: 'Our Office Interior'
    },
    {
      id: 3,
      category: 'students',
      src: '/lovable-uploads/dd87d81a-b947-4976-97e0-99e7a4521060.png',
      alt: 'Students gathering at Mirai Education Center',
      title: 'Student Community'
    },
    {
      id: 4,
      category: 'students',
      src: '/lovable-uploads/8747975b-a098-4579-bed0-cb4c45566e64.png',
      alt: 'Group of students at celebration event',
      title: 'Student Celebration'
    },
    {
      id: 5,
      category: 'events',
      src: '/lovable-uploads/09f71782-e7bf-421e-8196-8bf05a334c0d.png',
      alt: 'Trophy winners from Mirai Education Center',
      title: 'Championship Winners'
    },
    {
      id: 6,
      category: 'students',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      alt: 'Student studying with laptop',
      title: 'Dedicated Students'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments of success, learning, and growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "border-blue-200 text-blue-600 hover:bg-blue-50"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
