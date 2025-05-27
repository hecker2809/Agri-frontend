
import React from 'react';
import { LineChart, BarChart3, Leaf, Cloud, Database, Users, Flower} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="w-12 h-12 text-agriculture" />,
    title: "Predictive Analysis",
    description: "Advanced machine learning models that predict crop yields based on historical data and environmental factors."
  },
  {
    icon: <Leaf className="w-12 h-12 text-agriculture" />,
    title: "Crop Optimization",
    description: "Get recommendations for optimizing crop varieties, planting times, and farming practices based on your specific conditions."
  },
  {
    icon: <Flower className="w-12 h-12 text-water" />,
    title: "Leaf Disease Detection",
    description: "Detects and classifies leaf disease infections using image-based machine learning for timely and accurate agricultural diagnostics."
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-harvest" />,
    title: "Yield Comparison",
    description: "Compare potential yields across different crops, helping you make informed decisions about what to plant."
  },
  {
    icon: <Database className="w-12 h-12 text-soil" />,
    title: "Historical Analysis",
    description: "Track your farm's performance over time with comprehensive historical data and trend analysis."
  },
  {
    icon: <Users className="w-12 h-12 text-agriculture-dark" />,
    title: "Expert Insights",
    description: "Access insights and recommendations from agricultural experts based on your predictions and data."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Powerful Features for Smart Farming
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with agricultural expertise to help you maximize your farming potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
