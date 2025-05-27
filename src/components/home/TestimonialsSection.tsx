
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "AgriPredict helped us increase our bajra yield by 18% in just one season. The predictions were remarkably accurate and the recommendations were practical and easy to implement.",
    author: "Shobhit Chawla",
    role: "Bajra Farmer, Rajasthan",
    initial: "SC"
  },
  {
    content: "As a rice farmer dealing with changing climate patterns, AgriPredict has been invaluable. It's like having an expert agriculturist and meteorologist in my pocket at all times.",
    author: "Ram Singh Yadav",
    role: "Rice Grower, Bihar",
    initial: "RY"
  },
  {
    content: "The prediction tool helped us optimize our potato farming operations. We've seen a significant reduction in water usage while maintaining excellent yields.",
    author: "Muhammad Aslam",
    role: "Potato Farmer, Telangana",
    initial: "MA"
  },
  {
    content: "The prediction tool helped us enhance our coconut cultivation, leading to healthier palms and improved harvest efficiency with reduced resource input.",
    author: "Venkat Raman Reddy",
    role: "Coconut Farmer, Kerala",
    initial: "VR"
  },

  {
    content: "The prediction tool enabled us to fine-tune our tea plantation practices, resulting in better leaf quality and consistent yields with optimized use of water and fertilizers.",
    author: "Arun Gogoi",
    role: "Tea Farmer, Assam",
    initial: "AG"
  },

  {
    content: "The prediction tool improved our wheat farming by helping us plan irrigation and nutrient management more precisely, leading to higher yields and reduced input costs.",
    author: "Gurucharan Singh Sodhi",
    role: "Wheat Farmer, Punjab",
    initial: "GS"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What Farmers Are Saying
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what farmers using our platform have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="prediction-card">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-agriculture/30 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-agriculture-light text-white">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
