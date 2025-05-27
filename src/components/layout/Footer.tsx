
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-agriculture text-white flex items-center justify-center font-bold">A</div>
              <span className="text-xl font-bold text-agriculture">AgriPredict</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Empowering farmers with data-driven insights to optimize crop yields and improve agricultural productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-agriculture">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-agriculture">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-agriculture">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-agriculture">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Webinars</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-agriculture">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-agriculture">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy; {currentYear} AgriPredict. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
