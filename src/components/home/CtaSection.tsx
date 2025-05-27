import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTopOfHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section className="py-20 bg-agriculture text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 max-w-3xl mx-auto">
          Ready to Revolutionize Your Farming Approach?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of farmers who are already using AgriPredict to optimize their yields and increase profitability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-white text-agriculture hover:bg-gray-100 px-8 py-6 text-lg"
            onClick={scrollToTopOfHome}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border border-agriculture text-agriculture hover:bg-agriculture/10 dark:border-white dark:text-white dark:hover:bg-white/10 px-8 py-6 text-lg"
            onClick={goToAbout}
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">
          No credit card required. 14-day free trial with full access to all features.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
