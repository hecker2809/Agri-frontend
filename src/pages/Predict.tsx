
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import PredictionSection from '@/components/home/PredictionSection';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Brain, 
  Calculator, 
  ChartBar, 
  CheckCircle2, 
  Database
} from 'lucide-react';

const Predict = () => {
  return (
    <Layout>
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-agriculture mb-4">Crop Yield Prediction</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make data-driven decisions with our advanced AI-powered crop yield prediction system
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-agriculture" />
                    <span>Machine Learning Model</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Our system uses advanced machine learning algorithms trained on historical crop data to make accurate predictions based on your input parameters.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-agriculture" />
                    <span>Calculation Process</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  The prediction model considers multiple factors including soil composition, weather conditions, and historical yield data to generate accurate estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <ChartBar className="w-5 h-5 text-agriculture" />
                    <span>Accuracy Metrics</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Our model achieves 85-90% prediction accuracy based on extensive validation using real-world farming data from various regions and crop types.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-agriculture" />
                    <span>Data Sources</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  We utilize data from agricultural research institutions, weather stations, and farming communities to ensure comprehensive and reliable predictions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-agriculture/5 p-6 rounded-lg border border-agriculture/10">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-agriculture" />
                <h3 className="text-xl font-semibold">Accuracy Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                Our predictions come with detailed confidence intervals and accuracy metrics. We continuously update our models with new data to maintain high prediction accuracy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <PredictionSection />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Predict;
