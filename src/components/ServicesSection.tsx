
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: "🎓",
      title: "Student Visa Support",
      description: "Complete guidance for Japanese student visa applications with high success rate",
      details: [
        "Document preparation and verification",
        "Application form completion assistance",
        "Interview preparation and mock sessions",
        "Embassy liaison and follow-up",
        "Pre-departure orientation sessions"
      ]
    },
    {
      icon: "💼",
      title: "SSW Visa Counseling", 
      description: "Specialized Support Worker visa consultation for technical careers in Japan",
      details: [
        "SSW visa eligibility assessment",
        "Job matching with Japanese employers",
        "Skills certification preparation",
        "Contract negotiation support",
        "Pre-employment training programs"
      ]
    },
    {
      icon: "🗾",
      title: "JLPT Preparation",
      description: "Comprehensive Japanese Language Proficiency Test preparation courses",
      details: [
        "N5 to N1 level preparation classes",
        "Expert native and certified instructors",
        "Practice tests and mock examinations",
        "Grammar, vocabulary, and kanji training",
        "Listening and reading comprehension focus"
      ]
    },
    {
      icon: "📚",
      title: "Language Courses",
      description: "Structured Japanese language learning programs for all levels",
      details: [
        "NAT-TEST preparation courses",
        "J-CERT certification training",
        "Business Japanese communication",
        "Cultural context and etiquette",
        "Conversation and pronunciation practice"
      ]
    },
    {
      icon: "🎯",
      title: "Interview Preparation",
      description: "Specialized training for visa interviews and job interviews in Japan",
      details: [
        "Mock interview sessions",
        "Common questions and best answers",
        "Body language and presentation skills",
        "Cultural expectations and protocols",
        "Confidence building techniques"
      ]
    },
    {
      icon: "🏛️",
      title: "Cultural Orientation",
      description: "Essential cultural training for successful adaptation to Japanese society",
      details: [
        "Japanese business culture and etiquette",
        "Daily life customs and traditions",
        "Social interaction guidelines",
        "Workplace behavior and expectations",
        "Festival and seasonal celebrations"
      ]
    },
    {
      icon: "🏠",
      title: "Life in Japan Support",
      description: "Comprehensive assistance for settling and thriving in Japan",
      details: [
        "Accommodation and hostel search",
        "Banking and financial setup guidance",
        "Healthcare system navigation",
        "Transportation and city orientation",
        "Emergency contacts and support network"
      ]
    },
    {
      icon: "📋",
      title: "Documentation Services",
      description: "Professional assistance with all required paperwork and certifications",
      details: [
        "Educational credential evaluation",
        "Translation and notarization services",
        "Financial documentation preparation",
        "Medical examination coordination",
        "Insurance and legal document assistance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to successful placement, we provide end-to-end support for your Japanese education and career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="font-semibold text-gray-900 mb-2">95% Success Rate</h4>
                <p className="text-gray-600 text-sm">Proven track record of successful visa approvals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Processing</h4>
                <p className="text-gray-600 text-sm">Efficient handling of applications and documentation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
                <p className="text-gray-600 text-sm">JLPT certified counselors with Japan experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600 text-sm">Continued assistance even after reaching Japan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
