
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeroSection: React.FC = () => {
  return (
    <section className="relative hero-gradient py-20 sm:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 max-w-4xl">
          <span className="text-agriculture">Predict</span> and <span className="text-harvest">Optimize</span> Your Crop Yields with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          Advanced machine learning algorithms to help farmers make data-driven decisions and maximize their harvests, saving time and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-agriculture hover:bg-agriculture-dark text-white px-8 py-6 text-lg">
                Try Prediction <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border w-48">
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/predict" className="w-full">
                  Yield Prediction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/crop-prediction" className="w-full">
                  Crop Prediction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/leaf-disease" className="w-full">
                  Leaf Disease Detection
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/about">
            <Button variant="outline" className="border-agriculture text-agriculture hover:bg-agriculture/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#features" className="text-gray-500 hover:text-agriculture">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-harvest/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-water/10 rounded-full blur-xl" />
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-agriculture/5 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
