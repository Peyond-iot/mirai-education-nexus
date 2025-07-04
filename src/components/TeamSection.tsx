
import TeamCard from './TeamCard';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Balram Thing",
      position: "Chairman",
      qualification: "JLPT N2 Certified",
      experience: "Graduate from Tokyo, Japan"
    },
    {
      name: "Dhana Lama",
      position: "Managing Director",
      qualification: "JLPT N1 Certified", 
      experience: "10+ years in Japanese education"
    },
    {
      name: "Asan Tamang",
      position: "Principal",
      qualification: "Educational Leadership",
      experience: "15+ years in education sector"
    },
    {
      name: "Prativa Rokaya",
      position: "Language Instructor",
      qualification: "Japanese Language Expert",
      experience: "Specialized in JLPT preparation"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals with Japanese qualifications and deep industry knowledge are here to guide your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Team Makes the Difference</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">JLPT Certified</h4>
                <p className="text-gray-600 text-sm">All our counselors are JLPT certified with proven Japanese language expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Japan Experience</h4>
                <p className="text-gray-600 text-sm">Direct experience living and studying in Japan brings authentic insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Success</h4>
                <p className="text-gray-600 text-sm">500+ successful student placements with 95% visa approval rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
