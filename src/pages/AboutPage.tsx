
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, Search, Check } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead AI Engineer",
      bio: "PhD in Computer Vision with 8+ years in anime recognition systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sakura Tanaka",
      role: "Anime Database Specialist",
      bio: "Expert in anime cataloging with comprehensive knowledge of 10,000+ series",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Full-Stack Developer",
      bio: "Specializes in scalable web applications and API development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const technologies = [
    { name: "TensorFlow", description: "Deep learning framework for image recognition" },
    { name: "React", description: "Modern web framework for user interface" },
    { name: "Computer Vision", description: "Advanced algorithms for image analysis" },
    { name: "Neural Networks", description: "Convolutional networks trained on anime data" },
    { name: "Cloud Computing", description: "Scalable infrastructure for fast processing" },
    { name: "REST API", description: "Easy integration for developers" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AnimeLens
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Revolutionizing anime discovery through artificial intelligence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              AnimeLens was born from the frustration of seeing an amazing anime screenshot 
              and not knowing which series it's from. We've built the world's most advanced 
              anime recognition system to help fans instantly identify any anime scene, 
              character, or moment they encounter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced AI</h3>
              <p className="text-gray-600">
                Cutting-edge machine learning models trained on millions of anime frames
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Database</h3>
              <p className="text-gray-600">
                Extensive collection covering classic series to the latest seasonal anime
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Accuracy</h3>
              <p className="text-gray-600">
                99%+ accuracy rate with continuous learning and model improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              AnimeLens started in 2023 when our founder, frustrated by the inability to identify 
              anime from screenshots shared in online communities, decided to solve this problem 
              using artificial intelligence. What began as a weekend project quickly evolved into 
              a sophisticated platform used by thousands of anime enthusiasts worldwide.
            </p>
            
            <p className="mb-6">
              Our team combines deep technical expertise in computer vision and machine learning 
              with genuine passion for anime culture. We understand the importance of accurate 
              identification and comprehensive information, which is why we've partnered with 
              leading anime databases to provide the most complete results possible.
            </p>
            
            <p>
              Today, AnimeLens processes thousands of anime identifications daily, helping fans 
              discover new series, find source material for artwork, and connect with the anime 
              community through shared discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to advancing anime recognition technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the AnimeLens Community
          </h2>
          <p className="text-xl mb-8">
            Start discovering anime with our advanced AI technology today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/detect"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Try AnimeLens Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
