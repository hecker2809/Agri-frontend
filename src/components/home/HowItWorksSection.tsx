
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Input Your Farm Data",
    description: "Enter details about your location, soil type, crop varieties, and historical yields.",
    color: "bg-agriculture"
  },
  {
    number: "02",
    title: "Select Parameters",
    description: "Choose the specific factors you want to consider in your yield prediction model.",
    color: "bg-water"
  },
  {
    number: "03",
    title: "Review Predictions",
    description: "Get detailed yield predictions with confidence intervals and supporting data.",
    color: "bg-harvest"
  },
  {
    number: "04",
    title: "Optimize & Implement",
    description: "Use our recommendations to optimize your farming decisions for better yields.",
    color: "bg-soil"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-agriculture/10 text-agriculture rounded-full text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Simple Process, Powerful Results
              </h2>
              <p className="text-lg text-gray-700">
                Our easy-to-use platform turns complex data into actionable insights in just a few simple steps.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0 mr-4`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits of Using AgriPredict</h3>
              
              {["Increase crop yields by up to 20%", 
                "Reduce resource waste and environmental impact", 
                "Make confident planting and harvesting decisions", 
                "Optimize fertilizer and water usage", 
                "Plan more effectively for market demands"].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-agriculture mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
