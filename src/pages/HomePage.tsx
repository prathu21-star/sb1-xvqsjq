import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  TestTube, 
  Globe, 
  Award, 
  Microscope, 
  FlaskConical, 
  Dna, 
  Users,
  Search
} from 'lucide-react';
import ListingForm from '../components/ListingForm';

export default function HomePage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [showListingForm, setShowListingForm] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { 
      step: "Search", 
      icon: <Search className="w-12 h-12" />, 
      description: "Find service providers across 50+ categories.",
      action: () => navigate('/services')
    },
    { 
      step: "Compare", 
      icon: <Users className="w-12 h-12" />, 
      description: "Evaluate providers based on quality, location, and services offered.",
      action: () => navigate('/providers')
    },
    { 
      step: "Connect", 
      icon: <ArrowRight className="w-12 h-12" />, 
      description: "Send requests for quotes and begin your project.",
      action: () => setShowListingForm(true)
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900">
            {/* Animated geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            {/* Floating shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/5"
                  style={{
                    width: Math.random() * 300 + 100,
                    height: Math.random() * 300 + 100,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            {/* Glowing accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Unlock Biopharma Innovation
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Your one-stop platform for discovering, comparing, and connecting with India's best biopharma service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/services')}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Explore Services
              </button>
              <button 
                onClick={() => setShowListingForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                List Your Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">Effortlessly find and collaborate with the right biopharma partners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                onClick={feature.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-center items-center mb-6 h-24 w-24 mx-auto bg-blue-50 rounded-full">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.step}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 text-blue-600 flex items-center justify-center opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-xl text-blue-100 mb-8">Join India's fastest-growing biopharma network.</p>
            <button 
              onClick={() => navigate('/services')}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Listing Form Modal */}
      {showListingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 my-8">
            <ListingForm onClose={() => setShowListingForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}