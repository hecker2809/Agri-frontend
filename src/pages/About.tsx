import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Binary, Database, HeartHandshake, Sprout, Flower, Leaf, BarChart3, Cloud, LineChart, Users, Server, BotMessageSquare, Network, Activity, Code, Zap, HelpCircle, Flower2 } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  { name: 'Yash Aggarwal', role: 'Backend Developer', initials: 'YA', bio: 'Specializes in designing scalable backend architectures and integrating machine learning models for efficient agricultural data processing.' },
  { name: 'Sahil Srivastava', role: 'Frontend Developer', initials: 'SS', bio: 'Specializes in crafting responsive and intuitive frontend interfaces using modern frameworks for seamless agricultural application experiences.' },
  { name: 'Harshit Singh', role: 'ML Engineer', initials: 'HS', bio: 'Focuses on optimizing predictive models for crop yield prediction and leaf disease detection.' },
  { name: 'Aman Agnihotri', role: 'Applied AI Engineer - Chatbots', initials: 'AA', bio: 'Conversational AI Developer and NLP Engineer specializing in building intelligent chatbots and integrating natural language understanding into user-centric applications.' },
];

const techStack = [
  { name: 'Python', icon: Binary, description: 'Core of our machine learning models and data processing pipelines' },
  { name: 'TypeScript & React', icon: Code2, description: 'Powers our responsive and interactive user interface' },
  { name: 'FastAPI', icon: Zap, description: 'A modern Python microframework that simplifies the creation of web APIs using Python programming' },
  { name: 'LangChain with Ollama', icon: BotMessageSquare, description: 'Enables intelligent and context-aware chatbot interactions by orchestrating language models and tools seamlessly for natural conversations' },
];

const features = [
  {
    icon: <LineChart className="w-12 h-12 text-agriculture" />,
    title: "Predictive Analysis",
    description: "Advanced machine learning models that predict crop yields based on historical data and environmental factors."
  },
  {
    icon: <Sprout className="w-12 h-12 text-agriculture" />,
    title: "Crop Optimization",
    description: "Get recommendations for optimizing crop varieties, planting times, and farming practices based on your specific conditions."
  },
  {
    icon: <Leaf className="w-12 h-12 text-water" />,
    title: "Leaf Disease Infection",
    description: "Detects and classifies leaf disease infections using image-based machine learning for timely and accurate agricultural diagnostics."
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-harvest" />,
    title: "Yield Comparison",
    description: "Compare potential yields across different crops, helping you make informed decisions about what to plant."
  },
];

const faqs = [
  {
    question: "How accurate are AgriPredict's predictions?",
    answer: "Our prediction models achieve 85-90% accuracy based on extensive validation with real-world farming data from various regions and crop types. The accuracy improves over time as our models learn from more data."
  },
  {
    question: "What data do I need to provide for accurate predictions?",
    answer: "For basic predictions, you'll need information about your soil type, location (for weather data), crop variety, and planting date. Additional data like irrigation methods, fertilizer usage, and historical yield can improve accuracy."
  },
  {
    question: "Can AgriPredict detect all types of crop diseases?",
    answer: "Our disease detection system currently covers over 30 common diseases across major crop types. We're constantly expanding our database to include more rare and region-specific plant diseases."
  },
  {
    question: "Is my farm data secure on AgriPredict?",
    answer: "Yes, we employ industry-standard encryption and security practices. Your data is stored securely and never shared with third parties without your explicit consent."
  },
  {
    question: "Can I use AgriPredict for organic farming?",
    answer: "Absolutely! Our system includes parameters specifically for organic farming practices and can provide recommendations that align with organic certification requirements."
  },
];

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* About AgriPredict */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-agriculture mb-6">About AgriPredict</h1>
              <p className="text-lg text-muted-foreground mb-4">
                AgriPredict was founded with a mission to empower farmers with data-driven insights for sustainable and profitable agriculture.
              </p>
              <p className="text-muted-foreground mb-4">
                By combining cutting-edge AI technology with agricultural expertise, we provide accurate predictions and recommendations that help farmers optimize their yields, reduce resource usage, and adapt to changing environmental conditions.
              </p>
              <p className="text-muted-foreground">
                Our platform serves everyone from small-scale organic farmers to large commercial operations, providing customized solutions that address the unique challenges of each farming context.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 rounded-full bg-agriculture/10 flex items-center justify-center">
                <div className="absolute w-64 h-64 rounded-full bg-agriculture/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-agriculture flex items-center justify-center">
                    <Leaf className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Challenge We Address */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 bg-muted py-12 px-8 rounded-xl"
        >
          <div className="text-center mb-10">
            <HeartHandshake className="w-16 h-16 mx-auto text-agriculture mb-4" />
            <h2 className="text-3xl font-bold mb-4">The Challenge We Address</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Unpredictable Climate Patterns</h3>
              <p className="text-muted-foreground">
                Climate change has made traditional farming almanacs less reliable. Our predictive models help farmers adapt to changing weather patterns and make informed decisions.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Resource Optimization</h3>
              <p className="text-muted-foreground">
                Water scarcity and sustainable resource usage are growing concerns. AgriPredict helps optimize irrigation, fertilizer application, and other inputs to reduce waste.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Disease Management</h3>
              <p className="text-muted-foreground">
                Early detection of plant diseases can save entire crops. Our image recognition technology identifies diseases before they spread, reducing crop losses.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Yield Maximization</h3>
              <p className="text-muted-foreground">
                Farmers need to maximize yields to remain profitable. Our AI-driven recommendations help increase production while maintaining sustainability.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Key Features */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card p-6"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies We Use */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <tech.icon className="h-12 w-12 text-agriculture mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Meet Our Team */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto text-agriculture mb-4" />
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our diverse team combines expertise in agriculture, data science, and software development to build solutions that address real-world farming challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-agriculture/10 p-4 flex justify-center">
                  <Avatar className="h-20 w-20 bg-agriculture text-white">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Frequently Asked Questions */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      </div>
    </Layout>
  );
};

export default About;
