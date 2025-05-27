import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b">
      <nav className="container flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full bg-agriculture text-white flex items-center justify-center font-bold">A</div>
          <span className="text-xl font-bold text-agriculture">AgriPredict</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" 
            className={`text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/') ? 'text-agriculture font-medium' : ''}`}
            onClick={handleLinkClick}>
            Home
          </Link>

          <a 
            href="#features" 
            className={`text-foreground hover:text-agriculture transition-colors ${location.pathname === '/' ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className={`text-foreground hover:text-agriculture transition-colors ${location.pathname === '/' ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
          >
            How it Works
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-agriculture transition-colors flex items-center gap-1">
              Predict <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleLinkClick}>
                <Link to="/predict" className={`w-full ${isActiveRoute('/predict') ? 'text-agriculture font-medium' : ''}`}>
                  Yield Prediction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLinkClick}>
                <Link to="/crop-prediction" className={`w-full ${isActiveRoute('/crop-prediction') ? 'text-agriculture font-medium' : ''}`}>
                  Crop Prediction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLinkClick}>
                <Link to="/leaf-disease" className={`w-full ${isActiveRoute('/leaf-disease') ? 'text-agriculture font-medium' : ''}`}>
                  Leaf Disease Detection
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            to="/about" 
            className={`text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/about') ? 'text-agriculture font-medium' : ''}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <ThemeToggle />

          {/* Glowy Get Started Button */}
          <Button asChild className="bg-agriculture hover:bg-agriculture-dark hover:shadow-[0_0_16px_#4ade80] transition-all duration-300">
            <Link to="/predict">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t py-4 px-6 space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className={`block text-foreground hover:text-agriculture transition-colors ${location.pathname === '/' ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
            onClick={handleLinkClick}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className={`block text-foreground hover:text-agriculture transition-colors ${location.pathname === '/' ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
            onClick={handleLinkClick}
          >
            How it Works
          </a>

          <div className="pl-4 border-l-2 border-agriculture/30 space-y-2">
            <Link 
              to="/predict" 
              className={`block text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/predict') ? 'text-agriculture font-medium' : ''}`}
              onClick={handleLinkClick}
            >
              Yield Prediction
            </Link>
            <Link 
              to="/crop-prediction" 
              className={`block text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/crop-prediction') ? 'text-agriculture font-medium' : ''}`}
              onClick={handleLinkClick}
            >
              Crop Prediction
            </Link>
            <Link 
              to="/leaf-disease" 
              className={`block text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/leaf-disease') ? 'text-agriculture font-medium' : ''}`}
              onClick={handleLinkClick}
            >
              Leaf Disease Detection
            </Link>
          </div>

          <Link 
            to="/about" 
            className={`block text-foreground hover:text-agriculture transition-colors ${isActiveRoute('/about') ? 'text-agriculture font-medium' : ''}`}
            onClick={handleLinkClick}
          >
            About
          </Link>

          <Button asChild className="w-full bg-agriculture hover:bg-agriculture-dark hover:shadow-[0_0_16px_#4ade80] transition-all duration-300" onClick={handleLinkClick}>
            <Link to="/predict">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
